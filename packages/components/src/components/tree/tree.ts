import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisTree extends KanonisElement {
  static override styles: CSSResultGroup = [foundationStyles, css`
    :host { display: block; }
    [role='tree'] { display: grid; gap: var(--kanonis-space-1); }
  `];
  @property() label = 'Navigation tree';
  protected override render() {
    return html`<div role="tree" aria-label=${this.label} part="tree"><slot></slot></div>`;
  }
}
