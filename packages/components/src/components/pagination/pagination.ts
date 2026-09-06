import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisPageChangeDetail {
  page: number;
}

export type PageToken = number | 'ellipsis-start' | 'ellipsis-end';

export class KanonisPagination extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      nav {
        display: flex;
        flex-wrap: wrap;
        gap: var(--kanonis-space-1);
        align-items: center;
      }
      button {
        display: grid;
        place-items: center;
        min-width: var(--kanonis-control-height-sm);
        height: var(--kanonis-control-height-sm);
        padding: 0 var(--kanonis-space-2);
        border: 1px solid transparent;
        border-radius: var(--kanonis-radius-sm);
        background: transparent;
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
        cursor: pointer;
      }
      button:hover:not(:disabled) {
        border-color: var(--kanonis-color-border-default);
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
      button[aria-current='page'] {
        border-color: color-mix(
          in srgb,
          var(--kanonis-color-accent-primary) 38%,
          var(--kanonis-color-border-default)
        );
        background: var(--kanonis-color-bg-selected);
        color: var(--kanonis-color-accent-hover);
        font-weight: var(--kanonis-font-weight-semibold);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.45;
      }
      .ellipsis {
        display: grid;
        place-items: center;
        width: var(--kanonis-control-height-sm);
        color: var(--kanonis-color-text-muted);
      }
    `,
  ];

  @property({ type: Number, reflect: true }) page = 1;
  @property({ type: Number, reflect: true }) pages = 1;
  @property({ type: Number, attribute: 'sibling-count' }) siblingCount = 1;
  @property() label = 'Pagination';
  @property({ attribute: 'previous-label' }) previousLabel = 'Previous page';
  @property({ attribute: 'next-label' }) nextLabel = 'Next page';
  @property({ attribute: 'page-label' }) pageLabel = 'Page';
  @property({ type: Boolean, reflect: true }) disabled = false;

  private get tokens(): PageToken[] {
    const total = Math.max(1, this.pages);
    if (total <= 7 + this.siblingCount * 2)
      return Array.from({ length: total }, (_, index) => index + 1);
    const start = Math.max(2, this.page - this.siblingCount);
    const end = Math.min(total - 1, this.page + this.siblingCount);
    return [
      1,
      ...(start > 2 ? (['ellipsis-start'] as const) : []),
      ...Array.from({ length: end - start + 1 }, (_, index) => start + index),
      ...(end < total - 1 ? (['ellipsis-end'] as const) : []),
      total,
    ];
  }

  private select(page: number) {
    const next = Math.min(Math.max(1, page), Math.max(1, this.pages));
    if (this.disabled || next === this.page) return;
    this.page = next;
    this.emit<KanonisPageChangeDetail>('kanonis-page-change', { page: next });
  }

  protected override render() {
    return html`<nav part="navigation" aria-label=${this.label}>
      <button
        type="button"
        part="previous"
        aria-label=${this.previousLabel}
        ?disabled=${this.disabled || this.page <= 1}
        @click=${() => this.select(this.page - 1)}
      >
        ‹
      </button>
      ${this.tokens.map((token) =>
        typeof token === 'number'
          ? html`<button
              type="button"
              part="page"
              aria-label=${`${this.pageLabel} ${token}`}
              aria-current=${token === this.page ? 'page' : nothing}
              ?disabled=${this.disabled}
              @click=${() => this.select(token)}
            >
              ${token}
            </button>`
          : html`<span class="ellipsis" aria-hidden="true">…</span>`,
      )}
      <button
        type="button"
        part="next"
        aria-label=${this.nextLabel}
        ?disabled=${this.disabled || this.page >= this.pages}
        @click=${() => this.select(this.page + 1)}
      >
        ›
      </button>
    </nav>`;
  }
}
