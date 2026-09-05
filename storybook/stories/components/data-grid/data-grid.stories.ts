import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDataGrid } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-data-grid', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-data-grid',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-data-grid>Example</kanonis-data-grid></div>`,
};

void KanonisDataGrid;
