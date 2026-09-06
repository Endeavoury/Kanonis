import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


/** A vertical composition of panes. Set split to 40/60, 60/40, 30/70, or 70/30. */
export class KanonisPaneStack extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        display: grid;
        grid-template-rows: 1fr 1fr;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
        transition: grid-template-rows var(--kanonis-duration-normal) var(--kanonis-ease-emphasized);
      }
      ::slotted(*) {
        min-width: 0;
        min-height: 0;
      }
      ::slotted(kanonis-pane:not(:last-child)) {
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([split='40/60']) {
        grid-template-rows: 40fr 60fr;
      }
      :host([split='60/40']) {
        grid-template-rows: 60fr 40fr;
      }
      :host([split='30/70']) {
        grid-template-rows: 30fr 70fr;
      }
      :host([split='70/30']) {
        grid-template-rows: 70fr 30fr;
      }
    `,
  ];
  @property({ reflect: true }) split: '50/50' | '40/60' | '60/40' | '30/70' | '70/30' = '50/50';
  protected override render() {
    return html`<slot></slot>`;
  }
}
