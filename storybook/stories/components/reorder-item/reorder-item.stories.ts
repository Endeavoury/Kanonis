import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisReorderItem } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-reorder-item', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-reorder-item',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-reorder-item>Example</kanonis-reorder-item></div>`,
};

void KanonisReorderItem;
