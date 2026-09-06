import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisBadge } from './badge.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-badge', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-badge',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-badge>Example</kanonis-badge></div>`,
};

void KanonisBadge;
