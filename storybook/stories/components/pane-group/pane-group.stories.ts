import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPaneGroup } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-pane-group', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-pane-group',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-group>Example</kanonis-pane-group></div>`,
};

void KanonisPaneGroup;
