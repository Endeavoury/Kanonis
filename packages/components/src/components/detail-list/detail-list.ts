import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export interface KanonisDetailItem {
  label: string;
  value: string;
}

export class KanonisDetailList extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      dl {
        display: grid;
        grid-template-columns: minmax(8rem, 0.65fr) minmax(0, 1.35fr);
        margin: 0;
      }
      dt,
      dd {
        margin: 0;
        padding: var(--kanonis-space-3) var(--kanonis-space-4);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      dt {
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      dd {
        color: var(--kanonis-color-text-primary);
      }
      @media ${mediaCompact} {
        dl {
          grid-template-columns: 1fr;
        }
        dd {
          padding-top: 0;
        }
      }
    `,
  ];
  @property({ attribute: false }) items: KanonisDetailItem[] = [];
  protected override render() {
    return html`<dl class="surface">
      ${this.items.map(
        (item) =>
          html`<dt>${item.label}</dt>
            <dd>${item.value}</dd>`,
      )}
    </dl>`;
  }
}
