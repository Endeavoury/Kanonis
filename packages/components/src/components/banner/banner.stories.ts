import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisBanner } from './banner.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-banner', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-banner',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-banner>Example</kanonis-banner></div>`,
};

void KanonisBanner;
