import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTabs } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-tabs', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-tabs',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-tabs>Example</kanonis-tabs></div>`,
};

void KanonisTabs;
