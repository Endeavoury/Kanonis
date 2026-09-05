import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisViewToolbar } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-view-toolbar', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-view-toolbar',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-view-toolbar>Example</kanonis-view-toolbar></div>`,
};

void KanonisViewToolbar;
