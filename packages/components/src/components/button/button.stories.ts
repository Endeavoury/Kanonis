import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisButton } from './button.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-button', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-button',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-button>Example</kanonis-button></div>`,
};

void KanonisButton;
