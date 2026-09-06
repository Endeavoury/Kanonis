import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisSplitButton extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: relative;
        display: inline-flex;
      }
      .group {
        display: inline-flex;
      }
      button {
        min-height: var(--kanonis-control-height-md);
        border: 1px solid var(--kanonis-color-accent-primary);
        background: var(--kanonis-gradient-accent);
        color: var(--kanonis-color-text-inverse);
        font: inherit;
        font-weight: var(--kanonis-font-weight-semibold);
        cursor: pointer;
      }
      .primary {
        padding-inline: var(--kanonis-space-4);
        border-radius: var(--kanonis-shape-control) 0 0 var(--kanonis-shape-control);
      }
      .toggle {
        min-width: var(--kanonis-control-height-md);
        border-inline-start-color: var(--kanonis-color-highlight);
        border-radius: 0 var(--kanonis-shape-control) var(--kanonis-shape-control) 0;
      }
      :host-context([dir='rtl']) .primary {
        border-radius: 0 var(--kanonis-shape-control) var(--kanonis-shape-control) 0;
      }
      :host-context([dir='rtl']) .toggle {
        border-radius: var(--kanonis-shape-control) 0 0 var(--kanonis-shape-control);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: var(--kanonis-opacity-disabled);
      }
      .menu {
        position: absolute;
        z-index: var(--kanonis-z-dropdown);
        inset-block-start: calc(100% + var(--kanonis-space-1));
        inset-inline-end: 0;
        min-width: 12rem;
        padding: var(--kanonis-space-2);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-shape-surface);
        background: var(--kanonis-color-bg-elevated);
        box-shadow: var(--kanonis-elevation-overlay);
        color: var(--kanonis-color-text-primary);
      }
    `,
  ];
  @property() label = 'Run';
  @property({ attribute: 'menu-label' }) menuLabel = 'Related actions';
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  private primary() {
    if (!this.disabled) this.emit<void>('kanonis-activate', undefined);
  }
  private toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    this.emit<{ open: boolean }>('kanonis-menu-toggle', { open: this.open });
  }
  private keydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      this.open = false;
      this.shadowRoot?.querySelector<HTMLButtonElement>('.toggle')?.focus();
    }
  }
  protected override render() {
    return html`<div class="group" role="group" aria-label=${this.label} @keydown=${this.keydown}>
        <button class="primary" type="button" ?disabled=${this.disabled} @click=${this.primary}>
          <slot>${this.label}</slot>
        </button>
        <button
          class="toggle"
          type="button"
          aria-label=${this.menuLabel}
          aria-haspopup="menu"
          aria-expanded=${String(this.open)}
          ?disabled=${this.disabled}
          @click=${this.toggle}
        >
          ▾
        </button>
      </div>
      ${
        this.open
          ? html`<div
              class="menu"
              role="menu"
              aria-label=${this.menuLabel}
              @click=${() => (this.open = false)}
            >
              <slot name="menu"></slot>
            </div>`
          : nothing
      }`;
  }
}
