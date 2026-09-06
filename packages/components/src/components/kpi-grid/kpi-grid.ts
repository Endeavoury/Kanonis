import { foundationStyles, mediaCompact, mediaMedium, mediaWide } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisKpiGrid extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(var(--columns, 4), minmax(0, 1fr));
        gap: var(--kanonis-space-4);
      }
      @media ${mediaWide} {
        :host {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      @media ${mediaMedium} {
        :host {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media ${mediaCompact} {
        :host {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];
  @property({ type: Number }) columns = 4;
  protected override updated() {
    this.style.setProperty('--columns', String(Math.max(1, Math.min(6, this.columns))));
  }
  protected override render() {
    return html`<slot></slot>`;
  }
}
