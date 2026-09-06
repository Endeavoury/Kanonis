import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSidebarItem } from '../../../../packages/components/src/components/sidebar-item/sidebar-item.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-sidebar-item', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-sidebar-item',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-sidebar-item>Example</kanonis-sidebar-item></div>`,
};

void KanonisSidebarItem;
