import { formFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, query } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisCheckedChangeDetail } from '../forms/shared.js';


export class KanonisSwitch extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    formFoundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      label {
        display: inline-grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: var(--kanonis-space-3);
        align-items: center;
        color: var(--kanonis-color-text-primary);
        cursor: pointer;
      }
      input {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
      }
      .track {
        position: relative;
        width: 2.5rem;
        height: 1.375rem;
        border: 1px solid var(--kanonis-color-border-strong);
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-bg-sunken);
        transition:
          background var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          border-color var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      .thumb {
        position: absolute;
        top: 0.1875rem;
        left: 0.1875rem;
        width: 0.875rem;
        height: 0.875rem;
        border-radius: 50%;
        background: var(--kanonis-color-text-muted);
        box-shadow: var(--kanonis-shadow-sm);
        transition:
          transform var(--kanonis-duration-fast) var(--kanonis-ease-emphasized),
          background var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      input:checked + .track {
        border-color: var(--kanonis-color-accent-primary);
        background: var(--kanonis-color-accent-primary);
      }
      input:checked + .track .thumb {
        transform: translateX(1.125rem);
        background: var(--kanonis-color-text-inverse);
      }
      input:focus-visible + .track {
        outline: 2px solid var(--kanonis-color-focus);
        outline-offset: 3px;
      }
      .text {
        display: grid;
        gap: 0.125rem;
      }
      .help {
        margin: 0;
      }
      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];

  readonly internals: ElementInternals;
  @query('input') private control!: HTMLInputElement;
  @property() name = '';
  @property() value = 'on';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property() helpText = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  override focus(options?: FocusOptions) {
    this.control?.focus(options);
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
    const invalid = this.required && !this.checked;
    this.internals.setValidity(
      invalid ? { valueMissing: true } : {},
      invalid ? 'Enable this option' : '',
    );
  }

  private changed(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    this.syncForm();
    this.emit<KanonisCheckedChangeDetail>('kanonis-change', { checked: this.checked, value: this.value });
  }

  protected override updated() {
    this.syncForm();
  }

  protected override render() {
    return html`<label>
      <input
        type="checkbox"
        .checked=${this.checked}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @change=${this.changed}
      />
      <span class="track" part="control" aria-hidden="true"><span class="thumb"></span></span>
      <span class="text"
        ><span part="label"><slot></slot></span
        >${this.helpText ? html`<span class="help">${this.helpText}</span>` : nothing}</span
      >
    </label>`;
  }
}
