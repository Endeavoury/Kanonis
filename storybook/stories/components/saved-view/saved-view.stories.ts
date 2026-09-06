import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSavedView } from '../../../../packages/components/src/components/saved-view/saved-view.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-saved-view', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-saved-view',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-saved-view>Example</kanonis-saved-view></div>`,
};

void KanonisSavedView;
