import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisInputGroup extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: flex;
        min-width: 0;
        align-items: stretch;
      }
      .group {
        display: flex;
        width: 100%;
        min-width: 0;
        align-items: stretch;
        overflow: hidden;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-shape-control);
        background: var(--kanonis-color-bg-surface-subtle);
        box-shadow: var(--kanonis-shadow-control);
      }
      .affix {
        display: flex;
        align-items: center;
        padding-inline: var(--kanonis-space-3);
        color: var(--kanonis-color-text-muted);
      }
      .prefix {
        border-inline-end: 1px solid var(--kanonis-color-border-subtle);
      }
      .suffix {
        border-inline-start: 1px solid var(--kanonis-color-border-subtle);
      }
      .control {
        min-width: 0;
        flex: 1 1 auto;
      }
      ::slotted(*) {
        height: 100%;
      }
    `,
  ];
  @property() label = 'Input group';
  protected override render() {
    return html`<div class="group" role="group" aria-label=${this.label}>
      <span class="affix prefix"><slot name="prefix"></slot></span>
      <span class="control"><slot></slot></span>
      <span class="affix suffix"><slot name="suffix"></slot></span>
    </div>`;
  }
}
