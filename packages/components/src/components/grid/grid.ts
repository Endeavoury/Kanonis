import { foundationStyles, mediaCompact, mediaExpanded } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { gaps } from '../layout/shared.js';


export class KanonisGrid extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    gaps,
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(var(--columns, 3), minmax(0, 1fr));
        gap: var(--gap, var(--kanonis-space-4));
      }
      :host([columns='1']) {
        --columns: 1;
      }
      :host([columns='2']) {
        --columns: 2;
      }
      :host([columns='3']) {
        --columns: 3;
      }
      :host([columns='4']) {
        --columns: 4;
      }
      :host([columns='6']) {
        --columns: 6;
      }
      @media ${mediaExpanded} {
        :host([responsive]) {
          grid-template-columns: repeat(var(--medium-columns, 2), minmax(0, 1fr));
        }
      }
      @media ${mediaCompact} {
        :host([responsive]) {
          grid-template-columns: repeat(var(--compact-columns, 1), minmax(0, 1fr));
        }
      }
    `,
  ];
  @property({ reflect: true }) columns = '3';
  @property({ reflect: true, attribute: 'medium-columns' }) mediumColumns = '2';
  @property({ reflect: true, attribute: 'compact-columns' }) compactColumns = '1';
  @property({ reflect: true }) gap = '4';
  @property({ type: Boolean, reflect: true }) responsive = true;
  protected override updated(changed: PropertyValues<this>) {
    if (changed.has('mediumColumns'))
      this.style.setProperty('--medium-columns', this.mediumColumns);
    if (changed.has('compactColumns'))
      this.style.setProperty('--compact-columns', this.compactColumns);
  }
  protected override render() {
    return html`<slot></slot>`;
  }
}
