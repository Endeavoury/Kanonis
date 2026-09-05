import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCard } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-card', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-card',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-card>Example</kanonis-card></div>`,
};

void KanonisCard;
