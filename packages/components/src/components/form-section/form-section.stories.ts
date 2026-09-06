import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisFormSection } from './form-section.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-form-section', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-form-section',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-form-section>Example</kanonis-form-section></div>`,
};

void KanonisFormSection;
