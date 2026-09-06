import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisProgress } from './progress.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-progress',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Example label',
    value: 0,
    max: 100,
    showValue: false,
    tone: 'accent',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    value: { control: { type: 'number' }, description: 'Public property (number).' },
    max: { control: { type: 'number' }, description: 'Public property.' },
    showValue: { control: 'boolean', description: 'Public property.' },
    tone: {
      control: 'select',
      options: ['accent', 'success', 'warning', 'danger'],
      description: "Public property ('accent' | 'success' | 'warning' | 'danger').",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `value`, `max`, `showValue`, `tone`. This component does not expose a slot. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-progress') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of [] as readonly string[]) {
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

void KanonisProgress;
