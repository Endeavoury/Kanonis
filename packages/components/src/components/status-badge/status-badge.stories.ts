import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisStatusBadge } from './status-badge.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-status-badge', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-status-badge',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-status-badge>Example</kanonis-status-badge></div>`,
};

void KanonisStatusBadge;
