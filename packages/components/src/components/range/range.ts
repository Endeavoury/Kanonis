import { formFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, query } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisValueChangeDetail } from '../forms/shared.js';


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
