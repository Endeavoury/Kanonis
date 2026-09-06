import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisApprovalFlow } from './approval-flow.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-approval-flow', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-approval-flow',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-approval-flow>Example</kanonis-approval-flow></div>`,
};

void KanonisApprovalFlow;
