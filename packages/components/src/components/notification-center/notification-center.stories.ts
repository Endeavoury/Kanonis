import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisNotificationCenter } from './notification-center.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-notification-center', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-notification-center',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-notification-center>Example</kanonis-notification-center></div>`,
};

void KanonisNotificationCenter;
