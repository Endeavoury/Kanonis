import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { enterpriseSurface } from '../enterprise/shared.js';


export class KanonisViewToolbar extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    enterpriseSurface,
    css`
      .surface {
        flex-wrap: wrap;
      }
      .query {
        min-width: 12rem;
        flex: 1 1 16rem;
      }
      input {
        width: 100%;
        min-height: var(--kanonis-control-height-sm);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-primary);
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--kanonis-space-2);
      }
    `,
  ];
  @property() query = '';
  @property() placeholder = 'Search records';
  @property() label = 'View toolbar';
  private updateQuery(event: Event) {
    this.query = (event.target as HTMLInputElement).value;
    this.emit<{ query: string }>('kanonis-query-change', { query: this.query });
  }
  protected override render() {
    return html`<section class="surface" aria-label=${this.label}>
      <label class="query"
        ><span class="kanonis-visually-hidden">${this.placeholder}</span
        ><input
          type="search"
          .value=${this.query}
          placeholder=${this.placeholder}
          @input=${this.updateQuery}
      /></label>
      <div class="actions"><slot></slot><slot name="actions"></slot></div>
    </section>`;
  }
}
