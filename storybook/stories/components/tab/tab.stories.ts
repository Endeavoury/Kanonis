import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTab } from '../../../../packages/components/src/components/tab/tab.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-tab', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-tab',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-tab>Example</kanonis-tab></div>`,
};

void KanonisTab;
