import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisFormSection } from './form-section.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-form-section',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    heading: 'Example heading',
    description: 'Supporting information that explains this component.',
    columns: 2,
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    heading: { control: 'text', description: 'Public property.' },
    description: { control: 'text', description: 'Public property.' },
    columns: { control: { type: 'number' }, description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `heading`, `description`, `columns`. Slots: `actions`, `default`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-form-section') as HTMLElement &
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

void KanonisFormSection;
