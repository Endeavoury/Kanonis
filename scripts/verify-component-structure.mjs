import { access, glob, readFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import ts from 'typescript';

const root = 'packages/components/src/components';
const declarations = await readFile('packages/components/src/custom-elements.ts', 'utf8');
const expected = new Map(
  [...declarations.matchAll(/'(kanonis-[a-z0-9-]+)'\s*:\s*(Kanonis\w+)/g)].map(([, tag, name]) => {
    const component = tag.slice('kanonis-'.length);
    return [name, resolve(root, component, `${component}.ts`)];
  }),
);
if (!expected.size) throw new Error('No component declarations found.');

const found = new Set();
for await (const file of glob(`${root}/**/*.ts`)) {
  const source = ts.createSourceFile(
    file,
    await readFile(file, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
  );
  for (const statement of source.statements) {
    if (!ts.isClassDeclaration(statement)) continue;
    const name = statement.name?.text;
    if (!name || expected.get(name) !== resolve(file) || found.has(name)) {
      throw new Error(`Component implementation must live in its own file: ${name} in ${file}`);
    }
    found.add(name);
  }
}
for (const file of expected.values()) {
  const directory = dirname(file);
  await access(resolve(directory, `${basename(file, '.ts')}.stories.ts`));
  const registration = await readFile(resolve(directory, 'register.ts'), 'utf8');
  const definitions = [...registration.matchAll(/defineComponent\('([^']+)'/g)];
  if (definitions.length !== 1 || definitions[0][1] !== `kanonis-${basename(directory)}`)
    throw new Error(`Expected exactly one matching registration in ${directory}/register.ts`);
}
for await (const file of glob('packages/components/src/register/*.ts'))
  throw new Error(`Registration must be colocated with its component: ${file}`);

const missing = [...expected.keys()].filter((name) => !found.has(name));
if (missing.length) throw new Error(`Missing component implementations: ${missing.join(', ')}`);
console.log(
  `${found.size} components each have exactly one implementation in their own directory.`,
);
