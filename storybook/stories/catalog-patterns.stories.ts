import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = { title: 'Patterns', tags: ['autodocs'] };
export default meta;

export const KanonisFilterBar: StoryObj = { name: 'kanonis-filter-bar', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-filter-bar>Example</kanonis-filter-bar></div>` };
export const KanonisKpiGrid: StoryObj = { name: 'kanonis-kpi-grid', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-kpi-grid>Example</kanonis-kpi-grid></div>` };
