import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { KanonisTableColumn } from '@endeavoury/kanonis';

const columns: KanonisTableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'team', label: 'Team', sortable: true },
  { key: 'status', label: 'Status' },
];
const rows = [
  { id: '1', name: 'Atlas rollout', team: 'Platform', status: 'In progress' },
  { id: '2', name: 'Access review', team: 'Security', status: 'Needs review' },
  { id: '3', name: 'Workspace migration', team: 'Operations', status: 'Complete' },
];

const meta: Meta = {
  title: 'Patterns/Workflow',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;

export const DataWorkflow: StoryObj = {
  render: () =>
    html`<div style="max-width:1100px;margin:auto;padding:1.5rem;display:grid;gap:1rem">
      <kanonis-view-toolbar query="" placeholder="Search projects">
        <kanonis-button slot="actions" variant="secondary">Export</kanonis-button>
        <kanonis-button slot="actions">New project</kanonis-button>
      </kanonis-view-toolbar>
      <kanonis-filter-builder
        .fields=${[
          { key: 'team', label: 'Team' },
          { key: 'status', label: 'Status' },
        ]}
        .rules=${[{ field: 'status', operator: 'equals', value: 'In progress' }]}
      ></kanonis-filter-builder>
      <kanonis-bulk-actions count="2"
        ><kanonis-button variant="secondary">Assign</kanonis-button
        ><kanonis-button variant="danger">Archive</kanonis-button></kanonis-bulk-actions
      >
      <kanonis-data-grid .columns=${columns} .rows=${rows} selectable caption="Projects"></kanonis-data-grid>
      <div style="display:flex;gap:1rem;align-items:start;flex-wrap:wrap">
        <kanonis-column-manager
          .columns=${columns.map((column) => ({ key: String(column.key), label: column.label, visible: true }))}
        ></kanonis-column-manager>
        <kanonis-saved-view
          .views=${[
            { id: 'mine', label: 'My projects' },
            { id: 'review', label: 'Needs review' },
          ]}
        ></kanonis-saved-view>
      </div>
      <kanonis-combobox
        label="Owner"
        .options=${[
          { label: 'Platform team', value: 'platform' },
          { label: 'Security team', value: 'security' },
        ]}
      ></kanonis-combobox>
      <kanonis-validation-summary
        .errors=${[{ id: 'owner', message: 'Choose an owner before saving.' }]}
      ></kanonis-validation-summary>
    </div>`,
};
