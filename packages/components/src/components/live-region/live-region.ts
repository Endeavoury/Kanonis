import { a11yStyles, foundationStyles } from '@endeavoury/kanonis-styles';
import { html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisLiveRegion extends KanonisElement {
  static override styles: CSSResultGroup = [foundationStyles, a11yStyles];
  @property() message = '';
  @property() politeness: 'polite' | 'assertive' = 'polite';
  protected override render() {
    return html`<span
      class="visually-hidden"
      role=${this.politeness === 'assertive' ? 'alert' : 'status'}
      aria-live=${this.politeness}
      aria-atomic="true"
      >${this.message}<slot></slot
    ></span>`;
  }
}
