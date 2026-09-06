import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSwitch } from '../../../../packages/components/src/components/switch/switch.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-switch', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-switch',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-switch>Example</kanonis-switch></div>`,
};

void KanonisSwitch;
