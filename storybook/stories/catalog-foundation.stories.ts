import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = { title: 'Foundation', tags: ['autodocs'] };
export default meta;

export const KanonisIcon: StoryObj = { name: 'kanonis-icon', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-icon>Example</kanonis-icon></div>` };
export const KanonisThemeToggle: StoryObj = { name: 'kanonis-theme-toggle', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-theme-toggle>Example</kanonis-theme-toggle></div>` };
export const KanonisLiveRegion: StoryObj = { name: 'kanonis-live-region', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-live-region>Example</kanonis-live-region></div>` };
export const KanonisBrandMark: StoryObj = { name: 'kanonis-brand-mark', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-brand-mark>Example</kanonis-brand-mark></div>` };
