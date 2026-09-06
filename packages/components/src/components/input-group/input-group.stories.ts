import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisInputGroup } from './input-group.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-input-group', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-input-group',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-input-group>Example</kanonis-input-group></div>`,
};

void KanonisInputGroup;
