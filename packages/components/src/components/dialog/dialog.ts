import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup, type PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';
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
