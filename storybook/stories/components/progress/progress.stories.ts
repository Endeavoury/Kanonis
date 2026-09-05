import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisProgress } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-progress', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-progress',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-progress>Example</kanonis-progress></div>`,
};

void KanonisProgress;
