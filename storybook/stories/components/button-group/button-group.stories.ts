import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisButtonGroup } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-button-group', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-button-group',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-button-group>Example</kanonis-button-group></div>`,
};

void KanonisButtonGroup;
