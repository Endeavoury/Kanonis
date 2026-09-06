import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisScrollablePane } from '../../../../packages/components/src/components/scrollable-pane/scrollable-pane.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-scrollable-pane', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-scrollable-pane',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-scrollable-pane>Example</kanonis-scrollable-pane></div>`,
};

void KanonisScrollablePane;
