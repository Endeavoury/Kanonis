import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTextarea } from '../../../../packages/components/src/components/textarea/textarea.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-textarea', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-textarea',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-textarea>Example</kanonis-textarea></div>`,
};

void KanonisTextarea;
