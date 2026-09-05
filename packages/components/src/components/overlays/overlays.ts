import { css, html, nothing, type CSSResultGroup, type PropertyValues } from 'lit';
import { property, query, queryAssignedElements } from 'lit/decorators.js';
import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { KanonisElement } from '../../core/kanonis-element.js';

export type KanonisDismissReason = 'button' | 'escape' | 'backdrop' | 'programmatic';

export interface KanonisDismissDetail {
  reason: KanonisDismissReason;
}

export class KanonisDialog extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: contents;
      }
      dialog {
        width: min(calc(100vw - 2rem), var(--kanonis-dialog-width, 34rem));
        max-height: min(calc(100dvh - 2rem), 44rem);
        padding: 0;
        overflow: hidden;
        border: 1px solid var(--kanonis-color-border-default);
        border-top-color: var(--kanonis-color-border-highlight);
        border-radius: var(--kanonis-radius-xl);
        background: var(--kanonis-gradient-elevated, var(--kanonis-color-bg-elevated));
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-lg);
      }
      dialog::backdrop {
        background: var(--kanonis-color-overlay);
        backdrop-filter: blur(3px);
      }
      .frame {
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        max-height: inherit;
      }
      header {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: var(--kanonis-space-4);
        align-items: start;
        padding: var(--kanonis-space-5) var(--kanonis-space-6);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      h2 {
        margin: 0;
        font-size: var(--kanonis-font-size-xl);
        letter-spacing: var(--kanonis-letter-spacing-tight);
      }
      .description {
        margin: var(--kanonis-space-1) 0 0;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      .close {
        display: grid;
        place-items: center;
        width: var(--kanonis-control-height-sm);
        height: var(--kanonis-control-height-sm);
        border: 0;
        border-radius: var(--kanonis-radius-sm);
        background: transparent;
        color: var(--kanonis-color-text-muted);
        font-size: 1.25rem;
        cursor: pointer;
      }
      .close:hover {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
      .body {
        min-height: 0;
        padding: var(--kanonis-space-6);
        overflow: auto;
        color: var(--kanonis-color-text-secondary);
      }
      footer {
        padding: var(--kanonis-space-4) var(--kanonis-space-6);
        border-top: 1px solid var(--kanonis-color-border-subtle);
      }
      ::slotted([slot='footer']) {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: var(--kanonis-space-2);
      }
      @media ${mediaCompact} {
        dialog {
          width: calc(100vw - 1rem);
          max-height: calc(100dvh - 1rem);
        }
        header,
        .body,
        footer {
          padding-left: var(--kanonis-space-4);
          padding-right: var(--kanonis-space-4);
        }
      }
    `,
  ];

  @query('dialog') protected dialog!: HTMLDialogElement;
  @property({ type: Boolean, reflect: true }) open = false;
  @property() heading = '';
  @property() description = '';
  @property({ type: Boolean, reflect: true }) dismissible = true;
  @property({ attribute: 'close-label' }) closeLabel = 'Close';
  private returnFocus: HTMLElement | null = null;

  show() {
    this.open = true;
  }

  close(reason: KanonisDismissReason = 'programmatic') {
    if (!this.open && !this.dialog?.open) return;
    this.open = false;
    if (this.dialog?.open) this.dialog.close();
    this.emit<KanonisDismissDetail>('kanonis-close', { reason });
    this.returnFocus?.focus();
    this.returnFocus = null;
  }

  protected override updated(changed: PropertyValues<this>) {
    if (!changed.has('open') || !this.dialog) return;
    if (this.open && !this.dialog.open) {
      this.returnFocus = this.ownerDocument.activeElement as HTMLElement | null;
      if (typeof this.dialog.showModal === 'function') this.dialog.showModal();
      else this.dialog.setAttribute('open', '');
      queueMicrotask(() => {
        const initial = this.querySelector<HTMLElement>('[autofocus]');
        (
          initial ?? this.shadowRoot?.querySelector<HTMLElement>('.close,button,[tabindex]')
        )?.focus();
      });
    } else if (!this.open && this.dialog.open) {
      if (typeof this.dialog.close === 'function') this.dialog.close();
      else this.dialog.removeAttribute('open');
    }
  }

  private cancel(event: Event) {
    event.preventDefault();
    if (this.dismissible) this.close('escape');
  }

  private backdrop(event: MouseEvent) {
    if (event.target === event.currentTarget && this.dismissible) this.close('backdrop');
  }

  protected override render() {
    return html`<dialog
      part="dialog"
      aria-labelledby="title"
      aria-describedby=${this.description ? 'description' : nothing}
      @cancel=${this.cancel}
      @click=${this.backdrop}
    >
      <div class="frame">
        <header part="header">
          <div>
            <h2 id="title"><slot name="heading">${this.heading}</slot></h2>
            ${
              this.description
                ? html`<p id="description" class="description">${this.description}</p>`
                : nothing
            }
          </div>
          ${
            this.dismissible
              ? html`<button
                  class="close"
                  part="close-button"
                  type="button"
                  aria-label=${this.closeLabel}
                  @click=${() => this.close('button')}
                >
                  ×
                </button>`
              : nothing
          }
        </header>
        <div class="body" part="body"><slot></slot></div>
        <footer part="footer"><slot name="footer"></slot></footer>
      </div>
    </dialog>`;
  }
}

export class KanonisDrawer extends KanonisDialog {
  static override styles: CSSResultGroup = [
    KanonisDialog.styles,
    css`
      dialog {
        width: min(92vw, var(--kanonis-drawer-width, 26rem));
        height: 100dvh;
        max-height: 100dvh;
        margin: 0 0 0 auto;
        border-radius: var(--kanonis-radius-xl) 0 0 var(--kanonis-radius-xl);
      }
      :host([position='start']) dialog {
        margin: 0 auto 0 0;
        border-radius: 0 var(--kanonis-radius-xl) var(--kanonis-radius-xl) 0;
      }
      .frame {
        height: 100%;
      }
      @media ${mediaCompact} {
        dialog {
          width: min(94vw, var(--kanonis-drawer-width, 26rem));
          height: 100dvh;
          max-height: 100dvh;
        }
      }
    `,
  ];

  @property({ reflect: true }) position: 'start' | 'end' = 'end';
}

export interface KanonisMenuSelectDetail {
  value: string;
}

export class KanonisMenuItem extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        min-height: var(--kanonis-control-height-sm);
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        border-radius: var(--kanonis-radius-sm);
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-md);
        cursor: pointer;
        user-select: none;
      }
      :host(:hover),
      :host(:focus-visible) {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
        outline: 0;
      }
      :host([tone='danger']) {
        color: var(--kanonis-color-danger);
      }
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .icon {
        display: inline-flex;
        width: var(--kanonis-icon-md);
      }
    `,
  ];

  @property() value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ reflect: true }) tone: 'default' | 'danger' = 'default';

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.select);
    this.addEventListener('keydown', this.keydown);
  }

  override disconnectedCallback() {
    this.removeEventListener('click', this.select);
    this.removeEventListener('keydown', this.keydown);
    super.disconnectedCallback();
  }

  protected override updated() {
    this.setAttribute('role', 'menuitem');
    this.setAttribute('aria-disabled', String(this.disabled));
    if (!this.hasAttribute('tabindex')) this.tabIndex = -1;
  }

  private readonly select = () => {
    if (!this.disabled) this.emit<KanonisMenuSelectDetail>('kanonis-menu-select', { value: this.value });
  };

  private readonly keydown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    this.select();
  };

  protected override render() {
    return html`<span class="icon"><slot name="icon"></slot></span><slot></slot>`;
  }
}

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

export class KanonisTooltip extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: relative;
        display: inline-flex;
      }
      .tooltip {
        position: absolute;
        z-index: var(--kanonis-z-toast);
        left: 50%;
        bottom: calc(100% + var(--kanonis-space-2));
        width: max-content;
        max-width: 18rem;
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-sm);
        background: var(--kanonis-color-bg-elevated);
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-md);
        font-size: var(--kanonis-font-size-xs);
        line-height: var(--kanonis-line-height-normal);
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, var(--kanonis-space-1));
        transition:
          opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      :host(:hover) .tooltip,
      :host(:focus-within) .tooltip,
      :host([open]) .tooltip {
        opacity: 1;
        transform: translate(-50%, 0);
      }
      :host([placement='bottom']) .tooltip {
        top: calc(100% + var(--kanonis-space-2));
        bottom: auto;
      }
      :host([placement='start']) .tooltip {
        top: 50%;
        right: calc(100% + var(--kanonis-space-2));
        bottom: auto;
        left: auto;
        transform: translate(var(--kanonis-space-1), -50%);
      }
      :host([placement='end']) .tooltip {
        top: 50%;
        bottom: auto;
        left: calc(100% + var(--kanonis-space-2));
        transform: translate(calc(-1 * var(--kanonis-space-1)), -50%);
      }
      :host([placement='start']:hover) .tooltip,
      :host([placement='start']:focus-within) .tooltip,
      :host([placement='start'][open]) .tooltip,
      :host([placement='end']:hover) .tooltip,
      :host([placement='end']:focus-within) .tooltip,
      :host([placement='end'][open]) .tooltip {
        transform: translate(0, -50%);
      }
      @media (prefers-reduced-motion: reduce) {
        .tooltip {
          transition: none;
        }
      }
    `,
  ];

  @property() content = '';
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ reflect: true }) placement: 'top' | 'bottom' | 'start' | 'end' = 'top';

  protected override render() {
    return html`<slot></slot
      ><span class="tooltip" part="tooltip" role="tooltip">${this.content}</span>`;
  }
}
