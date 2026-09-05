import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCodeEditor } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-code-editor', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-code-editor',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-code-editor>Example</kanonis-code-editor></div>`,
};

void KanonisCodeEditor;
