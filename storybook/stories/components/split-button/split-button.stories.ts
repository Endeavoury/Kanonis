import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSplitButton } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-split-button', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-split-button',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-split-button>Example</kanonis-split-button></div>`,
};

void KanonisSplitButton;
