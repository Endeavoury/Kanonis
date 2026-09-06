import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisValueDetail } from '../enhancements/shared.js';


export interface KanonisDismissValueDetail extends KanonisValueDetail {
  reason: 'button' | 'keyboard';
}

export class KanonisChip extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      .chip {
        display: inline-flex;
        min-height: var(--kanonis-control-height-sm);
        align-items: center;
        gap: var(--kanonis-space-1);
        padding-inline: var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-secondary);
      }
      button {
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
      .select {
        padding: 0;
      }
      .dismiss {
        min-width: var(--kanonis-target-min-touch);
        min-height: var(--kanonis-target-min-touch);
        padding: 0;
        border-radius: var(--kanonis-radius-round);
      }
      :host([selected]) .chip {
        border-color: var(--kanonis-color-accent-primary);
        background: var(--kanonis-color-accent-soft);
        color: var(--kanonis-color-text-primary);
      }
      :host([disabled]) {
        opacity: var(--kanonis-opacity-disabled);
      }
    `,
  ];
  @property() value = '';
  @property() label = '';
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) dismissible = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  private select() {
    if (this.disabled) return;
    this.selected = !this.selected;
    this.emit<KanonisValueDetail & { selected: boolean }>('kanonis-change', {
      value: this.value,
      selected: this.selected,
    });
  }
  private dismiss(event: Event) {
    event.stopPropagation();
    if (!this.disabled)
      this.emit<KanonisDismissValueDetail>('kanonis-dismiss', { value: this.value, reason: 'button' });
  }
  protected override render() {
    return html`<span class="chip">
      <button
        class="select"
        type="button"
        aria-pressed=${String(this.selected)}
        ?disabled=${this.disabled}
        @click=${this.select}
      >
        <slot>${this.label}</slot>
      </button>
      ${
        this.dismissible
          ? html`<button
              class="dismiss"
              type="button"
              aria-label=${`Remove ${this.label || this.value}`}
              ?disabled=${this.disabled}
              @click=${this.dismiss}
            >
              ×
            </button>`
          : nothing
      }
    </span>`;
  }
}
