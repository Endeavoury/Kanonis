import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisChangeSummary } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-change-summary', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-change-summary',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-change-summary>Example</kanonis-change-summary></div>`,
};

void KanonisChangeSummary;
