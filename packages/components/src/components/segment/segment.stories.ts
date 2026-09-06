import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSegment } from './segment.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-segment', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-segment',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-segment>Example</kanonis-segment></div>`,
};

void KanonisSegment;
