import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSkeleton } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-skeleton', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-skeleton',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-skeleton>Example</kanonis-skeleton></div>`,
};

void KanonisSkeleton;
