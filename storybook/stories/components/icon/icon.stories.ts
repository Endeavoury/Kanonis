import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisIcon } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-icon', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-icon',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-icon>Example</kanonis-icon></div>`,
};

void KanonisIcon;
