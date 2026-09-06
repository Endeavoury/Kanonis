import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTimeline } from './timeline.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-timeline', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-timeline',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-timeline>Example</kanonis-timeline></div>`,
};

void KanonisTimeline;
