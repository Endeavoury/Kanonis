import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisValidationError {
  id: string;
  message: string;
}

export class KanonisValidationSummary extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
        padding: var(--kanonis-space-4);
        border: 1px solid var(--kanonis-color-danger);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-danger-soft);
        color: var(--kanonis-color-text-primary);
      }
      h2 {
        margin: 0 0 var(--kanonis-space-2);
        font-size: var(--kanonis-font-size-lg);
      }
      ul {
        margin: 0;
        padding-left: var(--kanonis-space-5);
      }
      a {
        color: inherit;
      }
    `,
  ];
  @property({ attribute: false }) errors: KanonisValidationError[] = [];
  @property() heading = 'Please correct these errors';
  protected override render() {
    return this.errors.length
      ? html`<section role="alert" aria-labelledby="validation-heading">
          <h2 id="validation-heading">${this.heading}</h2>
          <ul>
            ${this.errors.map((error) => html`<li><a href=${`#${error.id}`}>${error.message}</a></li>`)}
          </ul>
        </section>`
      : nothing;
  }
}
