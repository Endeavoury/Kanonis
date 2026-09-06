import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisColumnManager } from './column-manager.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-column-manager', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-column-manager',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-column-manager>Example</kanonis-column-manager></div>`,
};

void KanonisColumnManager;
