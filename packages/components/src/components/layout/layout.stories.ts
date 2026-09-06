import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const box = (label: string) =>
  html`<div
    style="min-height:48px;padding:12px;border:1px solid var(--kanonis-color-border-default);border-radius:6px;background:var(--kanonis-color-bg-surface)"
  >
    ${label}
  </div>`;
const meta: Meta = { title: 'Layout/Layout', tags: ['autodocs'] };
export default meta;
export const Stack: StoryObj = {
  render: () => html`<kanonis-stack gap="3">${box('First')}${box('Second')}${box('Third')}</kanonis-stack>`,
};
export const Inline: StoryObj = {
  render: () =>
    html`<kanonis-inline justify="between"
      ><kanonis-inline><kanonis-badge>Filter one</kanonis-badge><kanonis-badge>Filter two</kanonis-badge></kanonis-inline
      ><kanonis-button size="small">Apply</kanonis-button></kanonis-inline
    >`,
};
export const Grid: StoryObj = {
  render: () =>
    html`<kanonis-grid columns="4" responsive>${['One', 'Two', 'Three', 'Four'].map(box)}</kanonis-grid>`,
};
export const Container: StoryObj = {
  render: () =>
    html`<kanonis-container size="narrow">${box('Narrow centered content container')}</kanonis-container>`,
};
export const PageHeader: StoryObj = {
  render: () =>
    html`<kanonis-page-header
      eyebrow="Personal finance"
      heading="Account ledger"
      description="Filter, inspect, and categorize normalized bank entries."
      ><kanonis-inline slot="actions"
        ><kanonis-icon-button label="Refresh"><kanonis-icon name="refresh"></kanonis-icon></kanonis-icon-button
        ><kanonis-button>Import files</kanonis-button></kanonis-inline
      ></kanonis-page-header
    >`,
};

export const PaneWorkspace: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () =>
    html`<div style="height:100dvh;min-width:0;min-height:0;overflow:hidden">
      <kanonis-pane-group>
        <kanonis-pane position="left" style="--kanonis-pane-size:16rem">
          <kanonis-pane-header
            ><strong style="display:block;padding:1rem">Navigation</strong></kanonis-pane-header
          >
          <kanonis-scrollable-pane style="padding:1rem">
            <kanonis-stack gap="2">
              ${Array.from({ length: 24 }, (_, index) => box(`Navigation item ${index + 1}`))}
            </kanonis-stack>
          </kanonis-scrollable-pane>
        </kanonis-pane>
        <kanonis-pane position="center">
          <kanonis-pane-header
            ><strong style="display:block;padding:1rem">Workspace toolbar</strong></kanonis-pane-header
          >
          <kanonis-pane-content scrollable style="padding:1rem">
            <kanonis-stack
              >${Array.from({ length: 30 }, (_, index) => box(`Content row ${index + 1}`))}</kanonis-stack
            >
          </kanonis-pane-content>
        </kanonis-pane>
        <kanonis-inspector-pane>
          <kanonis-pane-header
            ><strong style="display:block;padding:1rem">Inspector</strong></kanonis-pane-header
          >
          <kanonis-scrollable-pane style="padding:1rem">
            ${Array.from({ length: 12 }, (_, index) => box(`Property ${index + 1}`))}
          </kanonis-scrollable-pane>
        </kanonis-inspector-pane>
      </kanonis-pane-group>
    </div>`,
};

export const ShellPaneWorkspace: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () =>
    html`<kanonis-app-shell content-mode="pane">
      <kanonis-sidebar slot="sidebar" label="Workspace navigation">
        <strong slot="brand">Pane workspace</strong>
        ${Array.from(
          { length: 28 },
          (_, index) =>
            html`<kanonis-sidebar-item value=${`item-${index + 1}`} ?active=${index === 0}>
              <kanonis-icon slot="icon" name="table"></kanonis-icon>Item ${index + 1}
            </kanonis-sidebar-item>`,
        )}
        <kanonis-status-badge slot="footer" tone="success">Connected</kanonis-status-badge>
      </kanonis-sidebar>
      <kanonis-inline slot="header" justify="between" style="height:100%;padding:0 1rem">
        <strong>Fixed workspace toolbar</strong>
        <kanonis-icon-button label="Open commands"><kanonis-icon name="search"></kanonis-icon></kanonis-icon-button>
      </kanonis-inline>
      <kanonis-pane-group orientation="vertical">
        <kanonis-pane position="top" style="--kanonis-pane-size:3.25rem">
          <kanonis-pane-header
            ><span style="display:block;padding:1rem">Fixed tabs</span></kanonis-pane-header
          >
        </kanonis-pane>
        <kanonis-pane position="center">
          <kanonis-pane-content scrollable style="padding:1rem">
            <kanonis-stack
              >${Array.from({ length: 32 }, (_, index) => box(`Content row ${index + 1}`))}</kanonis-stack
            >
          </kanonis-pane-content>
        </kanonis-pane>
        <kanonis-pane position="bottom" style="--kanonis-pane-size:3rem">
          <span style="display:block;padding:.875rem 1rem">Fixed status bar</span>
        </kanonis-pane>
      </kanonis-pane-group>
      <kanonis-inspector-pane slot="inspector">
        <kanonis-pane-header
          ><strong style="display:block;padding:1rem">Inspector</strong></kanonis-pane-header
        >
        <kanonis-scrollable-pane style="padding:1rem">
          <kanonis-stack gap="2"
            >${Array.from({ length: 18 }, (_, index) => box(`Property ${index + 1}`))}</kanonis-stack
          >
        </kanonis-scrollable-pane>
      </kanonis-inspector-pane>
    </kanonis-app-shell>`,
};

export const CollapsedShellPanes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () =>
    html`<kanonis-app-shell content-mode="pane" sidebar-collapsed>
      <kanonis-sidebar slot="sidebar" collapsed><strong slot="brand">Navigation</strong></kanonis-sidebar>
      <kanonis-pane-group>
        <kanonis-pane position="center">
          <kanonis-pane-header
            ><strong style="display:block;padding:1rem">Workspace only</strong></kanonis-pane-header
          >
          <kanonis-pane-content scrollable style="padding:1rem"
            >${box('Side panes are collapsed')}</kanonis-pane-content
          >
        </kanonis-pane>
      </kanonis-pane-group>
      <kanonis-inspector-pane slot="inspector" collapsed></kanonis-inspector-pane>
    </kanonis-app-shell>`,
};

const workspacePane = (heading: string, body: string) =>
  html`<kanonis-pane>
    <kanonis-pane-header
      ><strong style="display:block;padding:var(--kanonis-space-4)">${heading}</strong></kanonis-pane-header
    >
    <kanonis-pane-content scrollable style="padding:var(--kanonis-space-4)"
      ><p>${body}</p>
      ${Array.from({ length: 5 }, (_, i) => box(`${heading} detail ${i + 1}`))}</kanonis-pane-content
    >
  </kanonis-pane>`;

export const DesktopWorkspace: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () =>
    html`<div style="height:100dvh;min-height:560px">
      <kanonis-workspace>
        <kanonis-workspace-header slot="header" heading="Project Alpha">
          <kanonis-breadcrumbs slot="breadcrumb" label="Project location">
            <kanonis-breadcrumb href="#customers">Customers</kanonis-breadcrumb>
            <kanonis-breadcrumb current>Acme Corporation</kanonis-breadcrumb>
          </kanonis-breadcrumbs>
          <kanonis-status-badge slot="status" tone="success">Synced</kanonis-status-badge>
          <kanonis-button slot="actions" variant="secondary">Share</kanonis-button>
          <kanonis-icon-button slot="actions" label="More actions"
            ><kanonis-icon name="more-horizontal"></kanonis-icon
          ></kanonis-icon-button>
        </kanonis-workspace-header>
        <kanonis-pane-window aria-label="Project panes">
          ${workspacePane('Overview', 'The overview stays visible beside the detail panes.')}
          ${workspacePane('Activity', 'Recent project activity and approvals.')}
          ${workspacePane('Properties', 'Canonical values for the selected project.')}
        </kanonis-pane-window>
      </kanonis-workspace>
    </div>`,
};

export const DesktopWorkspaceStacks: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () =>
    html`<div style="height:100dvh;min-height:560px">
      <kanonis-workspace>
        <kanonis-workspace-header slot="header" heading="Customer workspace">
          <kanonis-breadcrumbs slot="breadcrumb" label="Customer location"
            ><kanonis-breadcrumb current>Customers / Acme</kanonis-breadcrumb></kanonis-breadcrumbs
          >
          <kanonis-status-badge slot="status" tone="info">In review</kanonis-status-badge>
          <kanonis-button slot="actions">Publish</kanonis-button>
        </kanonis-workspace-header>
        <kanonis-pane-window aria-label="Customer workspace panes">
          ${workspacePane('Customer', 'The primary record occupies the full height.')}
          <kanonis-pane-stack split="40/60">
            ${workspacePane('Contacts', 'People connected to this customer.')}
            ${workspacePane('Audit trail', 'Changes remain independently scrollable.')}
          </kanonis-pane-stack>
          ${workspacePane('Related orders', 'Orders and fulfillment context.')}
        </kanonis-pane-window>
      </kanonis-workspace>
    </div>`,
};

export const DesktopWorkspaceFourPaneGrid: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () =>
    html`<div style="height:100dvh;min-height:560px">
      <kanonis-workspace>
        <kanonis-workspace-header slot="header" heading="Four pane comparison">
          <kanonis-breadcrumbs slot="breadcrumb" label="Workspace location"
            ><kanonis-breadcrumb current>Operations / Comparison</kanonis-breadcrumb></kanonis-breadcrumbs
          >
          <kanonis-status-badge slot="status" tone="success">Live</kanonis-status-badge>
        </kanonis-workspace-header>
        <kanonis-pane-window aria-label="Four pane comparison">
          <kanonis-pane-stack split="50/50"
            >${workspacePane('Pane A', 'Primary records.')}${workspacePane('Pane B', 'Selected record.')}</kanonis-pane-stack
          >
          <kanonis-pane-stack split="50/50"
            >${workspacePane('Pane C', 'Relationships.')}${workspacePane('Pane D', 'History.')}</kanonis-pane-stack
          >
        </kanonis-pane-window>
      </kanonis-workspace>
    </div>`,
};

export const DetailSidebar: StoryObj = {
  render: () =>
    html`<div style="min-height:42rem;padding:2rem">
      <kanonis-page-header
        eyebrow="Dashboard"
        heading="Financial overview"
        description="Select an insight to inspect its matching ledger entries."
      ></kanonis-page-header>
      <kanonis-detail-sidebar open heading="Groceries" close-label="Close insight details">
        <kanonis-stack slot="summary" gap="2">
          <span style="color:var(--kanonis-color-text-muted)">Selected insight</span>
          <strong style="font-size:1.75rem">€842.31</strong>
          <span>Food · 14 transactions</span>
        </kanonis-stack>
        <kanonis-stack gap="3">
          <strong>Ledger entries</strong>
          ${['Market Square', 'Fresh Foods', 'Corner Shop'].map(
            (name, index) =>
              html`<kanonis-card>
                <kanonis-inline justify="between" wrap="false">
                  <span
                    ><strong>${name}</strong><br /><small>August ${18 - index}, 2026</small></span
                  >
                  <strong>−€${[64.23, 42.9, 18.75][index]}</strong>
                </kanonis-inline>
              </kanonis-card>`,
          )}
        </kanonis-stack>
        <kanonis-button slot="footer" variant="secondary" full-width>View full ledger</kanonis-button>
      </kanonis-detail-sidebar>
    </div>`,
};

export const ModalDetailSidebar: StoryObj = {
  render: () =>
    html`<div style="min-height:42rem;padding:2rem">
      <kanonis-page-header heading="Account ledger"></kanonis-page-header>
      <kanonis-detail-sidebar open modal heading="Transaction details">
        <p slot="summary">A modal drawer blocks interaction with the page until it is closed.</p>
        <p>Use this variant for focused tasks instead of persistent dashboard context.</p>
      </kanonis-detail-sidebar>
    </div>`,
};

export const Workspace: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => html`<kanonis-workspace style="height:100dvh;min-height:560px">
    <kanonis-workspace-header slot="header" heading="Workspace">
      <kanonis-breadcrumbs slot="breadcrumb" label="Location"
        ><kanonis-breadcrumb current>Projects</kanonis-breadcrumb></kanonis-breadcrumbs
      >
      <kanonis-status-badge slot="status" tone="success">Ready</kanonis-status-badge>
    </kanonis-workspace-header>
    <kanonis-pane-window aria-label="Workspace content">
      <kanonis-pane><kanonis-pane-header>Primary pane</kanonis-pane-header><kanonis-pane-content>${box('Workspace content')}</kanonis-pane-content></kanonis-pane>
    </kanonis-pane-window>
  </kanonis-workspace>`,
};

export const WorkspaceHeader: StoryObj = {
  render: () => html`<kanonis-workspace-header
    heading="Project Alpha"
    style="display:block;max-width:960px;margin:auto"
  >
    <kanonis-breadcrumbs slot="breadcrumb" label="Location"
      ><kanonis-breadcrumb href="#projects">Projects</kanonis-breadcrumb
      ><kanonis-breadcrumb current>Alpha</kanonis-breadcrumb></kanonis-breadcrumbs
    >
    <kanonis-status-badge slot="status" tone="success">Synced</kanonis-status-badge>
    <kanonis-button slot="actions" variant="secondary">Share</kanonis-button>
  </kanonis-workspace-header>`,
};

export const PaneWindow: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => html`<kanonis-pane-window style="height:70dvh;margin:2rem" aria-label="Pane window">
    ${workspacePane('Overview', 'A full-height pane inside the window.')}
    ${workspacePane('Details', 'Additional context remains visible beside it.')}
  </kanonis-pane-window>`,
};

export const PaneStack: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => html`<kanonis-pane-stack split="40/60" style="height:70dvh;margin:2rem">
    ${workspacePane('Upper pane', 'The stack allocates forty percent of the height.')}
    ${workspacePane('Lower pane', 'The second pane receives the remaining space.')}
  </kanonis-pane-stack>`,
};

export const PaneGroup: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => html`<kanonis-pane-group style="height:70dvh;margin:2rem">
    ${workspacePane('Navigation', 'A grouped pane layout.')}
    ${workspacePane('Content', 'Groups align panes across the full height.')}
  </kanonis-pane-group>`,
};

export const Pane: StoryObj = {
  render: () => html`<kanonis-pane style="display:block;height:24rem;max-width:28rem;margin:2rem">
    <kanonis-pane-header>Pane header</kanonis-pane-header>
    <kanonis-pane-content scrollable style="padding:1rem">${box('Pane body')}</kanonis-pane-content>
  </kanonis-pane>`,
};

export const PaneHeader: StoryObj = {
  render: () => html`<kanonis-pane style="display:block;max-width:28rem;margin:2rem">
    <kanonis-pane-header><strong>Persistent pane heading</strong></kanonis-pane-header>
  </kanonis-pane>`,
};

export const PaneContent: StoryObj = {
  render: () => html`<kanonis-pane-content style="display:block;max-width:28rem;margin:2rem;padding:1rem">
    ${box('Pane content owns the body layout and overflow.')}
  </kanonis-pane-content>`,
};

export const ScrollablePane: StoryObj = {
  render: () => html`<kanonis-scrollable-pane style="display:block;height:18rem;max-width:28rem;margin:2rem;padding:1rem">
    <kanonis-stack gap="2">${Array.from({ length: 12 }, (_, index) => box(`Scrollable row ${index + 1}`))}</kanonis-stack>
  </kanonis-scrollable-pane>`,
};

export const InspectorPane: StoryObj = {
  render: () => html`<kanonis-inspector-pane style="display:block;height:24rem;max-width:28rem;margin:2rem">
    <kanonis-pane-header>Inspector</kanonis-pane-header>
    <kanonis-scrollable-pane style="padding:1rem">${box('Selected item properties')}</kanonis-scrollable-pane>
  </kanonis-inspector-pane>`,
};
