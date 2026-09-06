import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisUserMenu } from './user-menu.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-user-menu', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-user-menu',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-user-menu>Example</kanonis-user-menu></div>`,
};

void KanonisUserMenu;
