import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisAuditLog } from './audit-log.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-audit-log', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-audit-log',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-audit-log>Example</kanonis-audit-log></div>`,
};

void KanonisAuditLog;
