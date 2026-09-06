import { foundationStyles, mediaMedium } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisSidebar extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: var(--kanonis-shell-sidebar-width);
        min-width: 0;
        min-height: 0;
        height: 100%;
        overflow: hidden;
        padding: 1.125rem;
        border-right: 1px solid var(--kanonis-color-border-subtle);
        background: linear-gradient(
          180deg,
          var(--kanonis-color-bg-surface-subtle),
          color-mix(in srgb, var(--kanonis-color-bg-sunken) 78%, var(--kanonis-color-bg-surface-subtle))
        );
        box-shadow: inset -1px 0 0
          color-mix(in srgb, var(--kanonis-color-border-highlight) 52%, transparent);
      }
      :host([collapsed]) {
        display: none;
      }
      .brand {
        padding: var(--kanonis-space-2) var(--kanonis-space-2) var(--kanonis-space-8);
      }
      nav {
        display: flex;
        min-height: 0;
        flex: 1 1 auto;
        flex-direction: column;
        gap: 0.1875rem;
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: var(--kanonis-color-border-strong) transparent;
      }
      nav::-webkit-scrollbar {
        width: var(--kanonis-scrollbar-size);
        height: var(--kanonis-scrollbar-size);
      }
      nav::-webkit-scrollbar-thumb {
        border: 0.1875rem solid transparent;
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-border-strong);
        background-clip: padding-box;
      }
      .footer {
        flex: 0 0 auto;
        padding-top: var(--kanonis-space-4);
      }
      @media ${mediaMedium} {
        :host {
          width: auto;
          height: auto;
          padding: var(--kanonis-space-2) max(var(--kanonis-space-2), env(safe-area-inset-right))
            calc(var(--kanonis-space-2) + env(safe-area-inset-bottom))
            max(var(--kanonis-space-2), env(safe-area-inset-left));
          border-top: 1px solid var(--kanonis-color-border-default);
          border-right: 0;
          background: color-mix(in srgb, var(--kanonis-color-bg-surface-subtle) 94%, transparent);
          backdrop-filter: blur(16px);
        }
        .brand,
        .footer {
          display: none;
        }
        nav {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          gap: var(--kanonis-space-1);
          overflow-x: auto;
          overflow-y: hidden;
          overscroll-behavior-inline: contain;
          scrollbar-gutter: auto;
          scrollbar-width: none;
        }
        nav::-webkit-scrollbar {
          display: none;
        }
        ::slotted(kanonis-sidebar-item) {
          flex: 1;
          min-width: 0;
          max-width: 6rem;
        }
      }
    `,
  ];
  @property() label = 'Primary navigation';
  @property({ type: Boolean, reflect: true }) collapsed = false;
  protected override render() {
    return html`<div class="brand" part="brand"><slot name="brand"></slot></div>
      <nav part="navigation" aria-label=${this.label}><slot></slot></nav>
      <div class="footer" part="footer"><slot name="footer"></slot></div>`;
  }
}
