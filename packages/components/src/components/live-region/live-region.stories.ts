import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisLiveRegion } from './live-region.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-live-region', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-live-region',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-live-region>Example</kanonis-live-region></div>`,
};

void KanonisLiveRegion;
