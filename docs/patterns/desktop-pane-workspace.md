# Desktop pane workspace

Use `ds-workspace` when a page has a persistent application navigation and a dense desktop work
surface. Put `ds-workspace-header` in the `header` slot and keep the pane canvas in
`ds-pane-window`. Breadcrumbs, the page heading, status, and actions therefore remain above the
framed pane window.

```html
<ds-workspace>
  <ds-workspace-header slot="header" heading="Project Alpha">
    <ds-breadcrumbs slot="breadcrumb" label="Project location">
      <ds-breadcrumb current>Customers / Acme</ds-breadcrumb>
    </ds-breadcrumbs>
    <ds-status-badge slot="status" tone="success">Synced</ds-status-badge>
    <ds-button slot="actions">Share</ds-button>
  </ds-workspace-header>
  <ds-pane-window aria-label="Project panes">
    <ds-pane>…</ds-pane>
    <ds-pane-stack split="40/60"><ds-pane>…</ds-pane><ds-pane>…</ds-pane></ds-pane-stack>
  </ds-pane-window>
</ds-workspace>
```

`ds-workspace` owns the viewport-bound grid and equal pane margin. `ds-pane-window` owns horizontal
overflow and keeps its frame inside the remaining height. Its panes distribute available width
between 360px and 640px, then grow the track and scroll only when those minimum widths cannot fit.
`ds-pane-stack` fills its column and defaults to a 50/50 vertical split; use `split="40/60"`,
`60/40`, `30/70`, or `70/30` for other ratios. Pane bodies should use `ds-pane-content scrollable`
so vertical overflow stays local to that pane.

The layout is designed for available viewport widths around 1440px, 1920px, 2560px, and 3440px.
It does not use physical monitor sizes as breakpoints. The document, navigation, and workspace
header remain fixed while only the pane window can scroll horizontally.
