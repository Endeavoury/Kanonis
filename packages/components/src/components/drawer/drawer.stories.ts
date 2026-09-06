import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDrawer } from './drawer.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-drawer', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-drawer',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-drawer>Example</kanonis-drawer></div>`,
};

void KanonisDrawer;
