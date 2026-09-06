import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDetailList } from './detail-list.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-detail-list', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-detail-list',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-detail-list>Example</kanonis-detail-list></div>`,
};

void KanonisDetailList;
