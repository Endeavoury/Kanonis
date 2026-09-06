import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisActivityFeed } from './activity-feed.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-activity-feed', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-activity-feed',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-activity-feed>Example</kanonis-activity-feed></div>`,
};

void KanonisActivityFeed;
