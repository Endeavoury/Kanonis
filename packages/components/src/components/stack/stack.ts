import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { gaps } from '../layout/shared.js';


export class KanonisStack extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    gaps,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--gap, var(--kanonis-space-4));
      }
      :host([align='start']) {
        align-items: flex-start;
      }
      :host([align='center']) {
        align-items: center;
      }
      :host([align='end']) {
        align-items: flex-end;
      }
      :host([align='stretch']) {
        align-items: stretch;
      }
    `,
  ];
  @property({ reflect: true }) gap = '4';
  @property({ reflect: true }) align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  protected override render() {
    return html`<slot></slot>`;
  }
}
