import { foundationStyles, mediaMedium } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisActivateDetail {
  value: string;
}

export class KanonisSidebarItem extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      .item {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.6875rem;
        width: 100%;
        min-height: 2.625rem;
        padding: 0 0.8125rem;
        border: 1px solid transparent;
        border-radius: var(--kanonis-radius-md);
        background: transparent;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-md);
        font-weight: var(--kanonis-font-weight-medium);
        text-decoration: none;
        cursor: pointer;
        text-align: left;
        transition:
          background var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          border-color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      .item::before {
        content: '';
        position: absolute;
        left: -1px;
        top: 0.5rem;
        bottom: 0.5rem;
        width: 2px;
        border-radius: 2px;
        background: transparent;
      }
      .item:hover {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
        transform: translateX(2px);
      }
      :host([active]) .item {
        background: linear-gradient(
          90deg,
          var(--kanonis-color-bg-selected),
          color-mix(in srgb, var(--kanonis-color-bg-selected) 58%, transparent)
        );
        border-color: color-mix(
          in srgb,
          var(--kanonis-color-accent-primary) 18%,
          var(--kanonis-color-border-default)
        );
        color: var(--kanonis-color-text-primary);
        box-shadow: inset 0 1px 0 var(--kanonis-color-border-highlight);
      }
      :host([active]) .item::before {
        background: var(--kanonis-color-accent-primary);
      }
      .icon {
        display: inline-flex;
        width: 1.125rem;
        height: 1.125rem;
        flex: 0 0 auto;
        color: var(--kanonis-color-text-muted);
      }
      :host([active]) .icon {
        color: var(--kanonis-color-accent-hover);
      }
      .label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      @media ${mediaMedium} {
        .item {
          min-height: 3.25rem;
          flex-direction: column;
          justify-content: center;
          gap: var(--kanonis-space-1);
          padding: var(--kanonis-space-1);
          font-size: 0.625rem;
        }
        .item::before {
          inset: auto 0.75rem 0;
          height: 2px;
          width: auto;
        }
      }
    `,
  ];
  @property() value = '';
  @property() href = '';
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean }) disabled = false;
  private activate(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.emit<KanonisActivateDetail>('kanonis-activate', { value: this.value });
  }
  protected override render() {
    const content = html`<span class="icon"><slot name="icon"></slot></span
      ><span class="label"><slot></slot></span>`;
    return this.href
      ? html`<a
          class="item"
          part="item"
          href=${this.href}
          aria-current=${this.active ? 'page' : nothing}
          aria-disabled=${this.disabled ? 'true' : nothing}
          @click=${this.activate}
          >${content}</a
        >`
      : html`<button
          class="item"
          part="item"
          type="button"
          ?disabled=${this.disabled}
          aria-current=${this.active ? 'page' : nothing}
          @click=${this.activate}
        >
          ${content}
        </button>`;
  }
}
