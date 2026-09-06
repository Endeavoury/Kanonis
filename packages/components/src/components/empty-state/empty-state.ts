import { foundationStyles, surfaceStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisEmptyState extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    css`
      :host {
        display: block;
      }
      .state {
        display: grid;
        place-items: center;
        gap: var(--kanonis-space-2);
        min-height: 12rem;
        padding: var(--kanonis-space-8);
        border-style: dashed;
        text-align: center;
      }
      .icon {
        display: grid;
        place-items: center;
        width: 3rem;
        height: 3rem;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-lg);
        background: var(--kanonis-gradient-elevated, var(--kanonis-color-bg-hover));
        color: var(--kanonis-color-accent-hover);
        box-shadow: var(--kanonis-shadow-control);
      }
      h2 {
        margin: var(--kanonis-space-2) 0 0;
        font-size: var(--kanonis-font-size-lg);
        letter-spacing: var(--kanonis-letter-spacing-tight);
      }
      p {
        max-width: 34rem;
        margin: 0;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      .actions {
        margin-top: var(--kanonis-space-2);
      }
    `,
  ];
  @property() heading = 'Nothing here yet';
  @property() description = '';
  protected override render() {
    return html`<div class="state surface" part="state">
      <div class="icon" part="icon"><slot name="icon">◇</slot></div>
      <h2>${this.heading}</h2>
      ${this.description ? html`<p>${this.description}</p>` : nothing}
      <div class="actions"><slot name="actions"></slot></div>
    </div>`;
  }
}
