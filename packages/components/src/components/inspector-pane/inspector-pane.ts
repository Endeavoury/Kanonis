import { foundationStyles, mediaExpanded } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


export class KanonisInspectorPane extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        z-index: var(--kanonis-z-pane);
        display: flex;
        flex: 0 0 var(--kanonis-pane-size, var(--kanonis-pane-inspector-width));
        flex-direction: column;
        overflow: hidden;
        border-left: 1px solid var(--kanonis-color-border-default);
        background: var(--kanonis-color-bg-surface);
        box-shadow: var(--kanonis-shadow-md);
      }
      :host([collapsed]) {
        display: none;
      }
      @media ${mediaExpanded} {
        :host {
          position: absolute;
          z-index: var(--kanonis-z-drawer);
          inset: 0 0 0 auto;
          width: min(var(--kanonis-pane-size, var(--kanonis-pane-inspector-width)), 100%);
          max-width: 100%;
          transform: translateX(0);
          transition:
            transform var(--kanonis-duration-normal) var(--kanonis-ease-standard),
            opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard),
            visibility 0s linear 0s;
        }
        :host([collapsed]) {
          display: flex;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transform: translateX(100%);
          transition-delay: 0s, 0s, var(--kanonis-duration-normal);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        :host {
          transition: none;
        }
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) collapsed = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
