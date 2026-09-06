import { foundationStyles, surfaceStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisPanel extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    css`
      :host {
        display: block;
      }
      .panel {
        padding: var(--kanonis-space-5);
      }
      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--kanonis-space-4);
        padding-bottom: var(--kanonis-space-4);
        margin-bottom: var(--kanonis-space-4);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      h2 {
        margin: 0.375rem 0 0;
        font-size: var(--kanonis-font-size-xl);
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: var(--kanonis-letter-spacing-tight);
        line-height: var(--kanonis-line-height-tight);
      }
      .description {
        margin: var(--kanonis-space-1) 0 0;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
    `,
  ];
  @property() heading = '';
  @property() eyebrow = '';
  @property() description = '';
  protected override render() {
    const hasHeader =
      this.heading ||
      this.eyebrow ||
      this.description ||
      this.querySelector('[slot=header]') ||
      this.querySelector('[slot=actions]');
    return html`<section class="panel surface" part="panel">
      ${
        hasHeader
          ? html`<header part="header">
              <div>
                <slot name="header"
                  >${this.eyebrow ? html`<p class="eyebrow">${this.eyebrow}</p>` : nothing}${this.heading ? html`<h2>${this.heading}</h2>` : nothing}${this.description ? html`<p class="description">${this.description}</p>` : nothing}</slot
                >
              </div>
              <slot name="actions"></slot>
            </header>`
          : nothing
      }
      <div part="body"><slot></slot></div>
    </section>`;
  }
}
