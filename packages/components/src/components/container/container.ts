import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisContainer extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
        width: min(
          calc(100% - 2 * var(--kanonis-space-5)),
          var(--container, var(--kanonis-container-normal))
        );
        margin-inline: auto;
      }
      @media ${mediaCompact} {
        :host {
          width: min(
            calc(100% - 2 * var(--kanonis-space-4)),
            var(--container, var(--kanonis-container-normal))
          );
        }
      }
      :host([size='narrow']) {
        --container: var(--kanonis-container-narrow);
      }
      :host([size='wide']) {
        --container: var(--kanonis-container-wide);
      }
      :host([flush]) {
        width: 100%;
      }
    `,
  ];
  @property({ reflect: true }) size: 'narrow' | 'normal' | 'wide' = 'normal';
  @property({ type: Boolean, reflect: true }) flush = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
