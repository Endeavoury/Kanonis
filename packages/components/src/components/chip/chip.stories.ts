import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisChip } from './chip.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-chip', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-chip',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-chip>Example</kanonis-chip></div>`,
};

void KanonisChip;
