import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisProgress } from '../progress/progress.js';


export class KanonisJobStatus extends KanonisProgress {
  @property() status = 'Processing';
  protected override render() {
    return html`<div aria-label=${this.status}>
      <strong>${this.status}</strong>${super.render()}
    </div>`;
  }
}
