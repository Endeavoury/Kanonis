import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisRadioGroup } from '../../../../packages/components/src/components/radio-group/radio-group.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-radio-group', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-radio-group',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-radio-group>Example</kanonis-radio-group></div>`,
};

void KanonisRadioGroup;
