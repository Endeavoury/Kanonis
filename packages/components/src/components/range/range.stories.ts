import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisRange } from './range.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-range', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-range',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-range>Example</kanonis-range></div>`,
};

void KanonisRange;
