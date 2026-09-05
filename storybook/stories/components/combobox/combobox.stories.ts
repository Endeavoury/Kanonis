import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCombobox } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-combobox', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-combobox',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-combobox>Example</kanonis-combobox></div>`,
};

void KanonisCombobox;
