import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisStepper } from '../../../../packages/components/src/components/stepper/stepper.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-stepper', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-stepper',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-stepper>Example</kanonis-stepper></div>`,
};

void KanonisStepper;
