import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDisclosure } from '../../../../packages/components/src/components/disclosure/disclosure.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-disclosure', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-disclosure',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-disclosure>Example</kanonis-disclosure></div>`,
};

void KanonisDisclosure;
