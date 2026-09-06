import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisJobStatus } from './job-status.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-job-status', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-job-status',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-job-status>Example</kanonis-job-status></div>`,
};

void KanonisJobStatus;
