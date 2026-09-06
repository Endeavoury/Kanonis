import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisWorkspace } from './workspace.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-workspace', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-workspace',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-workspace>Example</kanonis-workspace></div>`,
};

void KanonisWorkspace;
