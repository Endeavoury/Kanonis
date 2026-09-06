import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisPagination } from './pagination.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-pagination',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    page: 1,
    pages: 1,
    siblingCount: 1,
    label: 'Pagination',
    previousLabel: 'Previous page',
    nextLabel: 'Next page',
    pageLabel: 'Page',
    disabled: false,
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    page: { control: { type: 'number' }, description: 'Public property.' },
    pages: { control: { type: 'number' }, description: 'Public property.' },
    siblingCount: { control: { type: 'number' }, description: 'Public property.' },
    label: { control: 'text', description: 'Public property.' },
    previousLabel: { control: 'text', description: 'Public property.' },
    nextLabel: { control: 'text', description: 'Public property.' },
    pageLabel: { control: 'text', description: 'Public property.' },
    disabled: { control: 'boolean', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `page`, `pages`, `siblingCount`, `label`, `previousLabel`, `nextLabel`, `pageLabel`, `disabled`. This component does not expose a slot. Events: `kanonis-page-change`.',
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
    const component = document.createElement('kanonis-pagination') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-page-change'] as readonly string[]) {
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

void KanonisPagination;
