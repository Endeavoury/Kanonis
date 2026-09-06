import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisStack } from './stack.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-stack', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-stack',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-stack>Example</kanonis-stack></div>`,
};

void KanonisStack;
