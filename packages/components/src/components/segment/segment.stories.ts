import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisSegment } from './segment.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-segment',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    value: 'Example value',
    selected: false,
    disabled: false,
    label: 'Example label',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    value: { control: 'text', description: 'Public property.' },
    selected: { control: 'boolean', description: 'Public property.' },
    disabled: { control: 'boolean', description: 'Public property.' },
    label: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `value`, `selected`, `disabled`, `label`. Slots: `default`. Events: `kanonis-segment-request`.',
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
    const component = document.createElement('kanonis-segment') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-segment-request'] as readonly string[]) {
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

void KanonisSegment;
