import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisValidationSummary } from './validation-summary.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-validation-summary', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-validation-summary',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-validation-summary>Example</kanonis-validation-summary></div>`,
};

void KanonisValidationSummary;
