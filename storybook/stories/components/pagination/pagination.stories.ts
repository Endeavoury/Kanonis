import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPagination } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-pagination', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-pagination',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pagination>Example</kanonis-pagination></div>`,
};

void KanonisPagination;
