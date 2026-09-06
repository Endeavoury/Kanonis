import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDatePicker } from '../../../../packages/components/src/components/date-picker/date-picker.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-date-picker', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-date-picker',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-date-picker>Example</kanonis-date-picker></div>`,
};

void KanonisDatePicker;
