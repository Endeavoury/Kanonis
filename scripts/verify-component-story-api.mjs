#!/usr/bin/env node

import { glob, readFile } from 'node:fs/promises';
import { basename, dirname } from 'node:path';

const failures = [];

for await (const registrationPath of glob('packages/components/src/components/*/register.ts')) {
  const registration = await readFile(registrationPath, 'utf8');
  const tag = registration.match(/defineComponent\('([^']+)'/)?.[1];
  if (!tag) continue;

  const directory = dirname(registrationPath);
  const componentName = basename(directory);
  const source = await readFile(`${directory}/${componentName}.ts`, 'utf8');
  const story = await readFile(`${directory}/${componentName}.stories.ts`, 'utf8');
  const properties = [...source.matchAll(/@property(?:\([^\n]*\))?\s*(?:public |private |protected |readonly )?(\w+)/g)].map(
    (match) => match[1],
  );
  const events = [
    ...new Set([
      ...[...source.matchAll(/\.emit(?:<[^>]+>)?\('([^']+)'/g)].map((match) => match[1]),
      ...[...source.matchAll(/new CustomEvent\('([^']+)'/g)].map((match) => match[1]),
    ]),
  ];

  if (!story.includes('export const Usage') || !story.includes('argTypes:'))
    failures.push(`${tag}: missing interactive Usage story or Controls`);
  for (const property of properties) {
    if (!story.includes(`${property}:`)) failures.push(`${tag}: missing property control for ${property}`);
  }
  for (const event of events) {
    if (!story.includes(`\`${event}\``)) failures.push(`${tag}: missing event documentation for ${event}`);
  }
}

if (failures.length) throw new Error(failures.join('\n'));
console.log('Each component story exposes its public properties and emitted events.');
