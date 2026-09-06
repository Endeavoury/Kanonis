import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDetailSidebar } from '../../../../packages/components/src/components/detail-sidebar/detail-sidebar.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-detail-sidebar', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-detail-sidebar',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-detail-sidebar>Example</kanonis-detail-sidebar></div>`,
};

void KanonisDetailSidebar;
