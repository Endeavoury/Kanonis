import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTaskList } from './task-list.js';
import '@endeavoury/kanonis';

const meta: Meta = { title: 'Components/kanonis-task-list', tags: ['autodocs'] };
export default meta;

export const Default: StoryObj = {
  name: 'kanonis-task-list',
  render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-task-list>Example</kanonis-task-list></div>`,
};

void KanonisTaskList;
