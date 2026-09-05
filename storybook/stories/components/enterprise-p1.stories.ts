import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Patterns/Productivity',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;

export const WorkspaceChrome: StoryObj = {
  render: () =>
    html`<div style="display:grid;gap:1rem;max-width:960px;margin:auto;padding:1.5rem">
      <kanonis-banner heading="Scheduled maintenance" dismissible
        >The API will be read-only Saturday at 22:00 UTC.</kanonis-banner
      >
      <div style="display:flex;gap:1rem;align-items:start;flex-wrap:wrap">
        <kanonis-tenant-switcher
          .tenants=${[
            { id: 'acme', label: 'Acme Corporation' },
            { id: 'globex', label: 'Globex' },
          ]}
          value="acme"
        ></kanonis-tenant-switcher>
        <kanonis-global-search></kanonis-global-search>
        <kanonis-notification-center
          .notifications=${[
            { id: '1', title: 'Access review due', time: '10m ago' },
            { id: '2', title: 'Deployment completed', read: true },
          ]}
        ></kanonis-notification-center>
        <kanonis-user-menu name="Jordan Lee"
          ><button role="menuitem">Profile</button
          ><button role="menuitem">Sign out</button></kanonis-user-menu
        >
      </div>
      <kanonis-navigation-group label="Projects"
        ><kanonis-sidebar-item value="all">All projects</kanonis-sidebar-item
        ><kanonis-sidebar-item value="archived">Archived</kanonis-sidebar-item></kanonis-navigation-group
      >
      <kanonis-workspace-tabs
        .tabs=${[
          { id: 'overview', label: 'Overview' },
          { id: 'settings', label: 'Settings', closable: true },
        ]}
        value="overview"
      ></kanonis-workspace-tabs>
      <kanonis-record-header
        heading="Atlas rollout"
        description="Platform delivery workspace"
        status="In progress"
        ><span slot="meta">Updated today</span><kanonis-button slot="actions">Edit</kanonis-button
        ><kanonis-context-menu slot="actions"
          ><kanonis-menu-item>Duplicate</kanonis-menu-item
          ><kanonis-menu-item tone="danger">Archive</kanonis-menu-item></kanonis-context-menu
        ></kanonis-record-header
      >
      <kanonis-detail-list
        .items=${[
          { label: 'Owner', value: 'Platform team' },
          { label: 'Environment', value: 'Production' },
          { label: 'Last deployment', value: 'Today, 09:42 UTC' },
        ]}
      ></kanonis-detail-list>
      <kanonis-quick-actions
        ><kanonis-button>Deploy</kanonis-button
        ><kanonis-button variant="secondary">Create task</kanonis-button></kanonis-quick-actions
      >
      <kanonis-command-palette
        open
        .commands=${[
          { id: 'new', label: 'Create project', shortcut: '⌘ N' },
          { id: 'search', label: 'Search records', description: 'Find projects and people' },
        ]}
      ></kanonis-command-palette>
    </div>`,
};
