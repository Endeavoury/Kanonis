import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCheckbox } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-checkbox', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-checkbox',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-checkbox>Example</kanonis-checkbox></div>`,
};

void KanonisCheckbox;
