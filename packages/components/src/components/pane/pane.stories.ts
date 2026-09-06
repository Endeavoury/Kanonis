import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPane } from './pane.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-pane', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-pane',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane>Example</kanonis-pane></div>`,
};

void KanonisPane;
