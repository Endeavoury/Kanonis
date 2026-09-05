import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisFormField } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-form-field', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-form-field',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-form-field>Example</kanonis-form-field></div>`,
};

void KanonisFormField;
