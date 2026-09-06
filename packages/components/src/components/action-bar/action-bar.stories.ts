import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisActionBar } from './action-bar.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-action-bar', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-action-bar',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-action-bar>Example</kanonis-action-bar></div>`,
};

void KanonisActionBar;
