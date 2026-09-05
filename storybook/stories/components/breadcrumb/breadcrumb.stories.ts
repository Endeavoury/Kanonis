import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisBreadcrumb } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-breadcrumb', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-breadcrumb',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-breadcrumb>Example</kanonis-breadcrumb></div>`,
};

void KanonisBreadcrumb;
