import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisBreadcrumbs } from './breadcrumbs.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-breadcrumbs', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-breadcrumbs',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-breadcrumbs>Example</kanonis-breadcrumbs></div>`,
};

void KanonisBreadcrumbs;
