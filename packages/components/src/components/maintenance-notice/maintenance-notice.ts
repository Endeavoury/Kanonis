import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export class KanonisMaintenanceNotice extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      .notice {
        display: flex;
        align-items: flex-start;
        gap: var(--kanonis-space-3);
        padding: var(--kanonis-space-4);
        border-color: var(--kanonis-color-warning);
        background: var(--kanonis-color-warning-soft);
      }
      .icon {
        font-size: 1.25rem;
      }
      h2 {
        margin: 0;
        font-size: var(--kanonis-font-size-lg);
      }
      p {
        margin: 0.25rem 0 0;
        color: var(--kanonis-color-text-secondary);
      }
    `,
  ];
  @property() heading = 'Scheduled maintenance';
  @property() message = 'Some features may be temporarily unavailable.';
  @property() until = '';
  protected override render() {
    return html`<aside class="notice surface" role="status">
      <span class="icon" aria-hidden="true">⚠</span>
      <div>
        <h2>${this.heading}</h2>
        <p>
          ${this.message}${this.until ? html` <strong>Expected ${this.until}.</strong>` : nothing}
        </p>
      </div>
    </aside>`;
  }
}
