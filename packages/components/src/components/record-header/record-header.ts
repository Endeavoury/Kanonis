import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export class KanonisRecordHeader extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      .header {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: var(--kanonis-space-4);
        align-items: start;
        padding: var(--kanonis-space-5) var(--kanonis-space-6);
      }
      h1 {
        margin: 0;
        font-size: var(--kanonis-font-size-2xl);
        line-height: var(--kanonis-line-height-tight);
      }
      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: var(--kanonis-space-2);
        margin-top: var(--kanonis-space-2);
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      .actions {
        display: flex;
        gap: var(--kanonis-space-2);
      }
      @media ${mediaCompact} {
        .header {
          grid-template-columns: 1fr;
          padding: var(--kanonis-space-4);
        }
      }
    `,
  ];
  @property() heading = '';
  @property() description = '';
  @property() status = '';
  protected override render() {
    return html`<header class="header surface">
      <div>
        <h1>${this.heading}</h1>
        ${this.description ? html`<p class="muted">${this.description}</p>` : nothing}
        <div class="meta">
          ${this.status ? html`<span>${this.status}</span>` : nothing}<slot name="meta"></slot>
        </div>
      </div>
      <div class="actions"><slot name="actions"></slot></div>
    </header>`;
  }
}
