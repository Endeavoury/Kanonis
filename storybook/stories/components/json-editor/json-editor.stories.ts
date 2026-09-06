import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisJsonEditor } from '../../../../packages/components/src/components/json-editor/json-editor.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-json-editor', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-json-editor',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-json-editor>Example</kanonis-json-editor></div>`,
};

void KanonisJsonEditor;
