import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPaneContent } from '../../../../packages/components/src/components/pane-content/pane-content.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-pane-content', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-pane-content',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-content>Example</kanonis-pane-content></div>`,
};

void KanonisPaneContent;
