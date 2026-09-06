import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisToastRegion } from '../../../../packages/components/src/components/toast-region/toast-region.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-toast-region', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-toast-region',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-toast-region>Example</kanonis-toast-region></div>`,
};

void KanonisToastRegion;
