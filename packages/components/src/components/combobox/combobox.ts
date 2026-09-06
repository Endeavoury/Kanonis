import { controlStyles, foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisComboOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export class KanonisCombobox extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    controlStyles,
    css`
      :host {
        display: block;
        min-width: 0;
      }
      .field {
        display: grid;
        gap: var(--kanonis-space-1);
        position: relative;
      }
      .label {
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
        font-weight: var(--kanonis-font-weight-semibold);
      }
      input {
        width: 100%;
        height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-3);
      }
      [role='listbox'] {
        position: absolute;
        z-index: var(--kanonis-z-dropdown);
        inset: 100% 0 auto;
        max-height: 16rem;
        margin-top: var(--kanonis-space-1);
        overflow-y: auto;
        padding: var(--kanonis-space-1);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-elevated);
        box-shadow: var(--kanonis-shadow-md);
      }
      [role='option'] {
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        border-radius: var(--kanonis-radius-sm);
        cursor: pointer;
      }
      [role='option']:hover,
      [role='option'][aria-selected='true'],
      [role='option'][data-active] {
        background: var(--kanonis-color-bg-selected);
      }
    `,
  ];
  @property() label = '';
  @property() value = '';
  @property() placeholder = 'Choose an option';
  @property({ attribute: false }) options: KanonisComboOption[] = [];
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) open = false;
  @state() private activeIndex = -1;
  private filtered() {
    const query = this.value.trim().toLocaleLowerCase();
    return this.options.filter(
      (option) => !query || option.label.toLocaleLowerCase().includes(query),
    );
  }
  private inputChanged(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.open = true;
    this.activeIndex = this.filtered().length ? 0 : -1;
    this.emit<{ value: string }>('kanonis-combobox-input', { value: this.value });
  }
  private keydown(event: KeyboardEvent) {
    const options = this.filtered();
    if (event.key === 'Escape') {
      this.open = false;
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!options.length) return;
      const offset = event.key === 'ArrowDown' ? 1 : -1;
      this.activeIndex = (this.activeIndex + offset + options.length) % options.length;
      return;
    }
    if (event.key === 'Enter' && this.open && this.activeIndex >= 0) {
      event.preventDefault();
      const option = options[this.activeIndex];
      if (option) this.choose(option);
    }
  }
  private choose(option: KanonisComboOption) {
    if (option.disabled) return;
    this.value = option.label;
    this.open = false;
    this.emit<{ value: string }>('kanonis-change', { value: option.value });
  }
  protected override render() {
    const options = this.filtered();
    return html`<label class="field"
      ><span class="label">${this.label}</span
      ><input
        role="combobox"
        aria-expanded=${this.open}
        aria-autocomplete="list"
        aria-activedescendant=${this.activeIndex >= 0 ? `combo-option-${this.activeIndex}` : nothing}
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        @focus=${() => (this.open = true)}
        @input=${this.inputChanged}
        @keydown=${this.keydown}
      />${this.open ? html`<div role="listbox">${options.length ? options.map((option, index) => html`<div id=${`combo-option-${index}`} role="option" aria-selected=${option.label === this.value} ?data-active=${index === this.activeIndex} @mousedown=${(event: Event) => event.preventDefault()} @click=${() => this.choose(option)}>${option.label}</div>`) : html`<span class="muted">No matches</span>`}</div>` : nothing}</label
    >`;
  }
}
