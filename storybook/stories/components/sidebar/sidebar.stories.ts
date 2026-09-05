import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSidebar } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-sidebar', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-sidebar',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-sidebar>Example</kanonis-sidebar></div>`,
};

void KanonisSidebar;
