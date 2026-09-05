import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisRecordHeader } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-record-header', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-record-header',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-record-header>Example</kanonis-record-header></div>`,
};

void KanonisRecordHeader;
