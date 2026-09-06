import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisBrandMark extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        color: var(--kanonis-color-text-primary);
        font-weight: var(--kanonis-font-weight-semibold);
      }
      svg {
        width: var(--kanonis-brand-mark-size, 2rem);
        height: var(--kanonis-brand-mark-size, 2rem);
        color: var(--kanonis-color-accent-primary);
      }
    `,
  ];
  @property() name = 'Kanonis';
  @property({ type: Boolean }) symbolOnly = false;
  protected override render() {
    return html`<svg
        viewBox="0 0 32 32"
        role=${this.symbolOnly ? 'img' : 'presentation'}
        aria-label=${this.symbolOnly ? this.name : nothing}
        aria-hidden=${this.symbolOnly ? nothing : 'true'}
      >
        <path fill="currentColor" d="M5 4h8v10l8-10h9L19 16l11 12h-10l-7-9v9H5z" />
      </svg>
      ${this.symbolOnly ? nothing : html`<span>${this.name}</span>`}`;
  }
}
