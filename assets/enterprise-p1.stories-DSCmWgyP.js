import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a;function o(){return(o=e((()=>{t(),r={title:`Components/Enterprise productivity`,parameters:{layout:`fullscreen`},tags:[`autodocs`]},i={render:()=>n`<div style="display:grid;gap:1rem;max-width:960px;margin:auto;padding:1.5rem">
      <ds-banner heading="Scheduled maintenance" dismissible
        >The API will be read-only Saturday at 22:00 UTC.</ds-banner
      >
      <div style="display:flex;gap:1rem;align-items:start;flex-wrap:wrap">
        <ds-tenant-switcher
          .tenants=${[{id:`acme`,label:`Acme Corporation`},{id:`globex`,label:`Globex`}]}
          value="acme"
        ></ds-tenant-switcher>
        <ds-global-search></ds-global-search>
        <ds-notification-center
          .notifications=${[{id:`1`,title:`Access review due`,time:`10m ago`},{id:`2`,title:`Deployment completed`,read:!0}]}
        ></ds-notification-center>
        <ds-user-menu name="Jordan Lee"
          ><button role="menuitem">Profile</button
          ><button role="menuitem">Sign out</button></ds-user-menu
        >
      </div>
      <ds-navigation-group label="Projects"
        ><ds-sidebar-item value="all">All projects</ds-sidebar-item
        ><ds-sidebar-item value="archived">Archived</ds-sidebar-item></ds-navigation-group
      >
      <ds-workspace-tabs
        .tabs=${[{id:`overview`,label:`Overview`},{id:`settings`,label:`Settings`,closable:!0}]}
        value="overview"
      ></ds-workspace-tabs>
      <ds-record-header
        heading="Atlas rollout"
        description="Platform delivery workspace"
        status="In progress"
        ><span slot="meta">Updated today</span><ds-button slot="actions">Edit</ds-button
        ><ds-context-menu slot="actions"
          ><ds-menu-item>Duplicate</ds-menu-item
          ><ds-menu-item tone="danger">Archive</ds-menu-item></ds-context-menu
        ></ds-record-header
      >
      <ds-detail-list
        .items=${[{label:`Owner`,value:`Platform team`},{label:`Environment`,value:`Production`},{label:`Last deployment`,value:`Today, 09:42 UTC`}]}
      ></ds-detail-list>
      <ds-quick-actions
        ><ds-button>Deploy</ds-button
        ><ds-button variant="secondary">Create task</ds-button></ds-quick-actions
      >
      <ds-command-palette
        open
        .commands=${[{id:`new`,label:`Create project`,shortcut:`⌘ N`},{id:`search`,label:`Search records`,description:`Find projects and people`}]}
      ></ds-command-palette>
    </div>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display:grid;gap:1rem;max-width:960px;margin:auto;padding:1.5rem">
      <ds-banner heading="Scheduled maintenance" dismissible
        >The API will be read-only Saturday at 22:00 UTC.</ds-banner
      >
      <div style="display:flex;gap:1rem;align-items:start;flex-wrap:wrap">
        <ds-tenant-switcher
          .tenants=\${[{
    id: 'acme',
    label: 'Acme Corporation'
  }, {
    id: 'globex',
    label: 'Globex'
  }]}
          value="acme"
        ></ds-tenant-switcher>
        <ds-global-search></ds-global-search>
        <ds-notification-center
          .notifications=\${[{
    id: '1',
    title: 'Access review due',
    time: '10m ago'
  }, {
    id: '2',
    title: 'Deployment completed',
    read: true
  }]}
        ></ds-notification-center>
        <ds-user-menu name="Jordan Lee"
          ><button role="menuitem">Profile</button
          ><button role="menuitem">Sign out</button></ds-user-menu
        >
      </div>
      <ds-navigation-group label="Projects"
        ><ds-sidebar-item value="all">All projects</ds-sidebar-item
        ><ds-sidebar-item value="archived">Archived</ds-sidebar-item></ds-navigation-group
      >
      <ds-workspace-tabs
        .tabs=\${[{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'settings',
    label: 'Settings',
    closable: true
  }]}
        value="overview"
      ></ds-workspace-tabs>
      <ds-record-header
        heading="Atlas rollout"
        description="Platform delivery workspace"
        status="In progress"
        ><span slot="meta">Updated today</span><ds-button slot="actions">Edit</ds-button
        ><ds-context-menu slot="actions"
          ><ds-menu-item>Duplicate</ds-menu-item
          ><ds-menu-item tone="danger">Archive</ds-menu-item></ds-context-menu
        ></ds-record-header
      >
      <ds-detail-list
        .items=\${[{
    label: 'Owner',
    value: 'Platform team'
  }, {
    label: 'Environment',
    value: 'Production'
  }, {
    label: 'Last deployment',
    value: 'Today, 09:42 UTC'
  }]}
      ></ds-detail-list>
      <ds-quick-actions
        ><ds-button>Deploy</ds-button
        ><ds-button variant="secondary">Create task</ds-button></ds-quick-actions
      >
      <ds-command-palette
        open
        .commands=\${[{
    id: 'new',
    label: 'Create project',
    shortcut: '⌘ N'
  }, {
    id: 'search',
    label: 'Search records',
    description: 'Find projects and people'
  }]}
      ></ds-command-palette>
    </div>\`
}`,...i.parameters?.docs?.source}}},a=[`WorkspaceChrome`]})))()}o();export{i as WorkspaceChrome,a as __namedExportsOrder,r as default};