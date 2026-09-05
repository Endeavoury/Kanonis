import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisQuickActions } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-quick-actions', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-quick-actions',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-quick-actions>Example</kanonis-quick-actions></div>`,
};

void KanonisQuickActions;
