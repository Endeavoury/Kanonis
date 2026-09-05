import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),r=e=>n`<div
    style="min-height:48px;padding:12px;border:1px solid var(--ds-color-border-default);border-radius:6px;background:var(--ds-color-bg-surface)"
  >
    ${e}
  </div>`,i={title:`Components/Layout`,tags:[`autodocs`]},a={render:()=>n`<ds-stack gap="3">${r(`First`)}${r(`Second`)}${r(`Third`)}</ds-stack>`},o={render:()=>n`<ds-inline justify="between"
      ><ds-inline><ds-badge>Filter one</ds-badge><ds-badge>Filter two</ds-badge></ds-inline
      ><ds-button size="small">Apply</ds-button></ds-inline
    >`},s={render:()=>n`<ds-grid columns="4" responsive>${[`One`,`Two`,`Three`,`Four`].map(r)}</ds-grid>`},c={render:()=>n`<ds-container size="narrow">${r(`Narrow centered content container`)}</ds-container>`},l={render:()=>n`<ds-page-header
      eyebrow="Personal finance"
      heading="Account ledger"
      description="Filter, inspect, and categorize normalized bank entries."
      ><ds-inline slot="actions"
        ><ds-icon-button label="Refresh"><ds-icon name="refresh"></ds-icon></ds-icon-button
        ><ds-button>Import files</ds-button></ds-inline
      ></ds-page-header
    >`},u={parameters:{layout:`fullscreen`},render:()=>n`<div style="height:100dvh;min-width:0;min-height:0;overflow:hidden">
      <ds-pane-group>
        <ds-pane position="left" style="--ds-pane-size:16rem">
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Navigation</strong></ds-pane-header
          >
          <ds-scrollable-pane style="padding:1rem">
            <ds-stack gap="2">
              ${Array.from({length:24},(e,t)=>r(`Navigation item ${t+1}`))}
            </ds-stack>
          </ds-scrollable-pane>
        </ds-pane>
        <ds-pane position="center">
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Workspace toolbar</strong></ds-pane-header
          >
          <ds-pane-content scrollable style="padding:1rem">
            <ds-stack
              >${Array.from({length:30},(e,t)=>r(`Content row ${t+1}`))}</ds-stack
            >
          </ds-pane-content>
        </ds-pane>
        <ds-inspector-pane>
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Inspector</strong></ds-pane-header
          >
          <ds-scrollable-pane style="padding:1rem">
            ${Array.from({length:12},(e,t)=>r(`Property ${t+1}`))}
          </ds-scrollable-pane>
        </ds-inspector-pane>
      </ds-pane-group>
    </div>`},d={parameters:{layout:`fullscreen`},render:()=>n`<ds-app-shell content-mode="pane">
      <ds-sidebar slot="sidebar" label="Workspace navigation">
        <strong slot="brand">Pane workspace</strong>
        ${Array.from({length:28},(e,t)=>n`<ds-sidebar-item value=${`item-${t+1}`} ?active=${t===0}>
              <ds-icon slot="icon" name="table"></ds-icon>Item ${t+1}
            </ds-sidebar-item>`)}
        <ds-status-badge slot="footer" tone="success">Connected</ds-status-badge>
      </ds-sidebar>
      <ds-inline slot="header" justify="between" style="height:100%;padding:0 1rem">
        <strong>Fixed workspace toolbar</strong>
        <ds-icon-button label="Open commands"><ds-icon name="search"></ds-icon></ds-icon-button>
      </ds-inline>
      <ds-pane-group orientation="vertical">
        <ds-pane position="top" style="--ds-pane-size:3.25rem">
          <ds-pane-header
            ><span style="display:block;padding:1rem">Fixed tabs</span></ds-pane-header
          >
        </ds-pane>
        <ds-pane position="center">
          <ds-pane-content scrollable style="padding:1rem">
            <ds-stack
              >${Array.from({length:32},(e,t)=>r(`Content row ${t+1}`))}</ds-stack
            >
          </ds-pane-content>
        </ds-pane>
        <ds-pane position="bottom" style="--ds-pane-size:3rem">
          <span style="display:block;padding:.875rem 1rem">Fixed status bar</span>
        </ds-pane>
      </ds-pane-group>
      <ds-inspector-pane slot="inspector">
        <ds-pane-header
          ><strong style="display:block;padding:1rem">Inspector</strong></ds-pane-header
        >
        <ds-scrollable-pane style="padding:1rem">
          <ds-stack gap="2"
            >${Array.from({length:18},(e,t)=>r(`Property ${t+1}`))}</ds-stack
          >
        </ds-scrollable-pane>
      </ds-inspector-pane>
    </ds-app-shell>`},f={parameters:{layout:`fullscreen`},render:()=>n`<ds-app-shell content-mode="pane" sidebar-collapsed>
      <ds-sidebar slot="sidebar" collapsed><strong slot="brand">Navigation</strong></ds-sidebar>
      <ds-pane-group>
        <ds-pane position="center">
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Workspace only</strong></ds-pane-header
          >
          <ds-pane-content scrollable style="padding:1rem"
            >${r(`Side panes are collapsed`)}</ds-pane-content
          >
        </ds-pane>
      </ds-pane-group>
      <ds-inspector-pane slot="inspector" collapsed></ds-inspector-pane>
    </ds-app-shell>`},p=(e,t)=>n`<ds-pane>
    <ds-pane-header
      ><strong style="display:block;padding:var(--ds-space-4)">${e}</strong></ds-pane-header
    >
    <ds-pane-content scrollable style="padding:var(--ds-space-4)"
      ><p>${t}</p>
      ${Array.from({length:5},(t,n)=>r(`${e} detail ${n+1}`))}</ds-pane-content
    >
  </ds-pane>`,m={parameters:{layout:`fullscreen`},render:()=>n`<div style="height:100dvh;min-height:560px">
      <ds-workspace>
        <ds-workspace-header slot="header" heading="Project Alpha">
          <ds-breadcrumbs slot="breadcrumb" label="Project location">
            <ds-breadcrumb href="#customers">Customers</ds-breadcrumb>
            <ds-breadcrumb current>Acme Corporation</ds-breadcrumb>
          </ds-breadcrumbs>
          <ds-status-badge slot="status" tone="success">Synced</ds-status-badge>
          <ds-button slot="actions" variant="secondary">Share</ds-button>
          <ds-icon-button slot="actions" label="More actions"
            ><ds-icon name="more-horizontal"></ds-icon
          ></ds-icon-button>
        </ds-workspace-header>
        <ds-pane-window aria-label="Project panes">
          ${p(`Overview`,`The overview stays visible beside the detail panes.`)}
          ${p(`Activity`,`Recent project activity and approvals.`)}
          ${p(`Properties`,`Canonical values for the selected project.`)}
        </ds-pane-window>
      </ds-workspace>
    </div>`},h={parameters:{layout:`fullscreen`},render:()=>n`<div style="height:100dvh;min-height:560px">
      <ds-workspace>
        <ds-workspace-header slot="header" heading="Customer workspace">
          <ds-breadcrumbs slot="breadcrumb" label="Customer location"
            ><ds-breadcrumb current>Customers / Acme</ds-breadcrumb></ds-breadcrumbs
          >
          <ds-status-badge slot="status" tone="info">In review</ds-status-badge>
          <ds-button slot="actions">Publish</ds-button>
        </ds-workspace-header>
        <ds-pane-window aria-label="Customer workspace panes">
          ${p(`Customer`,`The primary record occupies the full height.`)}
          <ds-pane-stack split="40/60">
            ${p(`Contacts`,`People connected to this customer.`)}
            ${p(`Audit trail`,`Changes remain independently scrollable.`)}
          </ds-pane-stack>
          ${p(`Related orders`,`Orders and fulfillment context.`)}
        </ds-pane-window>
      </ds-workspace>
    </div>`},g={parameters:{layout:`fullscreen`},render:()=>n`<div style="height:100dvh;min-height:560px">
      <ds-workspace>
        <ds-workspace-header slot="header" heading="Four pane comparison">
          <ds-breadcrumbs slot="breadcrumb" label="Workspace location"
            ><ds-breadcrumb current>Operations / Comparison</ds-breadcrumb></ds-breadcrumbs
          >
          <ds-status-badge slot="status" tone="success">Live</ds-status-badge>
        </ds-workspace-header>
        <ds-pane-window aria-label="Four pane comparison">
          <ds-pane-stack split="50/50"
            >${p(`Pane A`,`Primary records.`)}${p(`Pane B`,`Selected record.`)}</ds-pane-stack
          >
          <ds-pane-stack split="50/50"
            >${p(`Pane C`,`Relationships.`)}${p(`Pane D`,`History.`)}</ds-pane-stack
          >
        </ds-pane-window>
      </ds-workspace>
    </div>`},_={render:()=>n`<div style="min-height:42rem;padding:2rem">
      <ds-page-header
        eyebrow="Dashboard"
        heading="Financial overview"
        description="Select an insight to inspect its matching ledger entries."
      ></ds-page-header>
      <ds-detail-sidebar open heading="Groceries" close-label="Close insight details">
        <ds-stack slot="summary" gap="2">
          <span style="color:var(--ds-color-text-muted)">Selected insight</span>
          <strong style="font-size:1.75rem">€842.31</strong>
          <span>Food · 14 transactions</span>
        </ds-stack>
        <ds-stack gap="3">
          <strong>Ledger entries</strong>
          ${[`Market Square`,`Fresh Foods`,`Corner Shop`].map((e,t)=>n`<ds-card>
                <ds-inline justify="between" wrap="false">
                  <span
                    ><strong>${e}</strong><br /><small>August ${18-t}, 2026</small></span
                  >
                  <strong>−€${[64.23,42.9,18.75][t]}</strong>
                </ds-inline>
              </ds-card>`)}
        </ds-stack>
        <ds-button slot="footer" variant="secondary" full-width>View full ledger</ds-button>
      </ds-detail-sidebar>
    </div>`},v={render:()=>n`<div style="min-height:42rem;padding:2rem">
      <ds-page-header heading="Account ledger"></ds-page-header>
      <ds-detail-sidebar open modal heading="Transaction details">
        <p slot="summary">A modal drawer blocks interaction with the page until it is closed.</p>
        <p>Use this variant for focused tasks instead of persistent dashboard context.</p>
      </ds-detail-sidebar>
    </div>`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  render: () => html`<ds-stack gap=\"3\">${box('First')}${box('Second')}${box('Third')}</ds-stack>`\n}",...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-inline justify="between"
      ><ds-inline><ds-badge>Filter one</ds-badge><ds-badge>Filter two</ds-badge></ds-inline
      ><ds-button size="small">Apply</ds-button></ds-inline
    >\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-grid columns="4" responsive>\${['One', 'Two', 'Three', 'Four'].map(box)}</ds-grid>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-container size="narrow">\${box('Narrow centered content container')}</ds-container>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-page-header
      eyebrow="Personal finance"
      heading="Account ledger"
      description="Filter, inspect, and categorize normalized bank entries."
      ><ds-inline slot="actions"
        ><ds-icon-button label="Refresh"><ds-icon name="refresh"></ds-icon></ds-icon-button
        ><ds-button>Import files</ds-button></ds-inline
      ></ds-page-header
    >\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`<div style="height:100dvh;min-width:0;min-height:0;overflow:hidden">
      <ds-pane-group>
        <ds-pane position="left" style="--ds-pane-size:16rem">
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Navigation</strong></ds-pane-header
          >
          <ds-scrollable-pane style="padding:1rem">
            <ds-stack gap="2">
              \${Array.from({
    length: 24
  }, (_, index) => box(\`Navigation item \${index + 1}\`))}
            </ds-stack>
          </ds-scrollable-pane>
        </ds-pane>
        <ds-pane position="center">
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Workspace toolbar</strong></ds-pane-header
          >
          <ds-pane-content scrollable style="padding:1rem">
            <ds-stack
              >\${Array.from({
    length: 30
  }, (_, index) => box(\`Content row \${index + 1}\`))}</ds-stack
            >
          </ds-pane-content>
        </ds-pane>
        <ds-inspector-pane>
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Inspector</strong></ds-pane-header
          >
          <ds-scrollable-pane style="padding:1rem">
            \${Array.from({
    length: 12
  }, (_, index) => box(\`Property \${index + 1}\`))}
          </ds-scrollable-pane>
        </ds-inspector-pane>
      </ds-pane-group>
    </div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`<ds-app-shell content-mode="pane">
      <ds-sidebar slot="sidebar" label="Workspace navigation">
        <strong slot="brand">Pane workspace</strong>
        \${Array.from({
    length: 28
  }, (_, index) => html\`<ds-sidebar-item value=\${\`item-\${index + 1}\`} ?active=\${index === 0}>
              <ds-icon slot="icon" name="table"></ds-icon>Item \${index + 1}
            </ds-sidebar-item>\`)}
        <ds-status-badge slot="footer" tone="success">Connected</ds-status-badge>
      </ds-sidebar>
      <ds-inline slot="header" justify="between" style="height:100%;padding:0 1rem">
        <strong>Fixed workspace toolbar</strong>
        <ds-icon-button label="Open commands"><ds-icon name="search"></ds-icon></ds-icon-button>
      </ds-inline>
      <ds-pane-group orientation="vertical">
        <ds-pane position="top" style="--ds-pane-size:3.25rem">
          <ds-pane-header
            ><span style="display:block;padding:1rem">Fixed tabs</span></ds-pane-header
          >
        </ds-pane>
        <ds-pane position="center">
          <ds-pane-content scrollable style="padding:1rem">
            <ds-stack
              >\${Array.from({
    length: 32
  }, (_, index) => box(\`Content row \${index + 1}\`))}</ds-stack
            >
          </ds-pane-content>
        </ds-pane>
        <ds-pane position="bottom" style="--ds-pane-size:3rem">
          <span style="display:block;padding:.875rem 1rem">Fixed status bar</span>
        </ds-pane>
      </ds-pane-group>
      <ds-inspector-pane slot="inspector">
        <ds-pane-header
          ><strong style="display:block;padding:1rem">Inspector</strong></ds-pane-header
        >
        <ds-scrollable-pane style="padding:1rem">
          <ds-stack gap="2"
            >\${Array.from({
    length: 18
  }, (_, index) => box(\`Property \${index + 1}\`))}</ds-stack
          >
        </ds-scrollable-pane>
      </ds-inspector-pane>
    </ds-app-shell>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`<ds-app-shell content-mode="pane" sidebar-collapsed>
      <ds-sidebar slot="sidebar" collapsed><strong slot="brand">Navigation</strong></ds-sidebar>
      <ds-pane-group>
        <ds-pane position="center">
          <ds-pane-header
            ><strong style="display:block;padding:1rem">Workspace only</strong></ds-pane-header
          >
          <ds-pane-content scrollable style="padding:1rem"
            >\${box('Side panes are collapsed')}</ds-pane-content
          >
        </ds-pane>
      </ds-pane-group>
      <ds-inspector-pane slot="inspector" collapsed></ds-inspector-pane>
    </ds-app-shell>\`
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`<div style="height:100dvh;min-height:560px">
      <ds-workspace>
        <ds-workspace-header slot="header" heading="Project Alpha">
          <ds-breadcrumbs slot="breadcrumb" label="Project location">
            <ds-breadcrumb href="#customers">Customers</ds-breadcrumb>
            <ds-breadcrumb current>Acme Corporation</ds-breadcrumb>
          </ds-breadcrumbs>
          <ds-status-badge slot="status" tone="success">Synced</ds-status-badge>
          <ds-button slot="actions" variant="secondary">Share</ds-button>
          <ds-icon-button slot="actions" label="More actions"
            ><ds-icon name="more-horizontal"></ds-icon
          ></ds-icon-button>
        </ds-workspace-header>
        <ds-pane-window aria-label="Project panes">
          \${workspacePane('Overview', 'The overview stays visible beside the detail panes.')}
          \${workspacePane('Activity', 'Recent project activity and approvals.')}
          \${workspacePane('Properties', 'Canonical values for the selected project.')}
        </ds-pane-window>
      </ds-workspace>
    </div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`<div style="height:100dvh;min-height:560px">
      <ds-workspace>
        <ds-workspace-header slot="header" heading="Customer workspace">
          <ds-breadcrumbs slot="breadcrumb" label="Customer location"
            ><ds-breadcrumb current>Customers / Acme</ds-breadcrumb></ds-breadcrumbs
          >
          <ds-status-badge slot="status" tone="info">In review</ds-status-badge>
          <ds-button slot="actions">Publish</ds-button>
        </ds-workspace-header>
        <ds-pane-window aria-label="Customer workspace panes">
          \${workspacePane('Customer', 'The primary record occupies the full height.')}
          <ds-pane-stack split="40/60">
            \${workspacePane('Contacts', 'People connected to this customer.')}
            \${workspacePane('Audit trail', 'Changes remain independently scrollable.')}
          </ds-pane-stack>
          \${workspacePane('Related orders', 'Orders and fulfillment context.')}
        </ds-pane-window>
      </ds-workspace>
    </div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`<div style="height:100dvh;min-height:560px">
      <ds-workspace>
        <ds-workspace-header slot="header" heading="Four pane comparison">
          <ds-breadcrumbs slot="breadcrumb" label="Workspace location"
            ><ds-breadcrumb current>Operations / Comparison</ds-breadcrumb></ds-breadcrumbs
          >
          <ds-status-badge slot="status" tone="success">Live</ds-status-badge>
        </ds-workspace-header>
        <ds-pane-window aria-label="Four pane comparison">
          <ds-pane-stack split="50/50"
            >\${workspacePane('Pane A', 'Primary records.')}\${workspacePane('Pane B', 'Selected record.')}</ds-pane-stack
          >
          <ds-pane-stack split="50/50"
            >\${workspacePane('Pane C', 'Relationships.')}\${workspacePane('Pane D', 'History.')}</ds-pane-stack
          >
        </ds-pane-window>
      </ds-workspace>
    </div>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="min-height:42rem;padding:2rem">
      <ds-page-header
        eyebrow="Dashboard"
        heading="Financial overview"
        description="Select an insight to inspect its matching ledger entries."
      ></ds-page-header>
      <ds-detail-sidebar open heading="Groceries" close-label="Close insight details">
        <ds-stack slot="summary" gap="2">
          <span style="color:var(--ds-color-text-muted)">Selected insight</span>
          <strong style="font-size:1.75rem">€842.31</strong>
          <span>Food · 14 transactions</span>
        </ds-stack>
        <ds-stack gap="3">
          <strong>Ledger entries</strong>
          \${['Market Square', 'Fresh Foods', 'Corner Shop'].map((name, index) => html\`<ds-card>
                <ds-inline justify="between" wrap="false">
                  <span
                    ><strong>\${name}</strong><br /><small>August \${18 - index}, 2026</small></span
                  >
                  <strong>−€\${[64.23, 42.9, 18.75][index]}</strong>
                </ds-inline>
              </ds-card>\`)}
        </ds-stack>
        <ds-button slot="footer" variant="secondary" full-width>View full ledger</ds-button>
      </ds-detail-sidebar>
    </div>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="min-height:42rem;padding:2rem">
      <ds-page-header heading="Account ledger"></ds-page-header>
      <ds-detail-sidebar open modal heading="Transaction details">
        <p slot="summary">A modal drawer blocks interaction with the page until it is closed.</p>
        <p>Use this variant for focused tasks instead of persistent dashboard context.</p>
      </ds-detail-sidebar>
    </div>\`
}`,...v.parameters?.docs?.source}}},y=[`Stack`,`Inline`,`Grid`,`Container`,`PageHeader`,`PaneWorkspace`,`ShellPaneWorkspace`,`CollapsedShellPanes`,`DesktopWorkspace`,`DesktopWorkspaceStacks`,`DesktopWorkspaceFourPaneGrid`,`DetailSidebar`,`ModalDetailSidebar`]})))()}b();export{f as CollapsedShellPanes,c as Container,m as DesktopWorkspace,g as DesktopWorkspaceFourPaneGrid,h as DesktopWorkspaceStacks,_ as DetailSidebar,s as Grid,o as Inline,v as ModalDetailSidebar,l as PageHeader,u as PaneWorkspace,d as ShellPaneWorkspace,a as Stack,y as __namedExportsOrder,i as default};