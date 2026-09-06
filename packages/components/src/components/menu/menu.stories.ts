import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisMenu } from './menu.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-menu', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-menu',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-menu>Example</kanonis-menu></div>`,
};

void KanonisMenu;
