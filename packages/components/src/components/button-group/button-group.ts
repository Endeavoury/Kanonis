import { controlFoundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisButtonGroup extends KanonisElement {
  static override styles: CSSResultGroup = [
    controlFoundationStyles,
    css`
      :host {
        display: inline-flex;
        align-items: stretch;
      }
      div {
        display: flex;
      }
      ::slotted(kanonis-button),
      ::slotted(kanonis-icon-button) {
        margin-inline-start: -1px;
      }
      ::slotted(:first-child) {
        margin-inline-start: 0;
      }
    `,
  ];
  @property() label = 'Actions';
  protected override render() {
    return html`<div role="group" aria-label=${this.label} part="group"><slot></slot></div>`;
  }
}
