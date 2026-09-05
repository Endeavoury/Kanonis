import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTooltip } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-tooltip', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-tooltip',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-tooltip>Example</kanonis-tooltip></div>`,
};

void KanonisTooltip;
