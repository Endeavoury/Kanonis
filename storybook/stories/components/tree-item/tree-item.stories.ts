import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTreeItem } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-tree-item', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-tree-item',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-tree-item>Example</kanonis-tree-item></div>`,
};

void KanonisTreeItem;
