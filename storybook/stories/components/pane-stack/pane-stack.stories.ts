import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPaneStack } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-pane-stack', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-pane-stack',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-stack>Example</kanonis-pane-stack></div>`,
};

void KanonisPaneStack;
