import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisIconButton } from './icon-button.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-icon-button', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-icon-button',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-icon-button>Example</kanonis-icon-button></div>`,
};

void KanonisIconButton;
