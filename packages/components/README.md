# @endeavoury/kanonis

Product-neutral Lit Web Components for Kanonis. Import the package root to register all elements, a grouped entry point such as `/button`, `/forms`, `/interaction`, `/overlays`, `/navigation`, `/tree`, or `/enterprise` for selective registration, and `/styles.css` for the optional global foundation.

The first enterprise workflow release is the P0 data-management set: `kanonis-data-grid`, `kanonis-filter-builder`, `kanonis-view-toolbar`, `kanonis-column-manager`, `kanonis-bulk-actions`, `kanonis-saved-view`, `kanonis-combobox`, and `kanonis-validation-summary`.

The P1 productivity set adds `kanonis-command-palette`, `kanonis-global-search`, `kanonis-tenant-switcher`, `kanonis-user-menu`, `kanonis-workspace-tabs`, `kanonis-navigation-group`, `kanonis-context-menu`, `kanonis-quick-actions`, `kanonis-record-header`, `kanonis-detail-list`, `kanonis-notification-center`, and `kanonis-banner`.

The P2 operations set adds `kanonis-form-section`, `kanonis-field-array`, `kanonis-date-picker`, `kanonis-time-picker`, `kanonis-file-upload`, `kanonis-stepper`, `kanonis-approval-flow`, `kanonis-task-list`, `kanonis-timeline`, `kanonis-activity-feed`, `kanonis-job-status`, and `kanonis-change-summary`.

The P3 governance set adds `kanonis-audit-log`, `kanonis-permission-matrix`, `kanonis-role-badge`, `kanonis-diff-viewer`, `kanonis-code-editor`, `kanonis-json-editor`, `kanonis-maintenance-notice`, `kanonis-help-panel`, `kanonis-tour`, `kanonis-coachmark`, and `kanonis-compare-view`.

## Fixed application layouts

`kanonis-app-shell` owns the viewport and keeps its `sidebar` and optional `header` outside the main scroll area. Its default content is independently scrollable. Use `content-mode="pane"` when composing a nested workspace from `kanonis-pane-group`, `kanonis-pane`, `kanonis-pane-header`, `kanonis-pane-content`, `kanonis-scrollable-pane`, and `kanonis-inspector-pane`.

```html
<kanonis-app-shell content-mode="pane">
  <kanonis-sidebar slot="sidebar">...</kanonis-sidebar>
  <div slot="header">...</div>
  <kanonis-pane-group>
    <kanonis-pane position="center">
      <kanonis-pane-header>...</kanonis-pane-header>
      <kanonis-pane-content scrollable>...</kanonis-pane-content>
    </kanonis-pane>
  </kanonis-pane-group>
  <kanonis-inspector-pane slot="inspector">...</kanonis-inspector-pane>
</kanonis-app-shell>
```

Nest a vertical `kanonis-pane-group orientation="vertical"` inside a horizontal group to combine top/bottom panes with left/center/right panes. Set `sidebar-collapsed` on the shell and `collapsed` on side panes to remove them from the desktop layout. Below 800px inspector panes become overlay drawers; below 680px the primary sidebar becomes a bottom navigation pane. The global stylesheet locks document scrolling only while a `kanonis-app-shell` is present (or when `.kanonis-application` is applied explicitly).

## Component authoring

Use the component-first TypeScript layout in [`docs/development.md`](../../docs/development.md). The [`component catalog`](../../docs/component-catalog.md) indexes Storybook autodocs and documentation coverage for every registered element. `node scripts/scaffold-component.mjs <name>` creates the colocated TypeScript implementation, SCSS source, HTML fixture, registration, Storybook, and docs starting points.
