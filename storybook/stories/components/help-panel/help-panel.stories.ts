import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisHelpPanel } from '../../../../packages/components/src/components/help-panel/help-panel.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-help-panel', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-help-panel',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-help-panel>Example</kanonis-help-panel></div>`,
};

void KanonisHelpPanel;
