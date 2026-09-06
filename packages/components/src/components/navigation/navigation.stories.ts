import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const sidebar = () =>
  html`<kanonis-sidebar slot="sidebar"
    ><strong slot="brand" style="font-size:15px">◈ &nbsp;Kanonis</strong
    ><kanonis-sidebar-item value="overview" active
      ><kanonis-icon slot="icon" name="home"></kanonis-icon>Overview</kanonis-sidebar-item
    ><kanonis-sidebar-item value="monthly"
      ><kanonis-icon slot="icon" name="calendar"></kanonis-icon>Monthly</kanonis-sidebar-item
    ><kanonis-sidebar-item value="ledger"
      ><kanonis-icon slot="icon" name="table"></kanonis-icon>Ledger</kanonis-sidebar-item
    ><kanonis-sidebar-item value="settings"
      ><kanonis-icon slot="icon" name="settings"></kanonis-icon>Settings</kanonis-sidebar-item
    ><kanonis-status-badge slot="footer" tone="success">System online</kanonis-status-badge></kanonis-sidebar
  >`;
const meta: Meta = {
  title: 'Composites/Navigation',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
export const SidebarItems: StoryObj = {
  render: () => html`<div style="width:230px;height:620px">${sidebar()}</div>`,
};
export const ApplicationShell: StoryObj = {
  render: () =>
    html`<kanonis-app-shell
      >${sidebar()}<kanonis-inline slot="header" justify="between" style="height:72px;padding:0 24px"
        ><strong>Overview</strong
        ><kanonis-inline
          ><kanonis-icon-button label="Refresh"><kanonis-icon name="refresh"></kanonis-icon></kanonis-icon-button
          ><kanonis-avatar name="Design Preview"></kanonis-avatar></kanonis-inline></kanonis-inline
      ><kanonis-page-header
        eyebrow="Operations"
        heading="System overview"
        description="Responsive shell built entirely from custom elements."
      ></kanonis-page-header>
      <div style="margin-top:16px">
        <kanonis-kpi-grid
          ><kanonis-metric label="Online" value="24" tone="success"></kanonis-metric
          ><kanonis-metric label="Warnings" value="2" tone="warning"></kanonis-metric
          ><kanonis-metric label="Offline" value="1" tone="danger"></kanonis-metric
          ><kanonis-metric label="Updates" value="6" tone="accent"></kanonis-metric
        ></kanonis-kpi-grid></div
    ></kanonis-app-shell>`,
};

export const Breadcrumbs: StoryObj = {
  render: () =>
    html`<kanonis-breadcrumbs label="Current location">
      <kanonis-breadcrumb href="#dashboard">Dashboard</kanonis-breadcrumb>
      <kanonis-breadcrumb href="#accounts">Accounts</kanonis-breadcrumb>
      <kanonis-breadcrumb current>Daily account</kanonis-breadcrumb>
    </kanonis-breadcrumbs>`,
};

export const Pagination: StoryObj = {
  render: () => html`<kanonis-pagination page="6" pages="24"></kanonis-pagination>`,
};

export const List: StoryObj = {
  render: () =>
    html`<kanonis-list label="Connected accounts" divided>
      <kanonis-list-item value="daily" supporting-text="NL12 BANK 3456 7890 12" selected>
        <kanonis-avatar slot="leading" initials="DA" size="small"></kanonis-avatar>
        Daily account
        <kanonis-badge slot="trailing">€ 4,285</kanonis-badge>
      </kanonis-list-item>
      <kanonis-list-item value="savings" supporting-text="NL98 BANK 7654 3210 98">
        <kanonis-avatar slot="leading" initials="SA" size="small"></kanonis-avatar>
        Savings
        <kanonis-badge slot="trailing">€ 12,940</kanonis-badge>
      </kanonis-list-item>
    </kanonis-list>`,
};

export const CollapsibleSidebar: StoryObj = {
  render: () =>
    html`<kanonis-app-shell sidebar-collapsed>
      ${sidebar()}
      <kanonis-inline slot="header" style="padding:0 24px"
        ><strong>Collapsible navigation</strong></kanonis-inline
      >
      <kanonis-page-header
        heading="More room for your work"
        description="Use the sidebar button in the header to show or hide navigation. The same control works on compact screens."
      ></kanonis-page-header>
    </kanonis-app-shell>`,
};
