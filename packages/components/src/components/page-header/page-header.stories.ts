import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPageHeader } from './page-header.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-page-header', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-page-header',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-page-header>Example</kanonis-page-header></div>`,
};

void KanonisPageHeader;
