import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisValueDetail } from '../enhancements/shared.js';


export class KanonisSegment extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      button {
        min-height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-4);
        border: 0;
        border-radius: var(--kanonis-shape-control);
        background: transparent;
        color: var(--kanonis-color-text-secondary);
        font: inherit;
        font-weight: var(--kanonis-font-weight-medium);
        cursor: pointer;
        transition:
          background var(--kanonis-motion-control),
          color var(--kanonis-motion-control),
          box-shadow var(--kanonis-motion-control);
      }
      button[aria-checked='true'] {
        background: var(--kanonis-color-bg-surface);
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-control);
      }
      button:hover:not(:disabled) {
        background: var(--kanonis-color-bg-hover);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: var(--kanonis-opacity-disabled);
      }
    `,
  ];
  @property() value = '';
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() label = '';
  private requestSelection() {
    if (!this.disabled)
      this.emit<KanonisValueDetail>('kanonis-segment-request', {
        value: this.value || this.textContent?.trim() || '',
      });
  }
  protected override render() {
    return html`<button
      type="button"
      role="radio"
      aria-checked=${String(this.selected)}
      tabindex=${this.selected ? 0 : -1}
      ?disabled=${this.disabled}
      @click=${this.requestSelection}
    >
      <slot>${this.label}</slot>
    </button>`;
  }
}
