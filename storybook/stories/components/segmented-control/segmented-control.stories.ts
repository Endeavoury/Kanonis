import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSegmentedControl } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-segmented-control', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-segmented-control',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-segmented-control>Example</kanonis-segmented-control></div>`,
};

void KanonisSegmentedControl;
