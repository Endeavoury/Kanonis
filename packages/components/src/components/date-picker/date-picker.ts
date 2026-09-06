import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export class KanonisDatePicker extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      label {
        display: grid;
        gap: 0.25rem;
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
      }
      input {
        min-height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-primary);
      }
    `,
  ];
  @property() label = 'Date';
  @property() value = '';
  @property() min = '';
  @property() max = '';
  private change(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.emit<{ value: string }>('kanonis-change', { value: this.value });
  }
  protected override render() {
    return html`<label
      >${this.label}<input
        type="date"
        .value=${this.value}
        min=${this.min || nothing}
        max=${this.max || nothing}
        @change=${this.change}
    /></label>`;
  }
}
