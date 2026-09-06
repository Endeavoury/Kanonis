import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisBrandMark } from './brand-mark.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-brand-mark', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-brand-mark',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-brand-mark>Example</kanonis-brand-mark></div>`,
};

void KanonisBrandMark;
