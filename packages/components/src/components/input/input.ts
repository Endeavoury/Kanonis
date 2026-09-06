import { formFoundationStyles } from '@endeavoury/kanonis-styles';
import { html, nothing, type CSSResultGroup } from 'lit';
import { property, query } from 'lit/decorators.js';
import { KanonisElement, type KanonisSize } from '../../core/kanonis-element.js';
import { fieldSpecificStyles, type KanonisValueChangeDetail } from '../forms/shared.js';


export class KanonisInput extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [formFoundationStyles, fieldSpecificStyles];
  readonly internals: ElementInternals;
  @query('input') protected control!: HTMLInputElement;
  @property() label = '';
  @property() name = '';
  @property() value = '';
  @property() type = 'text';
  @property() placeholder = '';
  @property() autocomplete = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;
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
  checkValidity() {
    return this.control?.checkValidity() ?? true;
  }
  reportValidity() {
    return this.control?.reportValidity() ?? true;
  }
  protected syncForm() {
    this.internals.setFormValue(this.disabled ? null : this.value);
    if (this.control) {
      const validity = this.control.validity;
      this.internals.setValidity(
        validity,
        validity.valid ? '' : this.control.validationMessage,
        this.control,
      );
    }
  }
  private onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-input', { value: this.value });
  }
  private onChange() {
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-change', { value: this.value });
  }
  protected override updated() {
    this.syncForm();
  }
  protected override render() {
    const helpId = 'help',
      errorId = 'error',
      described = this.error ? errorId : this.helpText ? helpId : nothing;
    return html`<label class="field"
      ><span class="label" part="label"
        >${this.label}${this.required ? html` <span class="required" aria-hidden="true">*</span>` : nothing}</span
      ><span class="control-wrap"
        ><span class="prefix"><slot name="prefix"></slot></span
        ><input
          part="control"
          class="control ${this.querySelector('[slot=prefix]') ? 'has-prefix' : ''} ${this.querySelector('[slot=suffix]') ? 'has-suffix' : ''} ${this.error ? 'invalid' : ''}"
          .value=${this.value}
          type=${this.type}
          name=${this.name}
          placeholder=${this.placeholder}
          autocomplete=${this.autocomplete || nothing}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          minlength=${this.minlength ?? nothing}
          maxlength=${this.maxlength ?? nothing}
          aria-invalid=${this.error ? 'true' : 'false'}
          aria-describedby=${described}
          @input=${this.onInput}
          @change=${this.onChange} /><span class="suffix"><slot name="suffix"></slot></span></span
      >${this.error ? html`<p id=${errorId} class="error" part="error">${this.error}</p>` : this.helpText ? html`<p id=${helpId} class="help" part="help">${this.helpText}</p>` : nothing}</label
    >`;
  }
}
