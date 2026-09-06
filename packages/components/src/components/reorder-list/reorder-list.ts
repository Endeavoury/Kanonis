import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { announce } from '../../core/accessibility.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { KanonisReorderItem } from '../reorder-item/reorder-item.js';


export interface KanonisReorderDetail {
  value: string;
  fromIndex: number;
  toIndex: number;
  values: string[];
}

export class KanonisReorderList extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: grid;
        gap: var(--kanonis-space-2);
      }
      .list {
        display: grid;
        gap: var(--kanonis-space-2);
      }
    `,
  ];
  @property() label = 'Reorder items';
  @queryAssignedElements({ selector: 'kanonis-reorder-item' }) private items!: KanonisReorderItem[];
  private dragged?: KanonisReorderItem;

  protected override firstUpdated() {
    this.addEventListener('kanonis-reorder-request', this.request as EventListener);
    this.configure();
  }
  override disconnectedCallback() {
    this.removeEventListener('kanonis-reorder-request', this.request as EventListener);
    super.disconnectedCallback();
  }
  private configure() {
    for (const item of this.items) {
      item.draggable = true;
      item.ondragstart = (event) => {
        this.dragged = item;
        item.dragging = true;
        event.dataTransfer?.setData('text/plain', item.value);
      };
      item.ondragend = () => {
        item.dragging = false;
        this.dragged = undefined;
      };
      item.ondragover = (event) => event.preventDefault();
      item.ondrop = (event) => {
        event.preventDefault();
        if (!this.dragged || this.dragged === item) return;
        this.move(this.items.indexOf(this.dragged), this.items.indexOf(item));
      };
    }
  }
  private request = (event: CustomEvent<{ value: string; direction: -1 | 1 }>) => {
    event.stopPropagation();
    const from = this.items.findIndex((item) => item.value === event.detail.value);
    this.move(from, from + event.detail.direction);
  };
  private move(fromIndex: number, toIndex: number) {
    if (fromIndex < 0 || toIndex < 0 || toIndex >= this.items.length || fromIndex === toIndex)
      return;
    const item = this.items[fromIndex];
    const target = this.items[toIndex];
    if (!item || !target) return;
    if (toIndex > fromIndex) target.after(item);
    else target.before(item);
    const values = this.items.map((entry) => entry.value);
    const detail = { value: item.value, fromIndex, toIndex, values };
    announce(
      `${item.label || item.value} moved to position ${toIndex + 1} of ${this.items.length}`,
      {
        document: this.ownerDocument,
      },
    );
    item.shadowRoot?.querySelector<HTMLButtonElement>('button')?.focus();
    this.emit<KanonisReorderDetail>('kanonis-reorder', detail);
    this.requestUpdate();
  }
  protected override render() {
    return html`<div class="list" role="list" aria-label=${this.label}>
      <slot @slotchange=${this.configure}></slot>
    </div>`;
  }
}
