import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisMetric } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-metric', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-metric',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-metric>Example</kanonis-metric></div>`,
};

void KanonisMetric;
