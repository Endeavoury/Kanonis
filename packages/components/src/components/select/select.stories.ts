import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSelect } from './select.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-select', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-select',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-select>Example</kanonis-select></div>`,
};

void KanonisSelect;
