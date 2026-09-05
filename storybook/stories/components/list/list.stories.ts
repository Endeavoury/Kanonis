import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisList } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-list', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-list',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-list>Example</kanonis-list></div>`,
};

void KanonisList;
