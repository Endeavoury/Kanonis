import { foundationStyles, spinnerStyles, surfaceStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisLoadingState extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    spinnerStyles,
    css`
      :host {
        display: block;
      }
      .state {
        display: grid;
        place-items: center;
        gap: var(--kanonis-space-3);
        min-height: 11rem;
        padding: var(--kanonis-space-8);
        text-align: center;
        color: var(--kanonis-color-text-muted);
      }
      .spinner {
        --kanonis-spinner-size: 1.75rem;
      }
    `,
  ];
  @property() label = 'Loading';
  protected override render() {
    return html`<div class="state surface" part="state" role="status" aria-live="polite">
      <span class="spinner" aria-hidden="true"></span><span>${this.label}</span>
    </div>`;
  }
}
