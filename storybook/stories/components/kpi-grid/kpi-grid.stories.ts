import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisKpiGrid } from '../../../../packages/components/src/components/kpi-grid/kpi-grid.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-kpi-grid', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-kpi-grid',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-kpi-grid>Example</kanonis-kpi-grid></div>`,
};

void KanonisKpiGrid;
