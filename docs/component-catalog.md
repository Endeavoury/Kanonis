# Component catalog

This catalog is the documentation index for every registered custom element. Each tag is covered by
a Storybook example with autodocs. Story presence establishes discoverability; production readiness
is tracked separately in the [component status manifest](component-status.json) under the
[component maturity policy](component-maturity.md).

The [implementation report](implementation-report.md) maps the external review backlog to the
delivered foundations, components, patterns, and quality gates. Detailed guides currently cover the
[data table/grid](components/data-table.md) and
[action, input, asset, and reordering additions](components/maturity-additions.md); the status
manifest keeps catalog-only entries experimental rather than overstating their readiness.

## Layout and navigation

`kanonis-app-shell`, `kanonis-pane-group`, `kanonis-pane`, `kanonis-scrollable-pane`, `kanonis-sidebar`, `kanonis-inspector-pane`, `kanonis-pane-header`, `kanonis-pane-content`, `kanonis-navigation-group`, `kanonis-workspace-tabs` — [layout and productivity stories](../storybook/stories/components/enterprise-p1.stories.ts)

## Data, forms, and workflows

`kanonis-data-grid`, `kanonis-data-table`, `kanonis-filter-builder`, `kanonis-filter-bar`, `kanonis-view-toolbar`, `kanonis-column-manager`, `kanonis-bulk-actions`, `kanonis-saved-view`, `kanonis-combobox`, `kanonis-validation-summary`, `kanonis-form-section`, `kanonis-field-array`, `kanonis-date-picker`, `kanonis-time-picker`, `kanonis-file-upload`, `kanonis-drop-zone`, `kanonis-stepper`, `kanonis-approval-flow`, `kanonis-task-list`, `kanonis-detail-list`, `kanonis-detail-sidebar`, `kanonis-record-header`, `kanonis-change-summary` — [productivity stories](../storybook/stories/components/enterprise.stories.ts), [workflow stories](../storybook/stories/components/enterprise-p2.stories.ts)

## Search, commands, and notifications

`kanonis-command-palette`, `kanonis-global-search`, `kanonis-tenant-switcher`, `kanonis-user-menu`, `kanonis-context-menu`, `kanonis-quick-actions`, `kanonis-notification-center`, `kanonis-banner`, `kanonis-maintenance-notice`, `kanonis-help-panel`, `kanonis-tour`, `kanonis-coachmark` — [productivity stories](../storybook/stories/components/enterprise-p1.stories.ts), [governance stories](../storybook/stories/components/enterprise-p3.stories.ts)

## Audit, security, and developer tools

`kanonis-audit-log`, `kanonis-permission-matrix`, `kanonis-role-badge`, `kanonis-diff-viewer`, `kanonis-code-editor`, `kanonis-json-editor`, `kanonis-compare-view`, `kanonis-job-status`, `kanonis-timeline`, `kanonis-activity-feed` — [P2 stories](../storybook/stories/components/enterprise-p2.stories.ts), [P3 stories](../storybook/stories/components/enterprise-p3.stories.ts)

## Foundations and controls

`kanonis-alert`, `kanonis-avatar`, `kanonis-badge`, `kanonis-breadcrumb`, `kanonis-breadcrumbs`, `kanonis-button`, `kanonis-button-group`, `kanonis-card`, `kanonis-checkbox`, `kanonis-code-block`, `kanonis-container`, `kanonis-description-list`, `kanonis-dialog`, `kanonis-disclosure`, `kanonis-drawer`, `kanonis-empty-state`, `kanonis-form-field`, `kanonis-grid`, `kanonis-icon`, `kanonis-icon-button`, `kanonis-inline`, `kanonis-input`, `kanonis-kpi-grid`, `kanonis-list`, `kanonis-list-item`, `kanonis-loading-state`, `kanonis-menu`, `kanonis-menu-item`, `kanonis-metric`, `kanonis-page-header`, `kanonis-pagination`, `kanonis-panel`, `kanonis-progress`, `kanonis-radio`, `kanonis-radio-group`, `kanonis-range`, `kanonis-search-input`, `kanonis-select`, `kanonis-sidebar-item`, `kanonis-skeleton`, `kanonis-stack`, `kanonis-status-badge`, `kanonis-switch`, `kanonis-tab`, `kanonis-tabs`, `kanonis-textarea`, `kanonis-theme-toggle`, `kanonis-toast`, `kanonis-toast-region`, `kanonis-tooltip`, `kanonis-tree`, `kanonis-tree-item` — [component stories](../storybook/stories/components)

## Action, accessibility, asset, and reordering additions

`kanonis-live-region`, `kanonis-segmented-control`, `kanonis-segment`, `kanonis-action-bar`, `kanonis-split-button`,
`kanonis-input-group`, `kanonis-chip`, `kanonis-illustration`, `kanonis-brand-mark`, `kanonis-reorder-list`,
`kanonis-reorder-item` — [maturity addition stories](../storybook/stories/components/enhancements.stories.ts)

`kanonis-workspace`, `kanonis-workspace-header`, `kanonis-pane-window`, `kanonis-pane-stack` — [desktop pane workspace
stories](../storybook/stories/components/layout.stories.ts)

The full desktop composition is documented in [Desktop pane workspace](patterns/desktop-pane-workspace.md).

## Choosing between overlapping primitives

Use `kanonis-card` for a self-contained content object and `kanonis-panel` for a structural region with
header/body/footer slots. Use `kanonis-pane` inside a `kanonis-pane-window` for persistent multi-region work;
use `kanonis-detail-sidebar` for contextual detail that overlays or complements the current page. Use
`kanonis-pane-content scrollable` for pane-local scrolling; `kanonis-scrollable-pane` remains available for
legacy compositions.

Use `kanonis-status-badge` when a tone communicates state and `kanonis-badge` for neutral metadata. Use
`kanonis-data-table` for stable tabular data; `kanonis-data-grid` remains experimental until its editing and
keyboard model is finalized. Use `kanonis-page-header` for a normal page heading and `kanonis-workspace-header`
when the heading belongs above a framed pane workspace.

When a component gains a dedicated story family, update its link here; the tag itself must remain present so `npm run verify:components` can enforce coverage.

## Collapsible application sidebar

`kanonis-app-shell` automatically displays a header toggle when content is assigned to its `sidebar`
slot. It works with mouse, Enter, and Space, and stays available when navigation is hidden.
`sidebar-collapsed` (or the `sidebarCollapsed` property) controls the initial and programmatic state.
Hidden navigation is inert and excluded from the accessibility tree. Collapsing navigation that
contains focus moves focus to the toggle. On compact screens the toggle hides and restores the
bottom navigation, reclaiming its content space.

Listen for `kanonis-sidebar-toggle` with detail `{ collapsed: boolean }` to persist user preferences.
Use `collapse-sidebar-label` and `expand-sidebar-label` for localized button labels, and the
`sidebar-toggle` CSS part to customize its appearance. Keep the nested `kanonis-sidebar` expanded;
the shell owns visibility, so its toggle can always restore navigation.
