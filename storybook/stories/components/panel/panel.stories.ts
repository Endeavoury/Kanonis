import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPanel } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-panel', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-panel',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-panel>Example</kanonis-panel></div>`,
};

void KanonisPanel;
