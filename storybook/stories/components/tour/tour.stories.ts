import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTour } from '../../../../packages/components/src/components/tour/tour.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-tour', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-tour',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-tour>Example</kanonis-tour></div>`,
};

void KanonisTour;
