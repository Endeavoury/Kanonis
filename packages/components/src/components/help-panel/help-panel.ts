import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export class KanonisHelpPanel extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      .panel {
        padding: var(--kanonis-space-5);
      }
      h2 {
        margin: 0 0 var(--kanonis-space-2);
        font-size: var(--kanonis-font-size-lg);
      }
      .body {
        color: var(--kanonis-color-text-secondary);
      }
      .links {
        display: flex;
        flex-wrap: wrap;
        gap: var(--kanonis-space-2);
        margin-top: var(--kanonis-space-4);
      }
    `,
  ];
  @property() heading = 'Need help?';
  @property() description = 'Find answers and guidance for this workspace.';
  protected override render() {
    return html`<aside class="panel surface">
      <h2>${this.heading}</h2>
      <p class="body">${this.description}</p>
      <div class="links"><slot name="links"></slot></div>
      <slot></slot>
    </aside>`;
  }
}
