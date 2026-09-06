import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


export class KanonisPane extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        display: flex;
        flex: 1 1 0;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: linear-gradient(
          180deg,
          color-mix(in srgb, var(--kanonis-color-bg-surface) 96%, var(--kanonis-color-accent-soft)),
          var(--kanonis-color-bg-canvas)
        );
        box-shadow: inset 0 1px 0 var(--kanonis-color-border-highlight);
        transition:
          flex-basis var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
          width var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
          opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      :host([position='left']) {
        order: -20;
        flex: 0 0 var(--kanonis-pane-size, var(--kanonis-pane-sidebar-width));
        border-right: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='right']) {
        order: 20;
        flex: 0 0 var(--kanonis-pane-size, var(--kanonis-pane-inspector-width));
        border-left: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='top']) {
        order: -20;
        flex: 0 0 var(--kanonis-pane-size, auto);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='bottom']) {
        order: 20;
        flex: 0 0 var(--kanonis-pane-size, auto);
        border-top: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='left']),
      :host([position='right']) {
        width: auto;
        max-width: 100%;
      }
      :host([position='top']),
      :host([position='bottom']) {
        height: auto;
        max-height: 100%;
      }
      :host([collapsed]) {
        display: none;
      }
    `,
  ];
  @property({ reflect: true }) position: 'left' | 'center' | 'right' | 'top' | 'bottom' = 'center';
  @property({ type: Boolean, reflect: true }) collapsed = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
