import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisLoadingState } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-loading-state', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-loading-state',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-loading-state>Example</kanonis-loading-state></div>`,
};

void KanonisLoadingState;
