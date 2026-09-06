import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisMaintenanceNotice } from '../../../../packages/components/src/components/maintenance-notice/maintenance-notice.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-maintenance-notice', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-maintenance-notice',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-maintenance-notice>Example</kanonis-maintenance-notice></div>`,
};

void KanonisMaintenanceNotice;
