import { controlFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement, type KanonisSize } from '../../core/kanonis-element.js';
import { activateForm } from '../button/shared.js';


export class KanonisIconButton extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    controlFoundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      button {
        display: grid;
        place-items: center;
        width: var(--kanonis-control-height-md);
        height: var(--kanonis-control-height-md);
        padding: 0;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
        color: var(--kanonis-color-text-secondary);
        cursor: pointer;
        box-shadow: var(--kanonis-shadow-control);
        transition:
          background var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          border-color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      button:hover:not(:disabled) {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
        border-color: var(--kanonis-color-border-strong);
        transform: translateY(-1px);
      }
      button:active:not(:disabled) {
        transform: translateY(1px);
      }
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      :host([size='small']) button {
        width: var(--kanonis-control-height-sm);
        height: var(--kanonis-control-height-sm);
      }
      :host([size='large']) button {
        width: var(--kanonis-control-height-lg);
        height: var(--kanonis-control-height-lg);
      }
      ::slotted(*) {
        width: var(--kanonis-icon-md);
        height: var(--kanonis-icon-md);
      }
    `,
  ];
  @property({ reflect: true }) size: KanonisSize = 'medium';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() label = '';
  @property() type: 'button' | 'submit' | 'reset' = 'button';
  readonly internals: ElementInternals;
  constructor() {
    super();
    this.internals = this.attachInternals();
  }
  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }
  override click() {
    this.shadowRoot?.querySelector('button')?.click();
  }
  protected override render() {
    return html`<button
      part="button"
      type="button"
      ?disabled=${this.disabled}
      aria-label=${this.label || nothing}
      @click=${() => activateForm(this, this.internals, this.type)}
    >
      <slot></slot>
    </button>`;
  }
}
