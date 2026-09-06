import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisIllustration } from './illustration.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-illustration', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-illustration',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-illustration>Example</kanonis-illustration></div>`,
};

void KanonisIllustration;
