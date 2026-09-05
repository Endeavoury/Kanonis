import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = { title: 'Layout', tags: ['autodocs'] };
export default meta;

export const KanonisStack: StoryObj = { name: 'kanonis-stack', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-stack>Example</kanonis-stack></div>` };
export const KanonisInline: StoryObj = { name: 'kanonis-inline', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-inline>Example</kanonis-inline></div>` };
export const KanonisGrid: StoryObj = { name: 'kanonis-grid', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-grid>Example</kanonis-grid></div>` };
export const KanonisContainer: StoryObj = { name: 'kanonis-container', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-container>Example</kanonis-container></div>` };
export const KanonisPageHeader: StoryObj = { name: 'kanonis-page-header', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-page-header>Example</kanonis-page-header></div>` };
export const KanonisDetailSidebar: StoryObj = { name: 'kanonis-detail-sidebar', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-detail-sidebar>Example</kanonis-detail-sidebar></div>` };
export const KanonisPaneGroup: StoryObj = { name: 'kanonis-pane-group', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-group>Example</kanonis-pane-group></div>` };
export const KanonisPane: StoryObj = { name: 'kanonis-pane', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane>Example</kanonis-pane></div>` };
export const KanonisScrollablePane: StoryObj = { name: 'kanonis-scrollable-pane', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-scrollable-pane>Example</kanonis-scrollable-pane></div>` };
export const KanonisPaneHeader: StoryObj = { name: 'kanonis-pane-header', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-header>Example</kanonis-pane-header></div>` };
export const KanonisPaneContent: StoryObj = { name: 'kanonis-pane-content', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-content>Example</kanonis-pane-content></div>` };
export const KanonisWorkspace: StoryObj = { name: 'kanonis-workspace', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-workspace>Example</kanonis-workspace></div>` };
export const KanonisWorkspaceHeader: StoryObj = { name: 'kanonis-workspace-header', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-workspace-header>Example</kanonis-workspace-header></div>` };
export const KanonisPaneWindow: StoryObj = { name: 'kanonis-pane-window', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-window>Example</kanonis-pane-window></div>` };
export const KanonisPaneStack: StoryObj = { name: 'kanonis-pane-stack', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-pane-stack>Example</kanonis-pane-stack></div>` };
export const KanonisInspectorPane: StoryObj = { name: 'kanonis-inspector-pane', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-inspector-pane>Example</kanonis-inspector-pane></div>` };
export const KanonisAppShell: StoryObj = { name: 'kanonis-app-shell', render: () => html`<div style="padding:2rem;max-width:960px"><kanonis-app-shell>Example</kanonis-app-shell></div>` };
