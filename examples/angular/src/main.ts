import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import '@endeavoury/kanonis';
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<kanonis-container size="narrow"
    ><kanonis-stack gap="6"
      ><kanonis-page-header
        eyebrow="Angular example"
        heading="Native custom elements"
        description="Angular property and event bindings target the same Web Components."
      ></kanonis-page-header
      ><kanonis-metric
        label="Current value"
        [value]="name()"
        tone="accent"
        detail="Updated through kanonis-input"
      ></kanonis-metric
      ><kanonis-input
        label="Display name"
        [value]="name()"
        (kanonis-input)="name.set($any($event).detail.value)"
      ></kanonis-input
      ><kanonis-checkbox [checked]="enabled()" (kanonis-change)="enabled.set($any($event).detail.checked)"
        >Enabled</kanonis-checkbox
      ><kanonis-button (click)="name.set('Saved consumer')">Save</kanonis-button
      ><kanonis-alert tone="success" heading="Shared implementation"
        >No Angular component owns visual behavior.</kanonis-alert
      ></kanonis-stack
    ></kanonis-container
  >`,
})
class App {
  readonly name = signal('Angular consumer');
  readonly enabled = signal(true);
}
bootstrapApplication(App).catch(console.error);
