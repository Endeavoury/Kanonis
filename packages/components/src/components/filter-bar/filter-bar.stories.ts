import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisFilterBar } from './filter-bar.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-filter-bar', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-filter-bar',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-filter-bar>Example</kanonis-filter-bar></div>`,
};

void KanonisFilterBar;
