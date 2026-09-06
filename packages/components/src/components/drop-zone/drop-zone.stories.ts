import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisDropZone } from './drop-zone.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-drop-zone',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Choose or drop files',
    hint: 'Example',
    accept: 'Example',
    multiple: false,
    disabled: false,
    busy: false,
    maxFiles: 1,
    files: [],
    dragging: false,
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    hint: { control: 'text', description: 'Public property.' },
    accept: { control: 'text', description: 'Public property.' },
    multiple: { control: 'boolean', description: 'Public property.' },
    disabled: { control: 'boolean', description: 'Public property.' },
    busy: { control: 'boolean', description: 'Public property.' },
    maxFiles: { control: { type: 'number' }, description: 'Public property.' },
    files: { control: 'object', description: 'Public property (File[]).' },
    dragging: { control: 'boolean', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `hint`, `accept`, `multiple`, `disabled`, `busy`, `maxFiles`, `files`, `dragging`. Slots: `icon`. Events: `kanonis-files`, `kanonis-file-reject`.',
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
    const component = document.createElement('kanonis-drop-zone') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-files', 'kanonis-file-reject'] as readonly string[]) {
      component.addEventListener(eventName, (event) => {
        const detail =
          event instanceof CustomEvent && event.detail !== undefined
            ? ' — ' + JSON.stringify(event.detail)
            : '';
        events.textContent = eventName + detail;
      });
    }
    container.append(component, events);
    return container;
  },
};

void KanonisDropZone;
