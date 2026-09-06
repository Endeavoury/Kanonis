import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisQuickActions extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--kanonis-space-2);
        min-width: 0;
      }
    `,
  ];
  protected override render() {
    return html`<slot></slot>`;
  }
}
