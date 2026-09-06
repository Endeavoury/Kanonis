import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisDataTable } from './data-table.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-data-table',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    columns: [],
    rows: [],
    caption: 'Example data',
    label: 'Data table',
    description: 'Supporting information that explains this component.',
    emptyMessage: 'No results',
    rowKey: 'id',
    selectedKey: 'Example',
    selectable: false,
    busy: false,
    focusableOverflow: true,
    loadingLabel: 'Loading data',
    announcementDelay: 750,
    page: 1,
    pageSize: 0,
    totalRows: 0,
    density: 'comfortable',
    sortKey: 'Example',
    sortDirection: 'ascending',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    columns: { control: 'object', description: 'Public property (KanonisTableColumn[]).' },
    rows: { control: 'object', description: 'Public property (Record<string, unknown>[]).' },
    caption: { control: 'text', description: 'Public property.' },
    label: { control: 'text', description: 'Public property.' },
    description: { control: 'text', description: 'Public property.' },
    emptyMessage: { control: 'text', description: 'Public property.' },
    rowKey: { control: 'text', description: 'Public property.' },
    selectedKey: { control: 'text', description: 'Public property.' },
    selectable: { control: 'boolean', description: 'Public property.' },
    busy: { control: 'boolean', description: 'Public property.' },
    focusableOverflow: { control: 'boolean', description: 'Public property.' },
    loadingLabel: { control: 'text', description: 'Public property.' },
    announcementDelay: { control: { type: 'number' }, description: 'Public property.' },
    page: { control: { type: 'number' }, description: 'Public property.' },
    pageSize: { control: { type: 'number' }, description: 'Public property.' },
    totalRows: { control: { type: 'number' }, description: 'Public property.' },
    density: {
      control: 'select',
      options: ['compact', 'comfortable', 'spacious'],
      description: 'Public property (KanonisDensity).',
    },
    sortKey: { control: 'text', description: 'Public property.' },
    sortDirection: {
      control: 'select',
      options: ['ascending', 'descending'],
      description: "Public property ('ascending' | 'descending').",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `columns`, `rows`, `caption`, `label`, `description`, `emptyMessage`, `rowKey`, `selectedKey`, `selectable`, `busy`, `focusableOverflow`, `loadingLabel`, `announcementDelay`, `page`, `pageSize`, `totalRows`, `density`, `sortKey`, `sortDirection`. This component does not expose a slot. Events: `kanonis-sort`, `kanonis-row-select`, `kanonis-page-change`.',
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
    const component = document.createElement('kanonis-data-table') as HTMLElement &
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
      'kanonis-sort',
      'kanonis-row-select',
      'kanonis-page-change',
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

void KanonisDataTable;
