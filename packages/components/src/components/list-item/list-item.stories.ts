import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisListItem } from './list-item.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-list-item', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-list-item',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-list-item>Example</kanonis-list-item></div>`,
};

void KanonisListItem;
