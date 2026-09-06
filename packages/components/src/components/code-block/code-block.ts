import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisCodeBlock extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host { display: block; min-width: 0; }
      figure { margin: 0; overflow: hidden; border: 1px solid var(--kanonis-color-border-default); border-radius: var(--kanonis-radius-lg); background: var(--kanonis-color-bg-inverse); color: var(--kanonis-color-text-inverse); }
      figcaption { display: flex; justify-content: space-between; gap: var(--kanonis-space-3); padding: var(--kanonis-space-2) var(--kanonis-space-4); border-bottom: 1px solid color-mix(in srgb, currentColor 16%, transparent); color: color-mix(in srgb, currentColor 72%, transparent); font-size: var(--kanonis-font-size-xs); }
      pre { max-width: 100%; margin: 0; padding: var(--kanonis-space-4); overflow: auto; font-family: var(--kanonis-font-mono); font-size: var(--kanonis-font-size-sm); line-height: var(--kanonis-line-height-normal); tab-size: 2; }
      :host([wrap]) pre { white-space: pre-wrap; overflow-wrap: anywhere; }
      pre:focus-visible { outline: 2px solid var(--kanonis-color-focus); outline-offset: -2px; }
    `,
  ];
  @property() label = '';
  @property() language = '';
  @property({ type: Boolean, reflect: true }) wrap = false;
  protected override render() {
    const accessibleLabel = this.label || (this.language ? `${this.language} code` : 'Code');
    return html`<figure part="block">
      ${this.label || this.language ? html`<figcaption part="caption"><span>${this.label}</span><span>${this.language}</span></figcaption>` : nothing}
      <pre part="content" tabindex="0" aria-label=${accessibleLabel}><code><slot></slot></code></pre>
    </figure>`;
  }
}
