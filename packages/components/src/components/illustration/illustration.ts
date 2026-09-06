import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisIllustration extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-grid;
        width: var(--kanonis-illustration-size, 10rem);
        max-width: 100%;
        color: var(--kanonis-color-accent-primary);
      }
      svg {
        display: block;
        width: 100%;
        height: auto;
      }
      .soft {
        fill: var(--kanonis-color-accent-soft);
      }
      .line {
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 5;
      }
    `,
  ];
  @property() variant: 'empty' | 'search' | 'success' | 'error' = 'empty';
  @property() label = '';
  protected override render() {
    const symbol = {
      empty: html`<path class="line" d="M42 48h76v62H42zM58 34h44l10 14H48zM62 75h36" />`,
      search: html`<circle class="line" cx="72" cy="68" r="30" /><path
          class="line"
          d="m94 90 25 25"
        />`,
      success: html`<circle class="line" cx="80" cy="80" r="48" /><path
          class="line"
          d="m55 80 17 17 35-39"
        />`,
      error: html`<circle class="line" cx="80" cy="80" r="48" /><path
          class="line"
          d="m61 61 38 38m0-38L61 99"
        />`,
    }[this.variant];
    return html`<svg
      viewBox="0 0 160 160"
      role=${this.label ? 'img' : 'presentation'}
      aria-label=${this.label || nothing}
      aria-hidden=${this.label ? nothing : 'true'}
    >
      <circle class="soft" cx="80" cy="80" r="70"></circle>
      ${symbol}
    </svg>`;
  }
}
