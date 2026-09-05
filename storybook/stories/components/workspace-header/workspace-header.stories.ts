import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisWorkspaceHeader } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-workspace-header', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-workspace-header',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-workspace-header>Example</kanonis-workspace-header></div>`,
};

void KanonisWorkspaceHeader;
