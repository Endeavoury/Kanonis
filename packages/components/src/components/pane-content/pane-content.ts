import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


export class KanonisPaneContent extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        display: block;
        flex: 1 1 auto;
        overflow: hidden;
      }
      :host([scrollable]) {
        overflow-x: hidden;
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: var(--kanonis-color-border-strong) transparent;
        -webkit-overflow-scrolling: touch;
        touch-action: pan-y pinch-zoom;
      }
      :host([scrollable])::-webkit-scrollbar {
        width: var(--kanonis-scrollbar-size);
        height: var(--kanonis-scrollbar-size);
      }
      :host([scrollable])::-webkit-scrollbar-thumb {
        border: 0.1875rem solid transparent;
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-border-strong);
        background-clip: padding-box;
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) scrollable = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
