import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisContainer } from '../../../../packages/components/src/components/container/container.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-container', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-container',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-container>Example</kanonis-container></div>`,
};

void KanonisContainer;
