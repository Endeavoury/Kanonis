import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { enterpriseSurface } from '../enterprise/shared.js';


export class KanonisBulkActions extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    enterpriseSurface,
    css`
      .surface {
        justify-content: space-between;
        flex-wrap: wrap;
        background: var(--kanonis-color-bg-selected);
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--kanonis-space-2);
      }
    `,
  ];
  @property({ type: Number }) count = 0;
  @property() selectedLabel = 'selected';
  @property() clearLabel = 'Clear selection';
  protected override render() {
    return html`<section class="surface" aria-live="polite">
      <strong>${this.count} ${this.selectedLabel}</strong>
      <div class="actions">
        <slot></slot
        ><button type="button" @click=${() => this.emit<void>('kanonis-clear-selection', undefined)}>
          ${this.clearLabel}
        </button>
      </div>
    </section>`;
  }
}
