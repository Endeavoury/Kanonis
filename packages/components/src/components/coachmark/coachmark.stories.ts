import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCoachmark } from './coachmark.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-coachmark', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-coachmark',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-coachmark>Example</kanonis-coachmark></div>`,
};

void KanonisCoachmark;
