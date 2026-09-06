import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisGrid } from '../../../../packages/components/src/components/grid/grid.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-grid', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-grid',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-grid>Example</kanonis-grid></div>`,
};

void KanonisGrid;
