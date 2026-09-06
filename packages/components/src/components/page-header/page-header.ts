import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisPageHeader extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--kanonis-space-6);
        padding: var(--kanonis-space-2) 0 var(--kanonis-space-5);
      }
      .copy {
        min-width: 0;
      }
      h1 {
        margin: 0.375rem 0 0;
        font-size: clamp(var(--kanonis-font-size-2xl), 2.3vw, var(--kanonis-font-size-3xl));
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: var(--kanonis-letter-spacing-tight);
        line-height: var(--kanonis-line-height-tight);
      }
      p {
        max-width: 48rem;
        margin: 0.4375rem 0 0;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-md);
      }
      .actions {
        flex: 0 0 auto;
      }
      @media ${mediaCompact} {
        .header {
          display: grid;
          align-items: start;
        }
        .actions {
          width: 100%;
        }
      }
    `,
  ];
  @property() eyebrow = '';
  @property() heading = '';
  @property() description = '';
  protected override render() {
    return html`<header class="header" part="header">
      <div class="copy">
        ${this.eyebrow ? html`<p class="eyebrow">${this.eyebrow}</p>` : nothing}
        <h1 part="heading">${this.heading}</h1>
        ${this.description ? html`<p part="description">${this.description}</p>` : nothing}
      </div>
      <div class="actions" part="actions"><slot name="actions"></slot></div>
    </header>`;
  }
}
