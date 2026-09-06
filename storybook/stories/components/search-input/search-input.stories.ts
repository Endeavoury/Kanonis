import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSearchInput } from '../../../../packages/components/src/components/search-input/search-input.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-search-input', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-search-input',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-search-input>Example</kanonis-search-input></div>`,
};

void KanonisSearchInput;
