import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDiffViewer } from '../../../../packages/components/src/components/diff-viewer/diff-viewer.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-diff-viewer', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-diff-viewer',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-diff-viewer>Example</kanonis-diff-viewer></div>`,
};

void KanonisDiffViewer;
