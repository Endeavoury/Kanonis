import { formFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisValueChangeDetail } from '../forms/shared.js';
import { KanonisRadio } from '../radio/radio.js';
import { feedback, type KanonisRadioActivateDetail } from '../secondary-forms/shared.js';


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
