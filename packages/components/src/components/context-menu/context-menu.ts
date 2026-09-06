import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export class KanonisContextMenu extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      .menu {
        position: relative;
        display: inline-block;
      }
      .panel {
        position: absolute;
        z-index: var(--kanonis-z-popover);
        top: calc(100% + 0.25rem);
        left: 0;
        min-width: 12rem;
        padding: var(--kanonis-space-1);
      }
      .panel ::slotted(*) {
        display: block;
        width: 100%;
        text-align: left;
      }
    `,
  ];
  @property() label = 'More actions';
  @property({ type: Boolean, reflect: true }) open = false;
  protected override render() {
    return html`<div class="menu">
      <button
        aria-haspopup="menu"
        aria-expanded=${this.open}
        @click=${() => (this.open = !this.open)}
      >
        ${this.label}</button
      >${this.open ? html`<div class="panel surface" role="menu"><slot></slot></div>` : nothing}
    </div>`;
  }
}
