import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisToastRegion extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: fixed;
        z-index: var(--kanonis-z-toast);
        top: var(--kanonis-space-4);
        right: var(--kanonis-space-4);
        display: grid;
        gap: var(--kanonis-space-3);
        max-height: calc(100dvh - 2 * var(--kanonis-space-4));
        overflow: auto;
        pointer-events: none;
      }
      ::slotted(kanonis-toast) {
        pointer-events: auto;
      }
      :host([position='top-start']) {
        right: auto;
        left: var(--kanonis-space-4);
      }
      :host([position='bottom-end']) {
        top: auto;
        bottom: var(--kanonis-space-4);
      }
      :host([position='bottom-start']) {
        top: auto;
        right: auto;
        bottom: var(--kanonis-space-4);
        left: var(--kanonis-space-4);
      }
      @media ${mediaCompact} {
        :host,
        :host([position]) {
          top: var(--kanonis-space-2);
          right: var(--kanonis-space-2);
          bottom: auto;
          left: var(--kanonis-space-2);
        }
      }
    `,
  ];

  @property({ reflect: true }) position: 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' =
    'top-end';
  @property() label = 'Notifications';

  protected override render() {
    return html`<section part="region" aria-label=${this.label}><slot></slot></section>`;
  }
}
