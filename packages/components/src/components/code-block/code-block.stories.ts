import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCodeBlock } from './code-block.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-code-block', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-code-block',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-code-block>Example</kanonis-code-block></div>`,
};

void KanonisCodeBlock;
