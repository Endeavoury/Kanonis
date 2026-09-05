import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r=()=>n`<ds-sidebar slot="sidebar"
    ><strong slot="brand" style="font-size:15px">◈ &nbsp;Kanosis</strong
    ><ds-sidebar-item value="overview" active
      ><ds-icon slot="icon" name="home"></ds-icon>Overview</ds-sidebar-item
    ><ds-sidebar-item value="monthly"
      ><ds-icon slot="icon" name="calendar"></ds-icon>Monthly</ds-sidebar-item
    ><ds-sidebar-item value="ledger"
      ><ds-icon slot="icon" name="table"></ds-icon>Ledger</ds-sidebar-item
    ><ds-sidebar-item value="settings"
      ><ds-icon slot="icon" name="settings"></ds-icon>Settings</ds-sidebar-item
    ><ds-status-badge slot="footer" tone="success">System online</ds-status-badge></ds-sidebar
  >`,i={title:`Components/Navigation`,tags:[`autodocs`],parameters:{layout:`fullscreen`}},a={render:()=>n`<div style="width:230px;height:620px">${r()}</div>`},o={render:()=>n`<ds-app-shell
      >${r()}<ds-inline slot="header" justify="between" style="height:72px;padding:0 24px"
        ><strong>Overview</strong
        ><ds-inline
          ><ds-icon-button label="Refresh"><ds-icon name="refresh"></ds-icon></ds-icon-button
          ><ds-avatar name="Design Preview"></ds-avatar></ds-inline></ds-inline
      ><ds-page-header
        eyebrow="Operations"
        heading="System overview"
        description="Responsive shell built entirely from custom elements."
      ></ds-page-header>
      <div style="margin-top:16px">
        <ds-kpi-grid
          ><ds-metric label="Online" value="24" tone="success"></ds-metric
          ><ds-metric label="Warnings" value="2" tone="warning"></ds-metric
          ><ds-metric label="Offline" value="1" tone="danger"></ds-metric
          ><ds-metric label="Updates" value="6" tone="accent"></ds-metric
        ></ds-kpi-grid></div
    ></ds-app-shell>`},s={render:()=>n`<ds-breadcrumbs label="Current location">
      <ds-breadcrumb href="#dashboard">Dashboard</ds-breadcrumb>
      <ds-breadcrumb href="#accounts">Accounts</ds-breadcrumb>
      <ds-breadcrumb current>Daily account</ds-breadcrumb>
    </ds-breadcrumbs>`},c={render:()=>n`<ds-pagination page="6" pages="24"></ds-pagination>`},l={render:()=>n`<ds-list label="Connected accounts" divided>
      <ds-list-item value="daily" supporting-text="NL12 BANK 3456 7890 12" selected>
        <ds-avatar slot="leading" initials="DA" size="small"></ds-avatar>
        Daily account
        <ds-badge slot="trailing">€ 4,285</ds-badge>
      </ds-list-item>
      <ds-list-item value="savings" supporting-text="NL98 BANK 7654 3210 98">
        <ds-avatar slot="leading" initials="SA" size="small"></ds-avatar>
        Savings
        <ds-badge slot="trailing">€ 12,940</ds-badge>
      </ds-list-item>
    </ds-list>`},u={render:()=>n`<ds-app-shell sidebar-collapsed>
      ${r()}
      <ds-inline slot="header" style="padding:0 24px"
        ><strong>Collapsible navigation</strong></ds-inline
      >
      <ds-page-header
        heading="More room for your work"
        description="Use the sidebar button in the header to show or hide navigation. The same control works on compact screens."
      ></ds-page-header>
    </ds-app-shell>`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="width:230px;height:620px">${sidebar()}</div>`\n}',...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-app-shell
      >\${sidebar()}<ds-inline slot="header" justify="between" style="height:72px;padding:0 24px"
        ><strong>Overview</strong
        ><ds-inline
          ><ds-icon-button label="Refresh"><ds-icon name="refresh"></ds-icon></ds-icon-button
          ><ds-avatar name="Design Preview"></ds-avatar></ds-inline></ds-inline
      ><ds-page-header
        eyebrow="Operations"
        heading="System overview"
        description="Responsive shell built entirely from custom elements."
      ></ds-page-header>
      <div style="margin-top:16px">
        <ds-kpi-grid
          ><ds-metric label="Online" value="24" tone="success"></ds-metric
          ><ds-metric label="Warnings" value="2" tone="warning"></ds-metric
          ><ds-metric label="Offline" value="1" tone="danger"></ds-metric
          ><ds-metric label="Updates" value="6" tone="accent"></ds-metric
        ></ds-kpi-grid></div
    ></ds-app-shell>\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-breadcrumbs label="Current location">
      <ds-breadcrumb href="#dashboard">Dashboard</ds-breadcrumb>
      <ds-breadcrumb href="#accounts">Accounts</ds-breadcrumb>
      <ds-breadcrumb current>Daily account</ds-breadcrumb>
    </ds-breadcrumbs>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-pagination page="6" pages="24"></ds-pagination>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-list label="Connected accounts" divided>
      <ds-list-item value="daily" supporting-text="NL12 BANK 3456 7890 12" selected>
        <ds-avatar slot="leading" initials="DA" size="small"></ds-avatar>
        Daily account
        <ds-badge slot="trailing">€ 4,285</ds-badge>
      </ds-list-item>
      <ds-list-item value="savings" supporting-text="NL98 BANK 7654 3210 98">
        <ds-avatar slot="leading" initials="SA" size="small"></ds-avatar>
        Savings
        <ds-badge slot="trailing">€ 12,940</ds-badge>
      </ds-list-item>
    </ds-list>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-app-shell sidebar-collapsed>
      \${sidebar()}
      <ds-inline slot="header" style="padding:0 24px"
        ><strong>Collapsible navigation</strong></ds-inline
      >
      <ds-page-header
        heading="More room for your work"
        description="Use the sidebar button in the header to show or hide navigation. The same control works on compact screens."
      ></ds-page-header>
    </ds-app-shell>\`
}`,...u.parameters?.docs?.source}}},d=[`SidebarItems`,`ApplicationShell`,`Breadcrumbs`,`Pagination`,`List`,`CollapsibleSidebar`]})))()}f();export{o as ApplicationShell,s as Breadcrumbs,u as CollapsibleSidebar,l as List,c as Pagination,a as SidebarItems,d as __namedExportsOrder,i as default};