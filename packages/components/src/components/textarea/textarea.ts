import { formFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, query } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisValueChangeDetail } from '../forms/shared.js';
import { feedback } from '../secondary-forms/shared.js';


export class KanonisTextarea extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    formFoundationStyles,
    css`
      :host {
        display: block;
        min-width: 0;
      }
      textarea {
        width: 100%;
        min-height: 6rem;
        padding: var(--kanonis-space-3);
        resize: vertical;
      }
      textarea::placeholder {
        color: var(--kanonis-color-text-muted);
      }
      .invalid {
        border-color: var(--kanonis-color-danger);
      }
    `,
  ];

  readonly internals: ElementInternals;
  @query('textarea') private control!: HTMLTextAreaElement;
  @property() label = '';
  @property() name = '';
  @property() value = '';
  @property() placeholder = '';
  @property({ type: Number }) rows = 4;
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property() helpText = '';
  @property() error = '';

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

  private syncForm() {
    this.internals.setFormValue(this.disabled ? null : this.value);
    if (!this.control) return;
    this.internals.setValidity(
      this.control.validity,
      this.control.validity.valid ? '' : this.control.validationMessage,
      this.control,
    );
  }

  private input(event: Event) {
    this.value = (event.target as HTMLTextAreaElement).value;
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-input', { value: this.value });
  }

  private change() {
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-change', { value: this.value });
  }

  protected override updated() {
    this.syncForm();
  }

  protected override render() {
    const described = this.error ? 'error' : this.helpText ? 'help' : nothing;
    return html`<label class="field">
      <span class="label" part="label"
        >${this.label}${
          this.required ? html` <span class="required" aria-hidden="true">*</span>` : nothing
        }</span
      >
      <textarea
        class="control ${this.error ? 'invalid' : ''}"
        part="control"
        .value=${this.value}
        name=${this.name}
        placeholder=${this.placeholder}
        rows=${this.rows}
        minlength=${this.minlength ?? nothing}
        maxlength=${this.maxlength ?? nothing}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        aria-invalid=${this.error ? 'true' : 'false'}
        aria-describedby=${described}
        @input=${this.input}
        @change=${this.change}
      ></textarea>
      ${feedback(this.error, this.helpText)}
    </label>`;
  }
}
