import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisInspectorPane } from './inspector-pane.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-inspector-pane', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-inspector-pane',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-inspector-pane>Example</kanonis-inspector-pane></div>`,
};

void KanonisInspectorPane;
