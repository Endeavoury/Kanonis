import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisFilterBuilder } from '../../../../packages/components/src/components/filter-builder/filter-builder.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-filter-builder', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-filter-builder',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-filter-builder>Example</kanonis-filter-builder></div>`,
};

void KanonisFilterBuilder;
