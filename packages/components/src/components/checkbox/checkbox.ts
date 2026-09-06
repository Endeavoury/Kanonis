import { formFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisCheckedChangeDetail } from '../forms/shared.js';


export class KanonisCheckbox extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    formFoundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      .wrap {
        display: inline-grid;
        grid-template-columns: 1.125rem minmax(0, 1fr);
        gap: var(--kanonis-space-2);
        align-items: start;
        color: var(--kanonis-color-text-primary);
        font-size: var(--kanonis-font-size-md);
        cursor: pointer;
      }
      .box {
        display: grid;
        place-items: center;
        width: 1.125rem;
        height: 1.125rem;
        margin-top: 0.1rem;
        border: 1px solid var(--kanonis-color-border-strong);
        border-radius: var(--kanonis-radius-sm);
        background: var(--kanonis-color-bg-surface);
        color: var(--kanonis-color-text-inverse);
        transition:
          background var(--kanonis-duration-fast),
          border-color var(--kanonis-duration-fast);
      }
      input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
      .checked {
        background: var(--kanonis-color-accent-primary);
        border-color: var(--kanonis-color-accent-primary);
      }
      .mark {
        font-size: 0.75rem;
        line-height: 1;
      }
      .help {
        grid-column: 2;
      }
      .disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];
  readonly internals: ElementInternals;
  @property() name = '';
  @property() value = 'on';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property() helpText = '';
  constructor() {
    super();
    this.internals = this.attachInternals();
  }
  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }
  formResetCallback() {
    this.checked = this.hasAttribute('checked');
    this.syncForm();
  }
  private syncForm() {
    this.internals.setFormValue(this.checked && !this.disabled ? this.value : null);
    this.internals.setValidity(
      this.required && !this.checked ? { valueMissing: true } : {},
      this.required && !this.checked ? 'Select this option' : '',
    );
  }
  private toggle() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.syncForm();
    this.emit<KanonisCheckedChangeDetail>('kanonis-change', { checked: this.checked, value: this.value });
  }
  private keydown(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }
  protected override updated() {
    this.syncForm();
  }
  protected override render() {
    return html`<label
      class="wrap ${this.disabled ? 'disabled' : ''}"
      @click=${(event: Event) => {
        event.preventDefault();
        if (!this.disabled) this.toggle();
      }}
      ><input
        type="checkbox"
        .checked=${this.checked}
        ?disabled=${this.disabled}
        tabindex="-1"
      /><span
        class="box ${this.checked || this.indeterminate ? 'checked' : ''}"
        part="control"
        role="checkbox"
        tabindex=${this.disabled ? -1 : 0}
        aria-labelledby="label"
        aria-checked=${this.indeterminate ? 'mixed' : String(this.checked)}
        aria-disabled=${String(this.disabled)}
        @keydown=${this.keydown}
        ><span class="mark" aria-hidden="true"
          >${this.indeterminate ? '−' : this.checked ? '✓' : ''}</span
        ></span
      ><span id="label" part="label"><slot></slot></span
      >${this.helpText ? html`<span class="help">${this.helpText}</span>` : nothing}</label
    >`;
  }
}
