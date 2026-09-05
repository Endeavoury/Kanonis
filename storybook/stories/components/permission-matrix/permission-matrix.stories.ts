import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisPermissionMatrix } from '@endeavoury/kanonis/classes';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-permission-matrix', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-permission-matrix',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-permission-matrix>Example</kanonis-permission-matrix></div>`,
};

void KanonisPermissionMatrix;
