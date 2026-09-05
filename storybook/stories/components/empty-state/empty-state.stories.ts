import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisEmptyState } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-empty-state', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-empty-state',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-empty-state>Example</kanonis-empty-state></div>`,
};

void KanonisEmptyState;
