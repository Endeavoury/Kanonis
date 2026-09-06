import { formFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, query } from 'lit/decorators.js';
import { KanonisElement, type KanonisSize } from '../../core/kanonis-element.js';
import { fieldSpecificStyles, type KanonisValueChangeDetail } from '../forms/shared.js';


export interface KanonisSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export class KanonisSelect extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    formFoundationStyles,
    fieldSpecificStyles,
    css`
      select {
        appearance: none;
        padding-right: 2.25rem;
      }
      .chevron {
        position: absolute;
        right: var(--kanonis-space-3);
        pointer-events: none;
        color: var(--kanonis-color-text-muted);
      }
    `,
  ];
  readonly internals: ElementInternals;
  @query('select') protected control!: HTMLSelectElement;
  @property() label = '';
  @property() name = '';
  @property() value = '';
  @property() placeholder = '';
  @property({ attribute: false }) options: KanonisSelectOption[] = [];
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property() helpText = '';
  @property() error = '';
  @property({ reflect: true }) size: KanonisSize = 'medium';
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
    this.value = this.getAttribute('value') ?? '';
    this.syncForm();
  }
  protected override updated() {
    this.syncForm();
  }
  private syncForm() {
    this.internals.setFormValue(this.disabled ? null : this.value);
    if (this.control)
      this.internals.setValidity(
        this.control.validity,
        this.control.validationMessage,
        this.control,
      );
  }
  private changed(event: Event) {
    this.value = (event.target as HTMLSelectElement).value;
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-change', { value: this.value });
  }
  protected override render() {
    return html`<label class="field"
      ><span class="label" part="label"
        >${this.label}${this.required ? html` <span class="required">*</span>` : nothing}</span
      ><span class="control-wrap"
        ><select
          part="control"
          class="control ${this.error ? 'invalid' : ''}"
          .value=${this.value}
          name=${this.name}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.error ? 'true' : 'false'}
          @change=${this.changed}
        >
          ${this.placeholder ? html`<option value="" disabled>${this.placeholder}</option>` : nothing}${this.options.map((option) => html`<option value=${option.value} ?disabled=${option.disabled} ?selected=${option.value === this.value}>${option.label}</option>`)}</select
        ><span class="chevron" aria-hidden="true">⌄</span></span
      >${this.error ? html`<p class="error" part="error">${this.error}</p>` : this.helpText ? html`<p class="help" part="help">${this.helpText}</p>` : nothing}</label
    >`;
  }
}
