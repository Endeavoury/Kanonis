import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export class KanonisFormSection extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      section {
        padding: var(--kanonis-space-5);
      }
      header {
        display: flex;
        justify-content: space-between;
        gap: var(--kanonis-space-3);
        margin-bottom: var(--kanonis-space-4);
      }
      h2 {
        margin: 0;
        font-size: var(--kanonis-font-size-lg);
      }
      .description {
        margin: 0.25rem 0 0;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      .fields {
        display: grid;
        grid-template-columns: repeat(var(--columns, 2), minmax(0, 1fr));
        gap: var(--kanonis-space-4);
      }
      @media ${mediaCompact} {
        .fields {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];
  @property() heading = '';
  @property() description = '';
  @property({ type: Number }) columns = 2;
  protected override updated() {
    this.style.setProperty('--columns', String(Math.max(1, Math.min(4, this.columns))));
  }
  protected override render() {
    return html`<section class="surface">
      <header>
        <div>
          <h2>${this.heading}</h2>
          ${this.description ? html`<p class="description">${this.description}</p>` : nothing}
        </div>
        <slot name="actions"></slot>
      </header>
      <div class="fields"><slot></slot></div>
    </section>`;
  }
}
