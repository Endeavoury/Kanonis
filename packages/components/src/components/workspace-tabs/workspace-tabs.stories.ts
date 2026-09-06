import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisWorkspaceTabs } from './workspace-tabs.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-workspace-tabs', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-workspace-tabs',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-workspace-tabs>Example</kanonis-workspace-tabs></div>`,
};

void KanonisWorkspaceTabs;
