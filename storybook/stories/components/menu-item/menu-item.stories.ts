import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisMenuItem } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-menu-item', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-menu-item',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-menu-item>Example</kanonis-menu-item></div>`,
};

void KanonisMenuItem;
