import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPaneHeader } from './pane-header.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-pane-header', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-pane-header',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-header>Example</kanonis-pane-header></div>`,
};

void KanonisPaneHeader;
