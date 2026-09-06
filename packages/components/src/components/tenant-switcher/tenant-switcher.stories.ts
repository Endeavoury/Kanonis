import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTenantSwitcher } from './tenant-switcher.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-tenant-switcher', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-tenant-switcher',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-tenant-switcher>Example</kanonis-tenant-switcher></div>`,
};

void KanonisTenantSwitcher;
