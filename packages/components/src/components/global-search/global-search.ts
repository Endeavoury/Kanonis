import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export class KanonisGlobalSearch extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      .search {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-2);
      }
      input {
        width: 100%;
        min-width: 12rem;
        height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-primary);
      }
      button {
        flex: 0 0 auto;
      }
    `,
  ];
  @property() query = '';
  @property() placeholder = 'Search everything';
  @property() label = 'Global search';
  private submit() {
    this.emit<{ query: string }>('kanonis-search-submit', { query: this.query });
  }
  protected override render() {
    return html`<form
      class="search"
      aria-label=${this.label}
      @submit=${(event: Event) => {
        event.preventDefault();
        this.submit();
      }}
    >
      <input
        type="search"
        .value=${this.query}
        placeholder=${this.placeholder}
        @input=${(event: Event) => (this.query = (event.target as HTMLInputElement).value)}
      /><button type="submit">Search</button>
    </form>`;
  }
}
