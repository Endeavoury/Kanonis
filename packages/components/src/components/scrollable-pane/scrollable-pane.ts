import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


export const scrollablePane = css`
  :host {
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: var(--kanonis-color-border-strong) transparent;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y pinch-zoom;
  }
  :host::-webkit-scrollbar {
    width: var(--kanonis-scrollbar-size);
    height: var(--kanonis-scrollbar-size);
  }
  :host::-webkit-scrollbar-thumb {
    border: 0.1875rem solid transparent;
    border-radius: var(--kanonis-radius-round);
    background: var(--kanonis-color-border-strong);
    background-clip: padding-box;
  }
`;

export class KanonisScrollablePane extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    scrollablePane,
    css`
      :host {
        display: block;
        flex: 1 1 auto;
      }
    `,
  ];
  protected override render() {
    return html`<slot></slot>`;
  }
}
