import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisNavigationGroup } from './navigation-group.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-navigation-group', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-navigation-group',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-navigation-group>Example</kanonis-navigation-group></div>`,
};

void KanonisNavigationGroup;
