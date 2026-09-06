import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCommandPalette } from '../../../../packages/components/src/components/command-palette/command-palette.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-command-palette', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-command-palette',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-command-palette>Example</kanonis-command-palette></div>`,
};

void KanonisCommandPalette;
