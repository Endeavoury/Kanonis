import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisSavedView } from './saved-view.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-saved-view',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    views: [],
    current: 'Example',
    saveLabel: 'Save view',
    deleteLabel: 'Delete view',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    views: { control: 'object', description: 'Public property (KanonisSavedViewOption[]).' },
    current: { control: 'text', description: 'Public property.' },
    saveLabel: { control: 'text', description: 'Public property.' },
    deleteLabel: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `views`, `current`, `saveLabel`, `deleteLabel`. This component does not expose a slot. Events: `kanonis-view-change`, `kanonis-view-save`, `kanonis-view-delete`.',
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
    const component = document.createElement('kanonis-saved-view') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of [
      'kanonis-view-change',
      'kanonis-view-save',
      'kanonis-view-delete',
    ] as readonly string[]) {
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

void KanonisSavedView;
