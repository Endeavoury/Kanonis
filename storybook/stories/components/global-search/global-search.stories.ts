import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisGlobalSearch } from '../../../../packages/components/src/components/global-search/global-search.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-global-search', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-global-search',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-global-search>Example</kanonis-global-search></div>`,
};

void KanonisGlobalSearch;
