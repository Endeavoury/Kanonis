import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisRoleBadge } from './role-badge.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-role-badge', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-role-badge',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-role-badge>Example</kanonis-role-badge></div>`,
};

void KanonisRoleBadge;
