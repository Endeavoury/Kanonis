import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisInline } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-inline', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-inline',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-inline>Example</kanonis-inline></div>`,
};

void KanonisInline;
