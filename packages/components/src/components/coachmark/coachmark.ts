import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export class KanonisCoachmark extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      .mark {
        position: relative;
        padding: var(--kanonis-space-4);
      }
      .arrow {
        position: absolute;
        top: -0.4rem;
        left: 1.5rem;
        width: 0.8rem;
        height: 0.8rem;
        transform: rotate(45deg);
        border-top: 1px solid var(--kanonis-color-border-default);
        border-left: 1px solid var(--kanonis-color-border-default);
        background: var(--kanonis-color-bg-surface);
      }
      h2 {
        margin: 0 0 0.25rem;
        font-size: var(--kanonis-font-size-md);
      }
      p {
        margin: 0;
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
      }
    `,
  ];
  @property() heading = 'Tip';
  @property() message = 'Here is something useful to know.';
  protected override render() {
    return html`<aside class="mark surface" role="note">
      <span class="arrow" aria-hidden="true"></span>
      <h2>${this.heading}</h2>
      <p>${this.message}</p>
      <slot></slot>
    </aside>`;
  }
}
