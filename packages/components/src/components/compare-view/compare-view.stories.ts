import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCompareView } from './compare-view.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-compare-view', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-compare-view',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-compare-view>Example</kanonis-compare-view></div>`,
};

void KanonisCompareView;
