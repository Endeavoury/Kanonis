# Component usage

## Registration and imports

The full entry point registers all custom elements:

```ts
import '@endeavoury/kanonis';
import '@endeavoury/kanonis/styles.css';
```

Group entry points (`button`, `forms`, `secondary-forms`, `display`, `feedback`, `interaction`, `overlays`, `upload`, `data-table`, `layout`, `navigation`, `navigation-extras`, and `patterns`) register related elements. The broad `forms` and `navigation` entries include their secondary components; the narrower entries support fine-grained loading. `@endeavoury/kanonis/classes` exports the classes without registering them, which is useful for controlled registries and testing.

## Attributes, properties, slots, and events

Use attributes for simple serializable values and properties for structured values:

```ts
import '@endeavoury/kanonis/data-table';

const table = document.querySelector('kanonis-data-table');
table.columns = [{ key: 'name', label: 'Name', sortable: true }];
table.rows = [{ id: '1', name: 'Main account' }];
table.addEventListener('kanonis-sort', (event) => console.log(event.detail));
```

All design-system custom events use the `kanonis-` prefix, bubble, cross Shadow DOM boundaries (`composed: true`), and expose a typed `detail`. Native slots are preferred for composable content. Stable styling hooks are selectively exposed through `::part`; internal DOM is not an API.

## Forms

`kanonis-input`, `kanonis-search-input`, `kanonis-textarea`, `kanonis-select`, `kanonis-checkbox`, `kanonis-switch`, `kanonis-range`, and `kanonis-radio-group` use `ElementInternals` and participate in native forms. They support `name`, value/checked state, disabled state, required validation where appropriate, reset, labels, keyboard interaction, and `FormData` submission.

```html
<form id="profile">
  <kanonis-input label="Name" name="name" required></kanonis-input>
  <kanonis-checkbox name="active" value="yes">Active</kanonis-checkbox>
</form>
```

`kanonis-drop-zone` accepts files through its native picker or drag and drop. It emits accepted files through `kanonis-files` and rejected files through `kanonis-file-reject` with a `type` or `limit` reason. File processing and uploads remain application concerns.

```html
<kanonis-drop-zone
  label="Choose or drop statements"
  hint="CAMT XML or ZIP"
  accept=".xml,.zip,application/xml,application/zip"
  max-files="10"
  multiple
></kanonis-drop-zone>
```

## Theme and interaction

`kanonis-theme-toggle` writes `data-ds-theme` to the document root. Set `storage-key` to persist the preference. Applications should still apply the stored value in the document head to avoid a theme flash before components load.

```html
<kanonis-theme-toggle theme="dark" storage-key="product-theme"></kanonis-theme-toggle>
```

Tabs use a parent value and slotted panels. Arrow keys, Home, and End move selection while disabled tabs are skipped.

```html
<kanonis-tabs label="Account views" value="activity">
  <kanonis-tab value="activity" label="Activity">Recent activity</kanonis-tab>
  <kanonis-tab value="details" label="Details">Account details</kanonis-tab>
</kanonis-tabs>
```

Use `kanonis-disclosure` for expandable inline content, `kanonis-progress` for task progress, and `kanonis-skeleton` for layout-preserving loading placeholders.

## Overlays and transient feedback

`kanonis-dialog` uses the native dialog top layer and returns focus when it closes. `kanonis-drawer` shares the same API with a start/end side-panel presentation. Both emit `kanonis-close` with a `button`, `escape`, `backdrop`, or `programmatic` reason.

```html
<kanonis-dialog heading="Delete connection?" description="This cannot be undone.">
  Imported records remain available.
  <kanonis-inline slot="footer">
    <kanonis-button variant="secondary">Cancel</kanonis-button>
    <kanonis-button variant="danger">Delete</kanonis-button>
  </kanonis-inline>
</kanonis-dialog>
```

Use `kanonis-menu`/`kanonis-menu-item` for action menus, `kanonis-tooltip` only for supplemental information, and `kanonis-toast-region`/`kanonis-toast` for transient notifications. Set a toast duration of `0` for persistent messages.

## Navigation and collections

Breadcrumbs, pagination, and list items use controlled values and typed events. Pagination emits `kanonis-page-change`; interactive list items emit `kanonis-list-activate`.

```html
<kanonis-breadcrumbs label="Current location">
  <kanonis-breadcrumb href="/accounts">Accounts</kanonis-breadcrumb>
  <kanonis-breadcrumb current>Daily account</kanonis-breadcrumb>
</kanonis-breadcrumbs>
<kanonis-pagination page="3" pages="18"></kanonis-pagination>
```

## React

The optional React package wraps the existing element classes with `@lit/react`. It adds JSX property and typed custom-event ergonomics; it does not render a second implementation.

```tsx
import { Button, Input } from '@endeavoury/kanonis-react';

export function Editor() {
  return <Input label="Name" onDsChange={(event) => console.log(event.detail.value)} />;
}
```

## Angular

Import the design-system registration once and add the exported schema to a standalone component or NgModule that uses the elements:

```ts
import '@endeavoury/kanonis';
import { KANONIS_CUSTOM_ELEMENTS_SCHEMA } from '@endeavoury/kanonis-angular';

@Component({
  standalone: true,
  schemas: [KANONIS_CUSTOM_ELEMENTS_SCHEMA],
  template: `<kanonis-button (kanonis-activate)="handle($event)">Save</kanonis-button>`,
})
export class ExampleComponent {}
```

Use property binding for objects: `<kanonis-data-table [columns]="columns" [rows]="rows" />`. Native forms work directly; Angular form-control adapters can be introduced later as thin ControlValueAccessor directives without moving behavior or styles out of the Web Components.

## Vanilla JavaScript

No framework is required. See `examples/vanilla`; the React and Angular directories provide buildable equivalents.
