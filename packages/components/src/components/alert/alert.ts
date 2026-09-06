import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement, type KanonisTone } from '../../core/kanonis-element.js';


export class KanonisAlert extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      .alert {
        --alert-accent: var(--kanonis-color-info);
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        gap: var(--kanonis-space-3);
        align-items: start;
        padding: 0.875rem var(--kanonis-space-4);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-lg);
        background:
          linear-gradient(
            90deg,
            color-mix(in srgb, var(--alert-accent) 8%, transparent),
            transparent 34%
          ),
          var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-md);
        box-shadow:
          inset 3px 0 var(--alert-accent),
          var(--kanonis-shadow-sm);
      }
      :host([tone='info']) .alert,
      :host([tone='accent']) .alert {
        --alert-accent: var(--kanonis-color-info);
        border-color: color-mix(in srgb, var(--kanonis-color-info) 24%, var(--kanonis-color-border-default));
      }
      :host([tone='success']) .alert {
        --alert-accent: var(--kanonis-color-success);
        border-color: color-mix(
          in srgb,
          var(--kanonis-color-success) 24%,
          var(--kanonis-color-border-default)
        );
      }
      :host([tone='warning']) .alert {
        --alert-accent: var(--kanonis-color-warning);
        border-color: color-mix(
          in srgb,
          var(--kanonis-color-warning) 24%,
          var(--kanonis-color-border-default)
        );
      }
      :host([tone='danger']) .alert {
        --alert-accent: var(--kanonis-color-danger);
        border-color: color-mix(
          in srgb,
          var(--kanonis-color-danger) 24%,
          var(--kanonis-color-border-default)
        );
      }
      .title {
        display: block;
        color: var(--kanonis-color-text-primary);
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: -0.01em;
      }
      .message {
        margin-top: var(--kanonis-space-1);
      }
      button {
        width: 1.75rem;
        height: 1.75rem;
        border: 0;
        border-radius: var(--kanonis-radius-sm);
        background: transparent;
        color: var(--kanonis-color-text-secondary);
        cursor: pointer;
      }
      button:hover {
        background: color-mix(in srgb, var(--kanonis-color-text-primary) 8%, transparent);
      }
    `,
  ];
  @property({ reflect: true }) tone: KanonisTone = 'info';
  @property() heading = '';
  @property({ type: Boolean }) dismissible = false;
  private dismiss() {
    this.emit('kanonis-dismiss', {});
    this.remove();
  }
  protected override render() {
    return html`<div
      class="alert"
      part="alert"
      role=${this.tone === 'danger' || this.tone === 'warning' ? 'alert' : 'status'}
    >
      <slot name="icon"></slot>
      <div>
        <span class="title">${this.heading}</span>
        <div class="message"><slot></slot></div>
      </div>
      ${this.dismissible ? html`<button type="button" aria-label="Dismiss" @click=${this.dismiss}>×</button>` : nothing}
    </div>`;
  }
}
