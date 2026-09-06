import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisTooltip extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: relative;
        display: inline-flex;
      }
      .tooltip {
        position: absolute;
        z-index: var(--kanonis-z-toast);
        left: 50%;
        bottom: calc(100% + var(--kanonis-space-2));
        width: max-content;
        max-width: 18rem;
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-sm);
        background: var(--kanonis-color-bg-elevated);
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-md);
        font-size: var(--kanonis-font-size-xs);
        line-height: var(--kanonis-line-height-normal);
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, var(--kanonis-space-1));
        transition:
          opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      :host(:hover) .tooltip,
      :host(:focus-within) .tooltip,
      :host([open]) .tooltip {
        opacity: 1;
        transform: translate(-50%, 0);
      }
      :host([placement='bottom']) .tooltip {
        top: calc(100% + var(--kanonis-space-2));
        bottom: auto;
      }
      :host([placement='start']) .tooltip {
        top: 50%;
        right: calc(100% + var(--kanonis-space-2));
        bottom: auto;
        left: auto;
        transform: translate(var(--kanonis-space-1), -50%);
      }
      :host([placement='end']) .tooltip {
        top: 50%;
        bottom: auto;
        left: calc(100% + var(--kanonis-space-2));
        transform: translate(calc(-1 * var(--kanonis-space-1)), -50%);
      }
      :host([placement='start']:hover) .tooltip,
      :host([placement='start']:focus-within) .tooltip,
      :host([placement='start'][open]) .tooltip,
      :host([placement='end']:hover) .tooltip,
      :host([placement='end']:focus-within) .tooltip,
      :host([placement='end'][open]) .tooltip {
        transform: translate(0, -50%);
      }
      @media (prefers-reduced-motion: reduce) {
        .tooltip {
          transition: none;
        }
      }
    `,
  ];

  @property() content = '';
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ reflect: true }) placement: 'top' | 'bottom' | 'start' | 'end' = 'top';

  protected override render() {
    return html`<slot></slot
      ><span class="tooltip" part="tooltip" role="tooltip">${this.content}</span>`;
  }
}
