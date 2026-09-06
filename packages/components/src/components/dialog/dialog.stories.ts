import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDialog } from './dialog.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-dialog', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-dialog',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-dialog>Example</kanonis-dialog></div>`,
};

void KanonisDialog;
