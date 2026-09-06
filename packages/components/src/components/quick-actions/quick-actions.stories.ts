import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisQuickActions } from './quick-actions.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-quick-actions',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component has no public properties. Slots: `default`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-quick-actions') as HTMLElement &
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

void KanonisQuickActions;
