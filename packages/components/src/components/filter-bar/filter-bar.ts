import {
  foundationStyles,
  mediaCompact,
  mediaExpanded,
  surfaceStyles,
} from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisFilterBar extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    css`
      :host {
        display: block;
      }
      .bar {
        display: flex;
        align-items: flex-end;
        gap: var(--kanonis-space-4);
        padding: var(--kanonis-space-5);
        background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
      }
      .fields {
        display: grid;
        grid-template-columns: repeat(var(--columns, 4), minmax(8rem, 1fr));
        gap: var(--kanonis-space-3);
        min-width: 0;
        flex: 1;
      }
      .actions {
        display: flex;
        gap: var(--kanonis-space-2);
        flex: 0 0 auto;
      }
      @media ${mediaExpanded} {
        .bar {
          display: grid;
        }
        .fields {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .actions {
          justify-content: flex-end;
        }
      }
      @media ${mediaCompact} {
        .fields {
          grid-template-columns: 1fr;
        }
        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }
    `,
  ];
  @property({ type: Number }) columns = 4;
  protected override updated() {
    this.style.setProperty('--columns', String(Math.max(1, Math.min(6, this.columns))));
  }
  protected override render() {
    return html`<section class="bar surface" part="bar" aria-label="Filters">
      <div class="fields" part="fields"><slot></slot></div>
      <div class="actions" part="actions"><slot name="actions"></slot></div>
    </section>`;
  }
}
