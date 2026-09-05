import axe from 'axe-core';
import { describe, expect, it } from 'vitest';

describe('representative accessibility compositions', () => {
  it('has no automatically detectable violations in the primary form controls', async () => {
    document.body.innerHTML = `
      <main>
        <h1>Account settings</h1>
        <kanonis-input label="Account name" name="name" required></kanonis-input>
        <kanonis-select label="Type" name="type"></kanonis-select>
        <kanonis-checkbox name="enabled">Enabled</kanonis-checkbox>
        <kanonis-button variant="primary">Save</kanonis-button>
      </main>`;
    const select = document.querySelector('kanonis-select')!;
    select.options = [
      { label: 'Personal', value: 'personal' },
      { label: 'Business', value: 'business' },
    ];
    await Promise.all(
      [
        ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
          'kanonis-input,kanonis-select,kanonis-checkbox,kanonis-button',
        ),
      ].map((element) => element.updateComplete),
    );
    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('exposes status, busy, and empty feedback semantics', async () => {
    document.body.innerHTML = `
      <main>
        <h1>Ledger</h1>
        <kanonis-alert tone="warning" heading="Review required">Some entries need a category.</kanonis-alert>
        <kanonis-loading-state label="Loading ledger"></kanonis-loading-state>
        <kanonis-empty-state heading="No transactions">Try another period.</kanonis-empty-state>
      </main>`;
    await Promise.all(
      [
        ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
          'kanonis-alert,kanonis-loading-state,kanonis-empty-state',
        ),
      ].map((element) => element.updateComplete),
    );
    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('has no detectable violations in tabs, disclosure, upload, and progress', async () => {
    document.body.innerHTML = `
      <main>
        <h1>Import statements</h1>
        <kanonis-tabs label="Import views" value="upload">
          <kanonis-tab value="upload" label="Upload">
            <kanonis-drop-zone label="Choose or drop files" hint="XML only" accept=".xml"></kanonis-drop-zone>
          </kanonis-tab>
          <kanonis-tab value="history" label="History">Previous imports</kanonis-tab>
        </kanonis-tabs>
        <kanonis-disclosure summary="Import requirements">Use CAMT XML files.</kanonis-disclosure>
        <kanonis-progress label="Import progress" value="40" show-value></kanonis-progress>
      </main>`;
    const elements = [
      ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
        'kanonis-tabs,kanonis-tab,kanonis-drop-zone,kanonis-disclosure,kanonis-progress',
      ),
    ];
    await Promise.all(elements.map((element) => element.updateComplete));
    const tabs = document.querySelector('kanonis-tabs')!;
    tabs.shadowRoot!.querySelector('slot')!.dispatchEvent(new Event('slotchange'));
    await tabs.updateComplete;
    await Promise.all(elements.map((element) => element.updateComplete));

    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('has no detectable violations in expanded forms and navigation', async () => {
    document.body.innerHTML = `
      <main>
        <h1>Export settings</h1>
        <kanonis-breadcrumbs label="Current location">
          <kanonis-breadcrumb href="#home">Home</kanonis-breadcrumb>
          <kanonis-breadcrumb current>Export</kanonis-breadcrumb>
        </kanonis-breadcrumbs>
        <kanonis-textarea label="Export note" helpText="Optional context"></kanonis-textarea>
        <kanonis-switch checked>Email when ready</kanonis-switch>
        <kanonis-range label="Detail level" value="60" show-value></kanonis-range>
        <kanonis-radio-group label="Format" value="csv" required>
          <kanonis-radio value="csv">CSV</kanonis-radio>
          <kanonis-radio value="xml">XML</kanonis-radio>
        </kanonis-radio-group>
        <kanonis-pagination label="Results" page="2" pages="6"></kanonis-pagination>
        <kanonis-list label="Exports">
          <kanonis-list-item value="august">August export</kanonis-list-item>
        </kanonis-list>
      </main>`;
    const elements = [
      ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
        'kanonis-breadcrumbs,kanonis-breadcrumb,kanonis-textarea,kanonis-switch,kanonis-range,kanonis-radio-group,kanonis-radio,kanonis-pagination,kanonis-list,kanonis-list-item',
      ),
    ];
    await Promise.all(elements.map((element) => element.updateComplete));
    document
      .querySelector('kanonis-radio-group')!
      .shadowRoot!.querySelector('slot')!
      .dispatchEvent(new Event('slotchange'));
    await Promise.all(elements.map((element) => element.updateComplete));

    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('has no detectable violations in semantic metadata and tree navigation', async () => {
    document.body.innerHTML = `<main><h1>Node metadata</h1>
      <kanonis-tree label="Master data systems"><kanonis-tree-item label="Commercial Node" value="commercial"><a href="#topology">Topology</a></kanonis-tree-item></kanonis-tree>
      <kanonis-description-list></kanonis-description-list>
      <kanonis-code-block label="Canonical model" language="YAML">name: Customer</kanonis-code-block>
    </main>`;
    const descriptions = document.querySelector('kanonis-description-list')!;
    descriptions.items = [{ term: 'Version', value: '1.0.0' }];
    const elements = [
      ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
        'kanonis-tree,kanonis-tree-item,kanonis-description-list,kanonis-code-block',
      ),
    ];
    await Promise.all(elements.map((element) => element.updateComplete));
    document
      .querySelector('kanonis-tree-item')!
      .shadowRoot!.querySelector('slot:not([name])')!
      .dispatchEvent(new Event('slotchange'));
    await Promise.all(elements.map((element) => element.updateComplete));
    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('has no detectable violations in menus, toasts, and open dialogs', async () => {
    document.body.innerHTML = `
      <main>
        <h1>Account actions</h1>
        <kanonis-menu label="Account actions" open>
          <span slot="trigger">Actions</span>
          <kanonis-menu-item value="edit">Edit account</kanonis-menu-item>
          <kanonis-menu-item value="remove" tone="danger">Remove account</kanonis-menu-item>
        </kanonis-menu>
        <kanonis-toast-region label="Notifications">
          <kanonis-toast heading="Account updated" duration="0">Changes are now live.</kanonis-toast>
        </kanonis-toast-region>
        <kanonis-dialog heading="Confirm removal" open>
          Imported records will remain available.
        </kanonis-dialog>
      </main>`;
    const elements = [
      ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
        'kanonis-menu,kanonis-menu-item,kanonis-toast-region,kanonis-toast,kanonis-dialog',
      ),
    ];
    await Promise.all(elements.map((element) => element.updateComplete));

    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('has no detectable violations in mature action, asset, and reorder additions', async () => {
    document.body.innerHTML = `<main><h1>Workspace preferences</h1>
      <kanonis-segmented-control label="Density" value="comfortable">
        <kanonis-segment value="compact">Compact</kanonis-segment>
        <kanonis-segment value="comfortable">Comfortable</kanonis-segment>
      </kanonis-segmented-control>
      <kanonis-action-bar label="Workspace actions">
        <kanonis-button>Save</kanonis-button><kanonis-button slot="overflow">Archive</kanonis-button>
      </kanonis-action-bar>
      <kanonis-split-button label="Publish" menu-label="Publishing options">
        Publish<kanonis-menu-item slot="menu" value="draft">Save draft</kanonis-menu-item>
      </kanonis-split-button>
      <kanonis-chip value="active" label="Active" dismissible>Active</kanonis-chip>
      <kanonis-input-group label="Account code"><span slot="prefix">AC-</span><kanonis-input label="Code"></kanonis-input></kanonis-input-group>
      <kanonis-reorder-list label="Panels">
        <kanonis-reorder-item value="summary" label="Summary">Summary</kanonis-reorder-item>
        <kanonis-reorder-item value="activity" label="Activity">Activity</kanonis-reorder-item>
      </kanonis-reorder-list>
      <kanonis-illustration variant="empty" label="No panels"></kanonis-illustration>
      <kanonis-brand-mark></kanonis-brand-mark>
      <kanonis-live-region message="Preferences loaded"></kanonis-live-region>
    </main>`;
    const elements = [
      ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>('main *'),
    ].filter((element) => element.localName.startsWith('kanonis-'));
    await Promise.all(elements.map((element) => element.updateComplete));
    document
      .querySelector('kanonis-segmented-control')!
      .shadowRoot!.querySelector('slot')!
      .dispatchEvent(new Event('slotchange'));
    await Promise.all(elements.map((element) => element.updateComplete));
    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('has no detectable violations in expanded and collapsed application navigation', async () => {
    document.body.innerHTML = `<kanonis-app-shell>
      <kanonis-sidebar slot="sidebar"><kanonis-sidebar-item active>Overview</kanonis-sidebar-item></kanonis-sidebar>
      <h1>Workspace</h1>
    </kanonis-app-shell>`;
    const shell = document.querySelector('kanonis-app-shell')! as HTMLElement & {
      updateComplete: Promise<unknown>;
      sidebarCollapsed: boolean;
    };
    await shell.updateComplete;
    shell.shadowRoot!.querySelector('slot[name="sidebar"]')!.dispatchEvent(new Event('slotchange'));
    await shell.updateComplete;
    for (const collapsed of [false, true]) {
      shell.sidebarCollapsed = collapsed;
      await shell.updateComplete;
      const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
      expect(result.violations).toEqual([]);
    }
  });

  it('has no detectable violations in labeled, sortable, paged data tables and grids', async () => {
    document.body.innerHTML = `<main><h1>Accounts</h1>
      <kanonis-data-table caption="Account balances" description="Balances at close of business"></kanonis-data-table>
      <kanonis-data-grid label="Pending accounts"></kanonis-data-grid>
    </main>`;
    const columns = [
      { key: 'name', label: 'Account', rowHeader: true, sortable: true },
      { key: 'balance', label: 'Balance', numeric: true, sortable: true },
    ];
    const rows = [{ id: 'cash', name: 'Cash', balance: 1250 }];
    const elements = [
      ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
        'kanonis-data-table,kanonis-data-grid',
      ),
    ];
    for (const element of elements) {
      Object.assign(element, {
        columns,
        rows,
        pageSize: 10,
        totalRows: 12,
        selectable: true,
        selectedKey: 'cash',
      });
    }
    await Promise.all(elements.map((element) => element.updateComplete));
    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });

  it('has no detectable violations in a desktop pane workspace composition', async () => {
    document.body.innerHTML = `<main>
      <kanonis-workspace style="height:720px">
        <kanonis-workspace-header slot="header" heading="Project Alpha">
          <kanonis-breadcrumbs slot="breadcrumb" label="Project location"><kanonis-breadcrumb current>Customers / Acme</kanonis-breadcrumb></kanonis-breadcrumbs>
          <kanonis-status-badge slot="status" tone="success">Synced</kanonis-status-badge>
          <kanonis-button slot="actions">Share</kanonis-button>
        </kanonis-workspace-header>
        <kanonis-pane-window aria-label="Project panes">
          <kanonis-pane><kanonis-pane-header><h2>Overview</h2></kanonis-pane-header><kanonis-pane-content scrollable>Summary</kanonis-pane-content></kanonis-pane>
          <kanonis-pane-stack split="40/60">
            <kanonis-pane><kanonis-pane-header><h2>Activity</h2></kanonis-pane-header><kanonis-pane-content scrollable>Recent activity</kanonis-pane-content></kanonis-pane>
            <kanonis-pane><kanonis-pane-header><h2>Audit</h2></kanonis-pane-header><kanonis-pane-content scrollable>Audit events</kanonis-pane-content></kanonis-pane>
          </kanonis-pane-stack>
        </kanonis-pane-window>
      </kanonis-workspace>
    </main>`;
    const elements = [
      ...document.querySelectorAll<HTMLElement & { updateComplete: Promise<unknown> }>(
        'kanonis-workspace,kanonis-workspace-header,kanonis-pane-window,kanonis-pane-stack,kanonis-pane,kanonis-pane-header,kanonis-pane-content,kanonis-breadcrumbs,kanonis-breadcrumb,kanonis-status-badge,kanonis-button',
      ),
    ];
    await Promise.all(elements.map((element) => element.updateComplete));
    const result = await axe.run(document.body, { rules: { region: { enabled: false } } });
    expect(result.violations).toEqual([]);
  });
});
