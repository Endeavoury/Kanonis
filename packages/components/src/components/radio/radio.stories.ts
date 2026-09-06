import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisRadio } from './radio.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-radio', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-radio',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-radio>Example</kanonis-radio></div>`,
};

void KanonisRadio;
