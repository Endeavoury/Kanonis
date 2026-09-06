import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup, type PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisDetailSidebar extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: fixed;
        z-index: var(--kanonis-z-modal);
        inset: 0;
        display: block;
        visibility: hidden;
        pointer-events: none;
        transition: visibility 0s linear var(--kanonis-duration-normal);
      }
      :host([open]) {
        visibility: visible;
        transition-delay: 0s;
      }
      :host([open][modal]) {
        pointer-events: auto;
      }
      .backdrop {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        border: 0;
        background: color-mix(in srgb, var(--kanonis-color-bg-sunken) 38%, transparent);
        opacity: 0;
        pointer-events: none;
        cursor: default;
        transition: opacity var(--kanonis-duration-normal) var(--kanonis-ease-standard);
      }
      :host([open][modal]) .backdrop {
        opacity: 1;
        pointer-events: auto;
      }
      aside {
        position: absolute;
        inset: 0 0 0 auto;
        display: grid;
        grid-template-rows: auto auto minmax(0, 1fr) auto;
        width: min(var(--kanonis-detail-sidebar-width, 30rem), 100%);
        border-left: 1px solid var(--kanonis-color-border-default);
        outline: 0;
        background: var(--kanonis-color-bg-surface);
        box-shadow: var(--kanonis-shadow-lg);
        color: var(--kanonis-color-text-primary);
        pointer-events: auto;
        transform: translateX(100%);
        transition: transform var(--kanonis-duration-normal) var(--kanonis-ease-standard);
      }
      :host([open]) aside {
        transform: translateX(0);
      }
      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--kanonis-space-4);
        padding: var(--kanonis-space-6);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      h2 {
        margin: 0;
        font-size: var(--kanonis-font-size-xl);
        line-height: var(--kanonis-line-height-tight);
      }
      .close {
        display: grid;
        place-items: center;
        flex: 0 0 auto;
        width: 2.25rem;
        height: 2.25rem;
        padding: 0;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-muted);
        font: inherit;
        font-size: 1.375rem;
        line-height: 1;
        cursor: pointer;
      }
      .close:hover {
        border-color: var(--kanonis-color-border-strong);
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
      .summary {
        padding: var(--kanonis-space-5) var(--kanonis-space-6);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        background: var(--kanonis-color-bg-surface-subtle);
      }
      .content {
        min-height: 0;
        padding: var(--kanonis-space-5) var(--kanonis-space-6);
        overflow: auto;
        overscroll-behavior: contain;
        scrollbar-gutter: stable;
      }
      footer {
        padding: var(--kanonis-space-4) var(--kanonis-space-6);
        border-top: 1px solid var(--kanonis-color-border-subtle);
        background: var(--kanonis-color-bg-surface-subtle);
      }
      @media ${mediaCompact} {
        aside {
          width: 100%;
        }
        header,
        .summary,
        .content,
        footer {
          padding-inline: var(--kanonis-space-4);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        :host,
        .backdrop,
        aside {
          transition: none;
        }
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) modal = false;
  @property() heading = 'Details';
  @property({ attribute: 'close-label' }) closeLabel = 'Close details';
  @query('aside') private panel!: HTMLElement;
  private returnFocus: HTMLElement | null = null;

  protected override updated(changed: PropertyValues<this>) {
    if (!changed.has('open')) return;
    if (this.open) {
      this.returnFocus =
        this.ownerDocument.activeElement instanceof HTMLElement
          ? this.ownerDocument.activeElement
          : null;
      this.panel.focus({ preventScroll: true });
    } else {
      this.returnFocus?.focus({ preventScroll: true });
      this.returnFocus = null;
    }
  }

  private close() {
    this.emit<void>('kanonis-close', undefined);
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key !== 'Tab' || !this.modal) return;
    const selector =
      'button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"]),kanonis-button:not([disabled]),kanonis-icon-button:not([disabled]),kanonis-input:not([disabled]),kanonis-select:not([disabled]),kanonis-checkbox:not([disabled])';
    const focusable = [
      ...this.shadowRoot!.querySelectorAll<HTMLElement>('.close'),
      ...this.querySelectorAll<HTMLElement>(selector),
    ].filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
    if (!focusable.length) {
      event.preventDefault();
      this.panel.focus();
      return;
    }
    const active =
      this.shadowRoot?.activeElement instanceof HTMLElement
        ? this.shadowRoot.activeElement
        : this.ownerDocument.activeElement;
    const index = focusable.indexOf(active as HTMLElement);
    if (
      index < 0 ||
      (event.shiftKey && index === 0) ||
      (!event.shiftKey && index === focusable.length - 1)
    ) {
      event.preventDefault();
      (event.shiftKey ? focusable.at(-1) : focusable[0])?.focus();
    }
  }

  protected override render() {
    return html`<div aria-hidden=${this.open ? 'false' : 'true'} @keydown=${this.handleKeydown}>
      <button
        class="backdrop"
        type="button"
        tabindex="-1"
        aria-label=${this.closeLabel}
        @click=${this.close}
      ></button>
      <aside
        part="panel"
        role=${this.modal ? 'dialog' : 'complementary'}
        aria-modal=${this.modal ? 'true' : nothing}
        aria-labelledby=${this.heading ? 'detail-sidebar-title' : nothing}
        aria-label=${this.heading ? nothing : 'Details'}
        tabindex="-1"
      >
        <header part="header">
          <h2 id="detail-sidebar-title" part="heading">${this.heading}</h2>
          <button
            class="close"
            part="close-button"
            type="button"
            aria-label=${this.closeLabel}
            @click=${this.close}
          >
            ×
          </button>
        </header>
        <section class="summary" part="summary"><slot name="summary"></slot></section>
        <section class="content" part="content"><slot></slot></section>
        <footer part="footer"><slot name="footer"></slot></footer>
      </aside>
    </div>`;
  }
}
