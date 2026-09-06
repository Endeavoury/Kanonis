import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { enterpriseSurface } from '../enterprise/shared.js';


export interface KanonisColumnOption {
  key: string;
  label: string;
  visible?: boolean;
}

export class KanonisColumnManager extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    enterpriseSurface,
    css`
      .surface {
        display: grid;
        gap: var(--kanonis-space-2);
        align-items: stretch;
      }
      label {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        padding: var(--kanonis-space-2);
        border-radius: var(--kanonis-radius-sm);
        cursor: pointer;
      }
      label:hover {
        background: var(--kanonis-color-bg-hover);
      }
      input {
        accent-color: var(--kanonis-color-accent-primary);
      }
    `,
  ];
  @property({ attribute: false }) columns: KanonisColumnOption[] = [];
  @property() label = 'Columns';
  private toggle(key: string, visible: boolean) {
    this.columns = this.columns.map((column) =>
      column.key === key ? { ...column, visible } : column,
    );
    this.emit<KanonisColumnOption[]>('kanonis-columns-change', this.columns);
  }
  protected override render() {
    return html`<section class="surface" aria-label=${this.label}>
      ${this.columns.map((column) => html`<label><input type="checkbox" .checked=${column.visible !== false} @change=${(event: Event) => this.toggle(column.key, (event.target as HTMLInputElement).checked)} />${column.label}</label>`)}
    </section>`;
  }
}
