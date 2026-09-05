import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDataTable } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-data-table', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-data-table',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-data-table>Example</kanonis-data-table></div>`,
};

void KanonisDataTable;
