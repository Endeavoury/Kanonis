import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisBreadcrumbs extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
        min-width: 0;
      }
      nav {
        overflow-x: auto;
      }
      .list {
        display: flex;
        gap: var(--kanonis-space-2);
        align-items: center;
        width: max-content;
        min-width: 100%;
      }
    `,
  ];

  @property() label = 'Breadcrumb';

  protected override render() {
    return html`<nav part="navigation" aria-label=${this.label}>
      <div class="list" role="list"><slot></slot></div>
    </nav>`;
  }
}
