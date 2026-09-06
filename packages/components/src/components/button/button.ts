import { controlFoundationStyles, spinnerStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement, type KanonisSize } from '../../core/kanonis-element.js';
import { activateForm } from './shared.js';


export type KanonisButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export class KanonisButton extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    controlFoundationStyles,
    spinnerStyles,
    css`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      :host([full-width]) {
        display: flex;
        width: 100%;
      }
      :is(button, a) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--kanonis-space-2);
        width: 100%;
        min-height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-4);
        border: 1px solid transparent;
        border-radius: var(--kanonis-radius-md);
        cursor: pointer;
        font-size: var(--kanonis-font-size-md);
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: -0.005em;
        white-space: nowrap;
        text-decoration: none;
        transition:
          background var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          border-color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          box-shadow var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      :is(button, a):hover:not(:disabled):not([aria-disabled='true']) {
        transform: translateY(-1px);
      }
      :is(button, a):active:not(:disabled):not([aria-disabled='true']) {
        transform: translateY(1px);
      }
      :host([size='small']) :is(button, a) {
        min-height: var(--kanonis-control-height-sm);
        padding-inline: var(--kanonis-space-3);
        font-size: var(--kanonis-font-size-sm);
      }
      :host([size='large']) :is(button, a) {
        min-height: var(--kanonis-control-height-lg);
        padding-inline: var(--kanonis-space-5);
        font-size: var(--kanonis-font-size-lg);
      }
      :host([variant='primary']) :is(button, a) {
        border-color: color-mix(in srgb, var(--kanonis-color-accent-hover) 68%, transparent);
        background: linear-gradient(
          180deg,
          color-mix(in srgb, var(--kanonis-color-accent-hover) 72%, var(--kanonis-color-accent-primary)),
          var(--kanonis-color-accent-primary)
        );
        color: var(--kanonis-color-text-inverse);
        box-shadow:
          inset 0 1px 0 var(--kanonis-color-highlight),
          var(--kanonis-shadow-accent);
      }
      :host([variant='primary']) :is(button, a):hover:not(:disabled):not([aria-disabled='true']) {
        background: linear-gradient(
          180deg,
          var(--kanonis-color-accent-hover),
          color-mix(in srgb, var(--kanonis-color-accent-primary) 88%, black)
        );
        box-shadow:
          inset 0 1px 0 var(--kanonis-color-highlight),
          0 10px 26px color-mix(in srgb, var(--kanonis-color-accent-primary) 26%, transparent);
      }
      :host([variant='secondary']) :is(button, a) {
        background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
        border-color: var(--kanonis-color-border-default);
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-control);
      }
      :host([variant='secondary']) :is(button, a):hover:not(:disabled):not([aria-disabled='true']) {
        background: var(--kanonis-color-bg-hover);
        border-color: var(--kanonis-color-border-strong);
      }
      :host([variant='ghost']) :is(button, a) {
        background: transparent;
        color: var(--kanonis-color-text-secondary);
      }
      :host([variant='ghost']) :is(button, a):hover:not(:disabled):not([aria-disabled='true']) {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
      :host([variant='danger']) :is(button, a) {
        border-color: color-mix(in srgb, var(--kanonis-color-danger) 70%, black);
        background: linear-gradient(
          180deg,
          color-mix(in srgb, var(--kanonis-color-danger) 88%, white),
          var(--kanonis-color-danger)
        );
        color: var(--kanonis-color-text-inverse);
        box-shadow: 0 8px 20px color-mix(in srgb, var(--kanonis-color-danger) 20%, transparent);
      }
      :is(button, a):is(:disabled, [aria-disabled='true']) {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .spinner {
        --kanonis-spinner-size: 1em;
        --kanonis-spinner-track: currentColor;
        --kanonis-spinner-color: currentColor;
      }
      ::slotted([slot='prefix']),
      ::slotted([slot='suffix']) {
        width: var(--kanonis-icon-md);
        height: var(--kanonis-icon-md);
      }
    `,
  ];
  @property({ reflect: true }) variant: KanonisButtonVariant = 'primary';
  @property({ reflect: true }) size: KanonisSize = 'medium';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: Boolean, attribute: 'full-width', reflect: true }) fullWidth = false;
  @property() type: 'button' | 'submit' | 'reset' = 'button';
  @property() href = '';
  @property() target = '';
  @property() rel = '';
  readonly internals: ElementInternals;
  constructor() {
    super();
    this.internals = this.attachInternals();
  }
  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }
  override click() {
    this.shadowRoot?.querySelector<HTMLElement>('button, a')?.click();
  }
  protected override render() {
    const content = html`<span class="prefix" part="prefix"
        >${this.loading ? html`<span class="spinner" aria-hidden="true"></span>` : html`<slot name="prefix"></slot>`}</span
      ><span part="label"><slot></slot></span><slot name="suffix"></slot>`;
    if (this.href) {
      return html`<a
        part="button"
        href=${this.disabled || this.loading ? nothing : this.href}
        target=${this.target || nothing}
        rel=${this.rel || (this.target === '_blank' ? 'noopener noreferrer' : nothing)}
        aria-disabled=${this.disabled || this.loading ? 'true' : nothing}
        aria-busy=${this.loading ? 'true' : nothing}
        @click=${(event: Event) => {
          if (this.disabled || this.loading) event.preventDefault();
        }}
      >${content}</a>`;
    }
    return html`<button
      part="button"
      type="button"
      ?disabled=${this.disabled || this.loading}
      aria-busy=${this.loading ? 'true' : nothing}
      @click=${() => activateForm(this, this.internals, this.type)}
    >
      ${content}
    </button>`;
  }
}
