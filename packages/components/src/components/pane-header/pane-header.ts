import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


export class KanonisPaneHeader extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        z-index: var(--kanonis-z-pane-header);
        display: block;
        flex: 0 0 auto;
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        background: var(--kanonis-color-bg-surface-subtle);
      }
      :host([sticky]) {
        position: sticky;
        top: 0;
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) sticky = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
