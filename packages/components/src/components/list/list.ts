import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisList extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: grid;
        gap: var(--kanonis-space-1);
        padding: var(--kanonis-space-2);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-lg);
        background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
        box-shadow: var(--kanonis-shadow-sm);
      }
      :host([divided]) ::slotted(kanonis-list-item:not(:last-child)) {
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
    `,
  ];

  @property() label = 'List';
  @property({ type: Boolean, reflect: true }) divided = false;

  protected override render() {
    return html`<div part="list" role="list" aria-label=${this.label}><slot></slot></div>`;
  }
}
