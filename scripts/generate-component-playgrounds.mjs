#!/usr/bin/env node

import { glob, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname } from 'node:path';

const sampleText = {
  label: 'Example label',
  heading: 'Example heading',
  description: 'Supporting information that explains this component.',
  message: 'A useful message for the current task.',
  placeholder: 'Enter a value',
  value: 'Example value',
  name: 'example',
  helpText: 'Helpful guidance appears here.',
  error: 'Example validation message.',
  caption: 'Example data',
  title: 'Example title',
  content: 'Example content',
  href: '',
  target: '',
  rel: '',
};

function propertyDefault(name, type, initializer, decorator) {
  if (initializer && !initializer.includes('undefined')) {
    if (initializer === "''") return JSON.stringify(sampleText[name] ?? 'Example');
    return initializer;
  }
  if (/Boolean/.test(decorator)) return 'false';
  if (/Number/.test(decorator)) return '0';
  if (/\[\]|Array|Record|Map|Set/.test(type) || /attribute:\s*false/.test(decorator))
    return /\[\]|Array/.test(type) ? '[]' : '{}';
  return JSON.stringify(sampleText[name] ?? 'Example');
}

function typeAliases(source) {
  return new Map(
    [...source.matchAll(/(?:export )?type (\w+)\s*=\s*([^;]+);/g)].map((match) => [
      match[1],
      match[2],
    ]),
  );
}

function control(type, decorator, aliases) {
  if (/Boolean/.test(decorator)) return "{ control: 'boolean' }";
  if (/Number/.test(decorator)) return "{ control: { type: 'number' } }";
  const resolved = aliases.get(type.trim()) ?? type;
  const options = [...resolved.matchAll(/'([^']+)'/g)].map((match) => match[1]);
  if (!options.length && type.trim() === 'KanonisSize') options.push('small', 'medium', 'large');
  if (!options.length && type.trim() === 'KanonisTone')
    options.push('neutral', 'info', 'success', 'warning', 'danger');
  if (!options.length && type.trim() === 'KanonisDensity')
    options.push('compact', 'comfortable', 'spacious');
  if (options.length) return `{ control: 'select', options: ${JSON.stringify(options)} }`;
  if (/\[\]|Array|Record|Map|Set/.test(type) || /attribute:\s*false/.test(decorator))
    return "{ control: 'object' }";
  return "{ control: 'text' }";
}

function properties(source) {
  const result = [];
  const aliases = typeAliases(source);
  const pattern =
    /@property(?:\(([^\n]*)\))?\s*(?:public |private |protected |readonly )?(\w+)[!?]?\s*(?::\s*([^=;\n]+))?\s*(?:=\s*([\s\S]*?))?;/g;
  for (const match of source.matchAll(pattern)) {
    const [, decorator = '', name, type = '', initializer = ''] = match;
    if (name === 'internals') continue;
    result.push({
      name,
      type: type.trim(),
      defaultValue: propertyDefault(name, type, initializer.trim(), decorator),
      control: control(type, decorator, aliases),
    });
  }
  return result;
}

function events(source) {
  return [
    ...new Set([
      ...[...source.matchAll(/\.emit(?:<[^>]+>)?\('([^']+)'/g)].map((match) => match[1]),
      ...[...source.matchAll(/new CustomEvent\('([^']+)'/g)].map((match) => match[1]),
    ]),
  ];
}

function slots(source) {
  return [
    ...new Set(
      [...source.matchAll(/<slot(?:\s+name=["']([^"']+)["'])?/g)].map(
        (match) => match[1] ?? 'default',
      ),
    ),
  ];
}

for await (const storyPath of glob('packages/components/src/components/*/*.stories.ts')) {
  const existing = await readFile(storyPath, 'utf8');
  if (!existing.includes('void Kanonis')) continue;

  const componentDirectory = dirname(storyPath);
  const name = basename(storyPath, '.stories.ts');
  const sourcePath = `${componentDirectory}/${name}.ts`;
  const source = await readFile(sourcePath, 'utf8');
  const tag = `kanonis-${name}`;
  const componentProperties = properties(source);
  const componentEvents = events(source);
  const componentSlots = slots(source);
  const classImport = existing.match(/import \{ (Kanonis\w+) \} from '([^']+)';/);
  if (!classImport) throw new Error(`Could not find component import in ${storyPath}`);

  const args = [
    "slotContent: 'Example content'",
    ...componentProperties.map((item) => `${item.name}: ${item.defaultValue}`),
  ].join(',\n    ');
  const argTypes = [
    "slotContent: { control: 'text', description: 'Default-slot content.' }",
    ...componentProperties.map(
      (item) =>
        `${item.name}: { ${item.control.slice(2, -2)}, description: ${JSON.stringify(`Public property${item.type ? ` (${item.type})` : ''}.`)} }`,
    ),
  ].join(',\n    ');
  const eventNames = JSON.stringify(componentEvents);
  const api = [
    componentProperties.length
      ? `Properties: ${componentProperties.map((item) => `\`${item.name}\``).join(', ')}.`
      : 'This component has no public properties.',
    componentSlots.length
      ? `Slots: ${componentSlots.map((slot) => `\`${slot}\``).join(', ')}.`
      : 'This component does not expose a slot.',
    componentEvents.length
      ? `Events: ${componentEvents.map((event) => `\`${event}\``).join(', ')}.`
      : 'This component does not emit a custom event.',
  ].join(' ');

  const generated = `import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ${classImport[1]} } from '${classImport[2]}';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/${tag}',
  tags: ['autodocs'],
  args: {
    ${args},
  },
  argTypes: {
    ${argTypes},
  },
  parameters: {
    docs: {
      description: {
        component: '${api}',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

/** Use the Controls panel to try every public property. Emitted events appear below the component. */
export const Usage: Story = {
  render: (args) => {
    const container = document.createElement('section');
    container.style.cssText = 'display:grid;gap:1rem;max-width:960px';
    const component = document.createElement('${tag}') as HTMLElement & Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText = 'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ${eventNames} as readonly string[]) {
      component.addEventListener(eventName, (event) => {
        const detail = event instanceof CustomEvent && event.detail !== undefined ? ' — ' + JSON.stringify(event.detail) : '';
        events.textContent = eventName + detail;
      });
    }
    container.append(component, events);
    return container;
  },
};

void ${classImport[1]};
`;
  await writeFile(storyPath, generated);
}

console.log('Generated interactive usage stories from component public APIs.');
