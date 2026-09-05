import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisFileUpload } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-file-upload', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-file-upload',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-file-upload>Example</kanonis-file-upload></div>`,
};

void KanonisFileUpload;
