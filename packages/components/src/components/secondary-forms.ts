import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { formFoundationStyles, foundationStyles } from '@endeavoury/kanonis-styles';
import { KanonisElement } from '../core/kanonis-element.js';
import type { KanonisCheckedChangeDetail, KanonisValueChangeDetail } from './forms.js';

const feedback = (error: string, helpText: string) =>
  error
    ? html`<p id="error" class="error" part="error">${error}</p>`
    : helpText
      ? html`<p id="help" class="help" part="help">${helpText}</p>`
      : nothing;

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

export class KanonisRange extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    formFoundationStyles,
    css`
      :host {
        display: block;
      }
      .heading {
        display: flex;
        justify-content: space-between;
        gap: var(--kanonis-space-3);
      }
      output {
        color: var(--kanonis-color-text-primary);
        font-variant-numeric: tabular-nums;
      }
      input {
        width: 100%;
        height: var(--kanonis-control-height-md);
        margin: 0;
        accent-color: var(--kanonis-color-accent-primary);
        cursor: pointer;
      }
      input:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];

  readonly internals: ElementInternals;
  @query('input') private control!: HTMLInputElement;
  @property() label = '';
  @property() name = '';
  @property() value = '0';
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, attribute: 'show-value' }) showValue = false;
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
    this.value = this.getAttribute('value') ?? String(this.min);
    this.syncForm();
  }

  private syncForm() {
    this.internals.setFormValue(this.disabled ? null : this.value);
  }

  private input(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-input', { value: this.value });
  }

  private change() {
    this.emit<KanonisValueChangeDetail>('kanonis-change', { value: this.value });
  }

  protected override updated() {
    this.syncForm();
  }

  protected override render() {
    return html`<label class="field">
      <span class="heading"
        ><span class="label" part="label">${this.label}</span
        >${this.showValue ? html`<output>${this.value}</output>` : nothing}</span
      >
      <input
        part="control"
        type="range"
        .value=${this.value}
        min=${this.min}
        max=${this.max}
        step=${this.step}
        ?disabled=${this.disabled}
        @input=${this.input}
        @change=${this.change}
      />
      ${this.helpText ? html`<p class="help">${this.helpText}</p>` : nothing}
    </label>`;
  }
}

interface KanonisRadioActivateDetail {
  value: string;
}

export class KanonisRadio extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-grid;
        grid-template-columns: 1.125rem minmax(0, 1fr);
        gap: var(--kanonis-space-2);
        align-items: center;
        color: var(--kanonis-color-text-primary);
        cursor: pointer;
      }
      :host(:focus-visible) {
        outline: 2px solid var(--kanonis-color-focus);
        outline-offset: 3px;
        border-radius: var(--kanonis-radius-sm);
      }
      .circle {
        display: grid;
        place-items: center;
        width: 1.125rem;
        height: 1.125rem;
        border: 1px solid var(--kanonis-color-border-strong);
        border-radius: 50%;
        background: var(--kanonis-color-bg-surface);
      }
      .dot {
        width: 0.5625rem;
        height: 0.5625rem;
        border-radius: 50%;
        background: transparent;
      }
      :host([checked]) .circle {
        border-color: var(--kanonis-color-accent-primary);
      }
      :host([checked]) .dot {
        background: var(--kanonis-color-accent-primary);
      }
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];

  @property() value = '';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.activate);
    this.addEventListener('keydown', this.keydown);
  }

  override disconnectedCallback() {
    this.removeEventListener('click', this.activate);
    this.removeEventListener('keydown', this.keydown);
    super.disconnectedCallback();
  }

  protected override updated() {
    this.setAttribute('role', 'radio');
    this.setAttribute('aria-checked', String(this.checked));
    this.setAttribute('aria-disabled', String(this.disabled));
  }

  private readonly activate = () => {
    if (!this.disabled)
      this.emit<KanonisRadioActivateDetail>('kanonis-radio-activate', { value: this.value });
  };

  private readonly keydown = (event: KeyboardEvent) => {
    if (event.key !== ' ' && event.key !== 'Enter') return;
    event.preventDefault();
    this.activate();
  };

  protected override render() {
    return html`<span class="circle" part="control"><span class="dot"></span></span
      ><span part="label"><slot></slot></span>`;
  }
}

export class KanonisRadioGroup extends KanonisElement {
  static formAssociated = true;
  static override styles: CSSResultGroup = [
    formFoundationStyles,
    css`
      :host {
        display: block;
      }
      .options {
        display: grid;
        gap: var(--kanonis-space-3);
      }
      .invalid {
        padding: var(--kanonis-space-2);
        border: 1px solid var(--kanonis-color-danger);
        border-radius: var(--kanonis-radius-md);
      }
    `,
  ];

  readonly internals: ElementInternals;
  @queryAssignedElements({ selector: 'kanonis-radio' }) private assignedRadios!: KanonisRadio[];
  @state() private radios: KanonisRadio[] = [];
  @property() label = '';
  @property() name = '';
  @property() value = '';
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() helpText = '';
  @property() error = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  formResetCallback() {
    this.value = this.getAttribute('value') ?? '';
    this.sync();
  }

  private syncRadios() {
    this.radios = [...this.assignedRadios];
    if (!this.value) this.value = this.radios.find((radio) => radio.checked)?.value ?? '';
    this.sync();
  }

  private sync() {
    const enabled = this.radios.filter((radio) => !radio.disabled && !this.disabled);
    this.radios.forEach((radio) => {
      radio.checked = radio.value === this.value;
      radio.tabIndex =
        !this.disabled &&
        !radio.disabled &&
        (radio.checked || (!this.value && radio === enabled[0]))
          ? 0
          : -1;
    });
    this.internals.setFormValue(this.disabled || !this.value ? null : this.value);
    const invalid = this.required && !this.value;
    this.internals.setValidity(
      invalid ? { valueMissing: true } : {},
      invalid ? 'Choose an option' : '',
    );
  }

  private select(value: string, focus = false) {
    const radio = this.radios.find((item) => item.value === value);
    if (!radio || radio.disabled || this.disabled || value === this.value) return;
    this.value = value;
    this.sync();
    this.emit<KanonisValueChangeDetail>('kanonis-change', { value });
    if (focus) radio.focus();
  }

  private activated(event: CustomEvent<KanonisRadioActivateDetail>) {
    this.select(event.detail.value);
  }

  private keydown(event: KeyboardEvent) {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
    const enabled = this.radios.filter((radio) => !radio.disabled);
    if (!enabled.length) return;
    event.preventDefault();
    const current = Math.max(
      0,
      enabled.findIndex((radio) => radio.value === this.value),
    );
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    this.select(enabled[(current + direction + enabled.length) % enabled.length]!.value, true);
  }

  protected override updated() {
    this.sync();
  }

  protected override render() {
    return html`<div class="field">
      <span id="label" class="label" part="label"
        >${this.label}${
          this.required ? html` <span class="required" aria-hidden="true">*</span>` : nothing
        }</span
      >
      <div
        class="options ${this.error ? 'invalid' : ''}"
        part="options"
        role="radiogroup"
        aria-labelledby="label"
        aria-invalid=${this.error ? 'true' : 'false'}
        aria-disabled=${String(this.disabled)}
        @kanonis-radio-activate=${this.activated}
        @keydown=${this.keydown}
      >
        <slot @slotchange=${this.syncRadios}></slot>
      </div>
      ${feedback(this.error, this.helpText)}
    </div>`;
  }
}
