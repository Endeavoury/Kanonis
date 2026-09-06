import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export interface KanonisFieldItem {
  id: string;
  label: string;
  value?: string;
}

export class KanonisFieldArray extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      .array {
        display: grid;
        gap: var(--kanonis-space-3);
      }
      .row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: var(--kanonis-space-2);
        align-items: end;
        padding: var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-subtle);
        border-radius: var(--kanonis-radius-md);
      }
      label {
        display: grid;
        gap: 0.25rem;
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
      }
      input {
        min-height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-primary);
      }
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--kanonis-space-3);
      }
    `,
  ];
  @property({ attribute: false }) items: KanonisFieldItem[] = [];
  @property() label = 'Items';
  @property() addLabel = 'Add item';
  private add() {
    this.items = [...this.items, { id: `item-${Date.now()}`, label: '', value: '' }];
    this.emit<KanonisFieldItem[]>('kanonis-items-change', this.items);
  }
  private removeItem(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    this.emit<KanonisFieldItem[]>('kanonis-items-change', this.items);
  }
  private change(id: string, value: string) {
    this.items = this.items.map((item) => (item.id === id ? { ...item, value } : item));
    this.emit<KanonisFieldItem[]>('kanonis-items-change', this.items);
  }
  protected override render() {
    return html`<section class="array" aria-label=${this.label}>
      ${this.items.map(
        (item) =>
          html`<div class="row">
            <label
              >${item.label || 'Value'}<input
                .value=${item.value ?? ''}
                @input=${(event: Event) => this.change(item.id, (event.target as HTMLInputElement).value)} /></label
            ><button
              type="button"
              aria-label="Remove item"
              @click=${() => this.removeItem(item.id)}
            >
              ×
            </button>
          </div>`,
      )}
      <div class="footer">
        <span class="muted">${this.items.length} item${this.items.length === 1 ? '' : 's'}</span
        ><button type="button" @click=${this.add}>${this.addLabel}</button>
      </div>
    </section>`;
  }
}
