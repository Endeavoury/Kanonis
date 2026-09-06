import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisReorderList } from './reorder-list.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-reorder-list', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-reorder-list',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-reorder-list>Example</kanonis-reorder-list></div>`,
};

void KanonisReorderList;
