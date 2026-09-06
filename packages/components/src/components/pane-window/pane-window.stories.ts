import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPaneWindow } from './pane-window.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-pane-window', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-pane-window',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-window>Example</kanonis-pane-window></div>`,
};

void KanonisPaneWindow;
