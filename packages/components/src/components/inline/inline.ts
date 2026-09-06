import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { gaps } from '../layout/shared.js';


export class KanonisInline extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    gaps,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--gap, var(--kanonis-space-3));
        flex-wrap: wrap;
      }
      :host([align='start']) {
        align-items: flex-start;
      }
      :host([align='end']) {
        align-items: flex-end;
      }
      :host([justify='start']) {
        justify-content: flex-start;
      }
      :host([justify='center']) {
        justify-content: center;
      }
      :host([justify='end']) {
        justify-content: flex-end;
      }
      :host([justify='between']) {
        justify-content: space-between;
      }
      :host([wrap='false']) {
        flex-wrap: nowrap;
      }
      @media ${mediaCompact} {
        :host([collapse-at-compact]) {
          align-items: stretch;
          flex-direction: column;
        }
      }
    `,
  ];
  @property({ reflect: true }) gap = '3';
  @property({ reflect: true }) align: 'start' | 'center' | 'end' = 'center';
  @property({ reflect: true }) justify: 'start' | 'center' | 'end' | 'between' = 'start';
  @property({ type: Boolean, reflect: true }) wrap = true;
  @property({ type: Boolean, reflect: true, attribute: 'collapse-at-compact' })
  collapseAtCompact = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
