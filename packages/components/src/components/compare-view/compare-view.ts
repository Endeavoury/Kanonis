import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export class KanonisCompareView extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      .compare {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        overflow: hidden;
      }
      .column {
        min-width: 0;
      }
      .heading {
        padding: var(--kanonis-space-3) var(--kanonis-space-4);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        font-weight: var(--kanonis-font-weight-semibold);
      }
      .content {
        min-height: 4rem;
        padding: var(--kanonis-space-4);
        overflow: auto;
      }
      .column + .column {
        border-left: 1px solid var(--kanonis-color-border-default);
      }
      @media ${mediaCompact} {
        .compare {
          grid-template-columns: 1fr;
        }
        .column + .column {
          border-top: 1px solid var(--kanonis-color-border-default);
          border-left: 0;
        }
      }
    `,
  ];
  @property() leftLabel = 'Before';
  @property() rightLabel = 'After';
  protected override render() {
    return html`<section class="compare surface">
      <div class="column">
        <div class="heading">${this.leftLabel}</div>
        <div class="content"><slot name="left"></slot></div>
      </div>
      <div class="column">
        <div class="heading">${this.rightLabel}</div>
        <div class="content"><slot name="right"></slot></div>
      </div>
    </section>`;
  }
}
