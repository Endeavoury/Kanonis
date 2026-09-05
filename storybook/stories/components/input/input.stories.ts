import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisInput } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-input', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-input',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-input>Example</kanonis-input></div>`,
};

void KanonisInput;
