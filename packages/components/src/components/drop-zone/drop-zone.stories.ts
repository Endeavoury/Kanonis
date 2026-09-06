import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDropZone } from './drop-zone.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-drop-zone', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-drop-zone',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-drop-zone>Example</kanonis-drop-zone></div>`,
};

void KanonisDropZone;
