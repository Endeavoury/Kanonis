import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement, type KanonisTone } from '../../core/kanonis-element.js';


export interface KanonisToastCloseDetail {
  reason: 'dismiss' | 'timeout' | 'programmatic';
}

export class KanonisToast extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      :host(:not([open])) {
        display: none;
      }
      .toast {
        --toast-accent: var(--kanonis-color-info);
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: var(--kanonis-space-3);
        width: min(24rem, calc(100vw - 2rem));
        padding: var(--kanonis-space-4);
        border: 1px solid var(--kanonis-color-border-default);
        border-left: 3px solid var(--toast-accent);
        border-radius: var(--kanonis-radius-lg);
        background: var(--kanonis-gradient-elevated, var(--kanonis-color-bg-elevated));
        color: var(--kanonis-color-text-secondary);
        box-shadow: var(--kanonis-shadow-lg);
      }
      :host([tone='success']) .toast {
        --toast-accent: var(--kanonis-color-success);
      }
      :host([tone='warning']) .toast {
        --toast-accent: var(--kanonis-color-warning);
      }
      :host([tone='danger']) .toast {
        --toast-accent: var(--kanonis-color-danger);
      }
      strong {
        display: block;
        margin-bottom: var(--kanonis-space-1);
        color: var(--kanonis-color-text-primary);
        font-size: var(--kanonis-font-size-md);
      }
      .message {
        font-size: var(--kanonis-font-size-sm);
      }
      .actions {
        margin-top: var(--kanonis-space-3);
      }
      button {
        display: grid;
        place-items: center;
        width: 1.75rem;
        height: 1.75rem;
        border: 0;
        border-radius: var(--kanonis-radius-sm);
        background: transparent;
        color: var(--kanonis-color-text-muted);
        cursor: pointer;
      }
      button:hover {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = true;
  @property({ reflect: true }) tone: KanonisTone = 'info';
  @property() heading = '';
  @property({ type: Number }) duration = 5000;
  @property({ type: Boolean }) dismissible = true;
  @property({ attribute: 'close-label' }) closeLabel = 'Dismiss notification';
  private timer?: ReturnType<typeof setTimeout>;

  override disconnectedCallback() {
    this.clearTimer();
    super.disconnectedCallback();
  }

  close(reason: KanonisToastCloseDetail['reason'] = 'programmatic') {
    if (!this.open) return;
    this.open = false;
    this.clearTimer();
    this.emit<KanonisToastCloseDetail>('kanonis-toast-close', { reason });
  }

  private clearTimer() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = undefined;
  }

  private schedule() {
    this.clearTimer();
    if (this.open && this.duration > 0)
      this.timer = setTimeout(() => this.close('timeout'), this.duration);
  }

  protected override updated() {
    this.schedule();
  }

  protected override render() {
    const urgent = this.tone === 'danger' || this.tone === 'warning';
    return html`<div
      class="toast"
      part="toast"
      role=${urgent ? 'alert' : 'status'}
      aria-live=${urgent ? 'assertive' : 'polite'}
      @mouseenter=${this.clearTimer}
      @mouseleave=${this.schedule}
    >
      <div>
        ${this.heading ? html`<strong>${this.heading}</strong>` : nothing}
        <div class="message"><slot></slot></div>
        <div class="actions"><slot name="actions"></slot></div>
      </div>
      ${
        this.dismissible
          ? html`<button
              type="button"
              aria-label=${this.closeLabel}
              @click=${() => this.close('dismiss')}
            >
              ×
            </button>`
          : nothing
      }
    </div>`;
  }
}
