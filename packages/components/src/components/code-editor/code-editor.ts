import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export class KanonisCodeEditor extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      label {
        display: grid;
        gap: 0.35rem;
      }
      textarea {
        width: 100%;
        min-height: 14rem;
        padding: var(--kanonis-space-4);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-sunken);
        color: var(--kanonis-color-text-primary);
        font: var(--kanonis-font-size-sm)/1.6 var(--kanonis-font-mono);
        resize: vertical;
        tab-size: 2;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: var(--kanonis-space-2);
      }
    `,
  ];
  @property() label = 'Code';
  @property() value = '';
  @property() language = 'text';
  private input(event: Event) {
    this.value = (event.target as HTMLTextAreaElement).value;
    this.emit<{ value: string }>('kanonis-input', { value: this.value });
  }
  protected override render() {
    return html`<label
      ><span>${this.label}</span
      ><textarea
        spellcheck="false"
        aria-label=${this.label}
        .value=${this.value}
        @input=${this.input}
      ></textarea
      ><span class="footer"
        ><span class="muted">${this.language}</span
        ><span class="muted">${this.value.length} characters</span></span
      ></label
    >`;
  }
}
