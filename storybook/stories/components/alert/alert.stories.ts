import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisAlert } from '../../../../packages/components/src/components/alert/alert.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-alert', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-alert',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-alert>Example</kanonis-alert></div>`,
};

void KanonisAlert;
