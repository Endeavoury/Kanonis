import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


export class KanonisPaneGroup extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        overflow: hidden;
        isolation: isolate;
      }
      :host([orientation='vertical']) {
        flex-direction: column;
      }
      ::slotted(*) {
        min-width: 0;
        min-height: 0;
      }
    `,
  ];
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  protected override render() {
    return html`<slot></slot>`;
  }
}
