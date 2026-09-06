import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisContextMenu } from '../../../../packages/components/src/components/context-menu/context-menu.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-context-menu', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-context-menu',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-context-menu>Example</kanonis-context-menu></div>`,
};

void KanonisContextMenu;
