import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisBulkActions } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-bulk-actions', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-bulk-actions',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-bulk-actions>Example</kanonis-bulk-actions></div>`,
};

void KanonisBulkActions;
