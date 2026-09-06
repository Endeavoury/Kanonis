import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisFormField extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: grid;
        gap: var(--kanonis-space-2);
      }
      .label {
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
        font-weight: var(--kanonis-font-weight-semibold);
        cursor: default;
      }
      .help {
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
      }
      .error {
        color: var(--kanonis-color-danger);
        font-size: var(--kanonis-font-size-xs);
      }
    `,
  ];
  @property() label = '';
  @property() helpText = '';
  @property() error = '';
  @property({ type: Boolean }) required = false;
  private focusControl() {
    (
      this.querySelector(
        'kanonis-input,kanonis-select,kanonis-checkbox,input,select,textarea',
      ) as HTMLElement | null
    )?.focus();
  }
  protected override render() {
    return html`<span class="label" part="label" @click=${this.focusControl}
        ><slot name="label">${this.label}</slot
        >${this.required ? html` <span aria-hidden="true">*</span>` : nothing}</span
      ><slot></slot
      >${this.error ? html`<span class="error" part="error">${this.error}</span>` : this.helpText ? html`<span class="help" part="help">${this.helpText}</span>` : nothing}`;
  }
}
