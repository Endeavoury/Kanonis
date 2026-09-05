# Component Gap Analysis and Roadmap

## Delivery status

The September 2026 cross-product design-system review completed the maturity backlog and a broader Material/Bootstrap capability pass. The system now includes 122 registered elements spanning actions, forms, navigation, overlays, feedback, data display, application structure, layout, and enterprise workflows. Every delivered element has Web Component registration, React adapters, Storybook coverage, and automated quality gates. Registration and story presence establish discoverability; readiness is assigned only when the evidence in the [component status manifest](component-status.json) satisfies the maturity policy.

## Gap analysis

| Current UI pattern             |                       Usage | Proposed component/pattern                                                 | Priority  | Notes                                                     |
| ------------------------------ | --------------------------: | -------------------------------------------------------------------------- | --------- | --------------------------------------------------------- |
| Primary/secondary/text actions |                   Very high | `kanonis-button`, `kanonis-icon-button`, `kanonis-button-group`                           | P0        | Loading, disabled, destructive, compact                   |
| Labeled fields and validation  |                   Very high | `kanonis-form-field`, `kanonis-input`, `kanonis-select`, `kanonis-checkbox`, `kanonis-search-input` | P0        | Form-associated controls                                  |
| KPI cards and summaries        |                   Very high | `kanonis-metric`, `kanonis-kpi-grid`                                                 | P0        | Currency/value-agnostic slots                             |
| Content surfaces               |                   Very high | `kanonis-card`, `kanonis-panel`                                                      | P0        | Stable header/footer parts and slots                      |
| Dense result tables            |                   Very high | `kanonis-data-table`                                                            | P0        | Property-based rows/columns, sort/select events, overflow |
| Status/category labels         |                        High | `kanonis-badge`, `kanonis-status-badge`                                              | P0        | Semantic tones, not domain statuses                       |
| App navigation                 |                        High | `kanonis-app-shell`, `kanonis-sidebar`, `kanonis-sidebar-item`                            | P0        | Responsive desktop/mobile composition                     |
| Page title/actions             |                        High | `kanonis-page-header`                                                           | P0        | Eyebrow, description, action slot                         |
| Filter forms/toolbars          |                        High | `kanonis-filter-bar`                                                            | P0        | Composition, responsive collapse                          |
| Feedback and no-data states    |                        High | `kanonis-alert`, `kanonis-loading-state`, `kanonis-empty-state`                           | P0        | Live-region behavior where appropriate                    |
| User/profile identity          |                      Medium | `kanonis-avatar`                                                                | P0        | Initials/image/fallback                                   |
| Layout composition             |                        High | `kanonis-stack`, `kanonis-inline`, `kanonis-grid`, `kanonis-container`                         | P0        | Attribute-driven, no utility leakage                      |
| Period/category selection      |                      Medium | `kanonis-tabs`                                                                  | Delivered | Roving tabindex and keyboard arrows                       |
| Expandable detail              |                      Medium | `kanonis-disclosure`                                                            | Delivered | Native details semantics                                  |
| File import                    |                      Medium | `kanonis-drop-zone`                                                             | Delivered | Native file input, drag state, validation events          |
| Property detail groups         |                      Medium | `kanonis-description-list`, `kanonis-key-value`                                      | P1        | Raw transaction/account detail                            |
| Progress indicators            |                      Medium | `kanonis-progress`, `kanonis-skeleton`                                               | Delivered | Determinate/indeterminate/reduced motion                  |
| Temporary messages             |                   Low today | `kanonis-toast`, `kanonis-toast-region`                                              | Delivered | Timed/persistent behavior and live-region policy          |
| Confirmation/modal detail      |             Not present yet | `kanonis-dialog`, `kanonis-drawer`                                                   | Delivered | Native dialog/top layer, focus return, dismissal reasons  |
| Menus                          |        Mobile overflow only | `kanonis-menu`, `kanonis-menu-item`                                                  | Delivered | Roving focus and typed selection                          |
| Pagination                     | API supports it, UI minimal | `kanonis-pagination`                                                            | Delivered | Ellipsis and controlled page events                       |
| Tooltips                       |                         Low | `kanonis-tooltip`                                                               | Delivered | Supplemental only, never sole label                       |
| Radio/switch/textarea/range    |           Low in current UI | `kanonis-radio-group`, `kanonis-radio`, `kanonis-switch`, `kanonis-textarea`, `kanonis-range`       | Delivered | Form-associated generic controls                          |
| Breadcrumbs and lists          |                 Not present | `kanonis-breadcrumbs`, `kanonis-breadcrumb`, `kanonis-list`, `kanonis-list-item`               | Delivered | Hierarchy and flexible collections                        |
| Hierarchical system navigation |              Ontarchon high | `kanonis-tree`, `kanonis-tree-item`                                                  | Delivered | Expandable, keyboard-operable Node navigation             |
| Structured semantic metadata   |              Ontarchon high | `kanonis-description-list`, `kanonis-code-block`                                     | Delivered | URI/schema properties and readable technical artefacts    |
| Light/dark preference          |                        High | `kanonis-theme-toggle`                                                          | Delivered | Persistent document theme with typed change event         |

## Delivery roadmap

### P0 — Current core workflows

Foundations, layouts, actions, current form controls, badges/avatar, surfaces/metrics, feedback states, data table, application shell/navigation, page header, filter bar, and KPI grid. P0 includes Storybook dashboard, monthly overview, ledger, and settings/import compositions.

### P1 — Important secondary workflows (delivered)

Tabs, disclosure, drop zone, progress/skeleton, toast, dialog/drawer, menu, pagination, breadcrumbs, and lists. Description lists remain composable from existing layout and typography primitives until a product screen requires a dedicated API.

### P2 — Generic expansion (delivered; maturity work supersedes it)

Tooltip, textarea, radio group, switch, range, breadcrumbs, autocomplete/combobox, date/time inputs,
and richer data-grid behavior are delivered. A segmented control and overflow action bar remain useful
candidates, but formal component maturity, token integrity, responsive contracts, visual regression,
RTL, forced-colors, and high-contrast validation now take priority.
