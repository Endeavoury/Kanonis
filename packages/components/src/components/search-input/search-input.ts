import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { type KanonisValueChangeDetail } from '../forms/shared.js';
import { KanonisInput } from '../input/input.js';


export class KanonisSearchInput extends KanonisInput {
  override type = 'search';
  @property({ attribute: 'clear-label' }) clearLabel = 'Clear search';
  private clear() {
    this.value = '';
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-input', { value: '' });
    this.emit<KanonisValueChangeDetail>('kanonis-change', { value: '' });
    this.focus();
  }
  protected override render() {
    return html`<label class="field"
      ><span class="label" part="label">${this.label}</span
      ><span class="control-wrap"
        ><span class="prefix" aria-hidden="true"><slot name="prefix">⌕</slot></span
        ><input
          part="control"
          class="control has-prefix has-suffix ${this.error ? 'invalid' : ''}"
          .value=${this.value}
          type="search"
          name=${this.name}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-label=${this.label || this.placeholder}
          @input=${(event: Event) => this.onSearchInput(event)}
          @change=${() => this.onSearchChange()}
        /><button
          class="clear"
          type="button"
          ?hidden=${!this.value}
          aria-label=${this.clearLabel}
          @click=${this.clear}
        >
          ×
        </button></span
      >${this.error ? html`<p class="error" part="error">${this.error}</p>` : this.helpText ? html`<p class="help" part="help">${this.helpText}</p>` : nothing}</label
    >`;
  }
  private onSearchInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-input', { value: this.value });
  }
  private onSearchChange() {
    this.syncForm();
    this.emit<KanonisValueChangeDetail>('kanonis-change', { value: this.value });
  }
  static override styles: CSSResultGroup = [
    KanonisInput.styles,
    css`
      .clear {
        position: absolute;
        right: var(--kanonis-space-2);
        display: grid;
        place-items: center;
        width: 1.75rem;
        height: 1.75rem;
        border: 0;
        border-radius: var(--kanonis-radius-sm);
        background: transparent;
        color: var(--kanonis-color-text-muted);
        cursor: pointer;
      }
      .clear:hover {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
      .clear[hidden] {
        display: none;
      }
    `,
  ];
}
