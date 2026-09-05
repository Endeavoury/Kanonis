# Component breadth benchmark

> This capability matrix records the earlier Bootstrap and Material breadth pass. For the current
> quality, foundation, component, and pattern priorities across Bootstrap, Material, GitHub Primer,
> and Atlassian, see the [external design-system review](external-design-system-review.md).

All adapters expose the same custom-element implementation. Ontarchon Studio
and Nexus consume the vanilla custom-element contract directly from Angular;
Oikonomis does the same; the public website consumes the generated browser
bundle. React wrappers map the same properties and composed events without
forking markup or styles.

## Benchmark and scope

This catalog is benchmarked against the application-facing component families in [Material Design 3](https://m3.material.io/components) and [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/components/). The objective is comparable product-building capability, not one-to-one naming or cloning either system's visual language.

Kanonis deliberately keeps one semantic, accessible Web Component API instead of combining a CSS utility framework with a separate JavaScript plugin layer. Every component uses the same tokens, light/dark behavior, event naming, registration model, and framework adapters.

## Coverage matrix

| Product capability     | Kanonis                                                                                   | Material / Bootstrap analogue                             | Status                      |
| ---------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------- |
| Actions                | `kanonis-button`, `kanonis-icon-button`, `kanonis-button-group`                                          | Buttons, icon buttons, FAB, button groups                 | Covered                     |
| Text entry             | `kanonis-input`, `kanonis-search-input`, `kanonis-textarea`                                              | Text fields, search, form controls                        | Covered                     |
| Choice controls        | `kanonis-select`, `kanonis-checkbox`, `kanonis-switch`, `kanonis-radio-group`, `kanonis-radio`, `kanonis-range`         | Select, checkbox, switch, radio, slider/range             | Covered                     |
| Form composition       | `kanonis-form-field`, validation APIs, native form association                                 | Form field, input group, validation, layout               | Covered through composition |
| Navigation             | `kanonis-sidebar`, `kanonis-sidebar-item`, `kanonis-tabs`, `kanonis-breadcrumbs`, `kanonis-pagination`             | Navigation rail/drawer, tabs, breadcrumb, pagination      | Covered                     |
| Menus and lists        | `kanonis-menu`, `kanonis-menu-item`, `kanonis-list`, `kanonis-list-item`                                      | Menus/dropdowns and lists/list groups                     | Covered                     |
| Surfaces and summaries | `kanonis-card`, `kanonis-panel`, `kanonis-metric`, `kanonis-kpi-grid`                                         | Cards and elevated/outlined containers                    | Covered                     |
| Status and identity    | `kanonis-badge`, `kanonis-status-badge`, `kanonis-avatar`                                                | Badges/chips and avatars                                  | Covered                     |
| Feedback               | `kanonis-alert`, `kanonis-toast`, `kanonis-toast-region`, `kanonis-progress`, `kanonis-skeleton`, state components | Alerts/snackbars/toasts, progress, placeholders, spinners | Covered                     |
| Expand/collapse        | `kanonis-disclosure`                                                                           | Accordion/collapse                                        | Covered                     |
| Overlays               | `kanonis-dialog`, `kanonis-drawer`                                                                  | Dialog/modal and drawer/offcanvas                         | Covered                     |
| Supplemental help      | `kanonis-tooltip`                                                                              | Tooltip                                                   | Covered                     |
| File input             | `kanonis-drop-zone`                                                                            | File input plus application drop behavior                 | Covered                     |
| Data display           | `kanonis-data-table`, `kanonis-list`, layout primitives                                             | Tables and list groups                                    | Covered                     |
| Application structure  | `kanonis-app-shell`, `kanonis-page-header`, `kanonis-filter-bar`, layout primitives                      | Navbar/sidebar, containers, grid, stacks                  | Covered                     |

The complete package currently registers 122 custom elements. Storybook is required to contain every registered element, so the catalog cannot silently grow without a reviewable example. Presence is a discoverability check; it is not by itself evidence that every state is production-ready.

## Deliberate differences

- Carousel and scrollspy are content-site patterns, not current financial-product primitives. They remain outside the core package.
- Popovers are represented by the composable menu, tooltip, dialog, and drawer primitives. A generic unconstrained popover will only be added with a concrete accessible interaction model.
- CSS utilities are not reproduced wholesale. `kanonis-stack`, `kanonis-inline`, `kanonis-grid`, and `kanonis-container` provide stable layout contracts without leaking hundreds of global classes.
- Date/time pickers, autocomplete/combobox, and the richer data-grid layer are present, but they still
  need deeper internationalization, interaction, large-data, and accessibility evidence before being
  treated as mature solely on the strength of component parity.
- Components retain the Kanonis visual language. Material and Bootstrap are capability benchmarks, not styling dependencies.

## Catalog quality contract

New components are not considered delivered until they have:

1. semantic light and dark theme behavior;
2. keyboard and screen-reader behavior appropriate to the interaction pattern;
3. typed composed custom events;
4. full and selective registration exports;
5. React adapter coverage and native Angular compatibility;
6. Storybook examples, automated behavior tests, and representative axe coverage;
7. bundle-budget participation.

## Next maturity tier

Autocomplete/combobox, date and time inputs, and a richer data-grid layer have since been delivered.
The next tier is catalog maturity rather than breadth: a segmented control and overflow action bar
remain candidates, while token integrity, visual regression, component-level accessibility evidence,
RTL, forced-colors, high contrast, and task-pattern guidance take priority. See the
[external review](external-design-system-review.md) for the ordered backlog.
