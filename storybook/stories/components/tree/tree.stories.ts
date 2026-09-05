import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTree } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-tree', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-tree',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-tree>Example</kanonis-tree></div>`,
};

void KanonisTree;
