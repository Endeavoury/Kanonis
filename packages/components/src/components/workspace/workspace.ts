import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { KanonisElement } from '../../core/kanonis-element.js';


/** A viewport-bound page frame with a header above a framed pane canvas. */
export class KanonisWorkspace extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        --workspace-pane-margin: clamp(var(--kanonis-space-4), 1.25vw, var(--kanonis-space-8));
        display: grid;
        grid-template-rows: auto minmax(0, 1fr);
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
      }
      .pane-area {
        min-width: 0;
        min-height: 0;
        padding: var(--workspace-pane-margin);
      }
      ::slotted([slot='header']) {
        min-width: 0;
      }
      ::slotted(kanonis-pane-window) {
        width: 100%;
        height: 100%;
      }
      @media ${mediaCompact} {
        :host {
          --workspace-pane-margin: var(--kanonis-space-4);
        }
      }
    `,
  ];
  protected override render() {
    return html`<slot name="header"></slot>
      <div class="pane-area"><slot></slot></div>`;
  }
}
