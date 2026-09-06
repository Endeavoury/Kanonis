import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisAvatar } from './avatar.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-avatar', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-avatar',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-avatar>Example</kanonis-avatar></div>`,
};

void KanonisAvatar;
