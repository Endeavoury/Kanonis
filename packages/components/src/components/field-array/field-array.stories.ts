import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisFieldArray } from './field-array.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-field-array', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-field-array',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-field-array>Example</kanonis-field-array></div>`,
};

void KanonisFieldArray;
