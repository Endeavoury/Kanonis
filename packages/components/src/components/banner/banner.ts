import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export class KanonisBanner extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      .banner {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--kanonis-space-4);
        padding: var(--kanonis-space-3) var(--kanonis-space-4);
      }
      .copy {
        min-width: 0;
      }
      .close {
        flex: 0 0 auto;
        border: 0;
        background: transparent;
        font-size: 1.2rem;
      }
    `,
  ];
  @property() heading = '';
  @property({ type: Boolean, reflect: true }) dismissible = false;
  private close() {
    this.emit<void>('kanonis-dismiss', undefined);
  }
  protected override render() {
    return html`<aside class="banner surface" role="status">
      <div class="copy">
        ${this.heading ? html`<strong>${this.heading}</strong>` : nothing}
        <div><slot></slot></div>
      </div>
      ${this.dismissible ? html`<button class="close" type="button" aria-label="Dismiss" @click=${this.close}>×</button>` : nothing}
    </aside>`;
  }
}
