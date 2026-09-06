import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property, query, queryAssignedElements } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { KanonisMenuItem } from '../menu-item/menu-item.js';


export interface KanonisMenuToggleDetail {
  open: boolean;
}

export class KanonisMenu extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: relative;
        display: inline-block;
      }
      .trigger {
        display: inline-flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        min-height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-control);
        cursor: pointer;
      }
      .trigger:hover {
        border-color: var(--kanonis-color-border-strong);
        background: var(--kanonis-color-bg-hover);
      }
      .surface {
        position: absolute;
        z-index: var(--kanonis-z-overlay);
        top: calc(100% + var(--kanonis-space-2));
        right: 0;
        display: grid;
        gap: var(--kanonis-space-1);
        min-width: var(--kanonis-menu-min-width, 12rem);
        padding: var(--kanonis-space-2);
        border: 1px solid var(--kanonis-color-border-default);
        border-top-color: var(--kanonis-color-border-highlight);
        border-radius: var(--kanonis-radius-lg);
        background: var(--kanonis-gradient-elevated, var(--kanonis-color-bg-elevated));
        box-shadow: var(--kanonis-shadow-lg);
      }
      :host([placement='start']) .surface {
        right: auto;
        left: 0;
      }
      .surface[hidden] {
        display: none;
      }
      .chevron {
        color: var(--kanonis-color-text-muted);
        transition: transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      :host([open]) .chevron {
        transform: rotate(180deg);
      }
    `,
  ];

  @query('.trigger') private trigger!: HTMLButtonElement;
  @queryAssignedElements({ selector: 'kanonis-menu-item' }) private items!: KanonisMenuItem[];
  @property({ type: Boolean, reflect: true }) open = false;
  @property() label = 'Menu';
  @property({ reflect: true }) placement: 'start' | 'end' = 'end';

  override connectedCallback() {
    super.connectedCallback();
    this.ownerDocument.addEventListener('pointerdown', this.outside);
    this.addEventListener('kanonis-menu-select', this.selected);
  }

  override disconnectedCallback() {
    this.ownerDocument.removeEventListener('pointerdown', this.outside);
    this.removeEventListener('kanonis-menu-select', this.selected);
    super.disconnectedCallback();
  }

  private readonly outside = (event: Event) => {
    if (this.open && !event.composedPath().includes(this)) this.setOpen(false);
  };

  private setOpen(open: boolean, focusItem = false) {
    if (this.open === open) return;
    this.open = open;
    this.emit<KanonisMenuToggleDetail>('kanonis-menu-toggle', { open });
    if (open && focusItem)
      void this.updateComplete.then(() => this.items.find((item) => !item.disabled)?.focus());
    if (!open) this.trigger?.focus();
  }

  private keydown(event: KeyboardEvent) {
    const enabled = this.items.filter((item) => !item.disabled);
    if (event.key === 'Escape') {
      event.preventDefault();
      this.setOpen(false);
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key) || !enabled.length) return;
    event.preventDefault();
    const current = enabled.indexOf(this.ownerDocument.activeElement as KanonisMenuItem);
    const index =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? enabled.length - 1
          : event.key === 'ArrowDown'
            ? (current + 1) % enabled.length
            : (current - 1 + enabled.length) % enabled.length;
    enabled[index]?.focus();
  }

  private readonly selected = () => {
    this.setOpen(false);
  };

  protected override render() {
    return html`<button
        class="trigger"
        part="trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded=${String(this.open)}
        aria-label=${this.label}
        @click=${() => this.setOpen(!this.open, !this.open)}
        @keydown=${(event: KeyboardEvent) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            this.setOpen(true, true);
          }
        }}
      >
        <slot name="trigger">${this.label}</slot><span class="chevron" aria-hidden="true">⌄</span>
      </button>
      <div
        class="surface"
        part="menu"
        role="menu"
        aria-label=${this.label}
        ?hidden=${!this.open}
        @keydown=${this.keydown}
      >
        <slot></slot>
      </div>`;
  }
}
