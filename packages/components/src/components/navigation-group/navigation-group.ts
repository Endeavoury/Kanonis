import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export class KanonisNavigationGroup extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      details {
        overflow: clip;
      }
      summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--kanonis-space-2);
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
        font-weight: var(--kanonis-font-weight-semibold);
        cursor: pointer;
        list-style: none;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      .content {
        display: grid;
        gap: 0.125rem;
        padding: 0 var(--kanonis-space-1) var(--kanonis-space-2);
      }
    `,
  ];
  @property() label = 'Navigation';
  @property({ type: Boolean, reflect: true }) open = true;
  protected override render() {
    return html`<details
      .open=${this.open}
      @toggle=${(event: Event) => (this.open = (event.target as HTMLDetailsElement).open)}
    >
      <summary>${this.label}<span aria-hidden="true">⌄</span></summary>
      <div class="content"><slot></slot></div>
    </details>`;
  }
}
