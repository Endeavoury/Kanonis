import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTimePicker } from '../../../../packages/components/src/components/time-picker/time-picker.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-time-picker', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-time-picker',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-time-picker>Example</kanonis-time-picker></div>`,
};

void KanonisTimePicker;
