import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisThemeToggle } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-theme-toggle', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-theme-toggle',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-theme-toggle>Example</kanonis-theme-toggle></div>`,
};

void KanonisThemeToggle;
