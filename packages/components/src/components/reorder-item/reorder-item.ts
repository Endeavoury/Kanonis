import { foundationStyles, surfaceStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisReorderItem extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    css`
      :host {
        display: block;
      }
      .item {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
      }
      .content {
        min-width: 0;
        flex: 1 1 auto;
      }
      .handle {
        color: var(--kanonis-color-text-muted);
        cursor: grab;
      }
      .moves {
        display: inline-flex;
        gap: var(--kanonis-space-1);
      }
      button {
        min-width: var(--kanonis-target-min-touch);
        min-height: var(--kanonis-target-min-touch);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-shape-control);
        background: var(--kanonis-color-bg-surface);
        color: var(--kanonis-color-text-primary);
        cursor: pointer;
      }
      :host([dragging]) {
        opacity: 0.4;
      }
    `,
  ];
  @property({ reflect: true }) value = '';
  @property() label = '';
  @property({ type: Boolean, reflect: true }) dragging = false;
  override connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute('role')) this.setAttribute('role', 'listitem');
  }
  private move(direction: -1 | 1) {
    this.emit<{ value: string; direction: -1 | 1 }>('kanonis-reorder-request', {
      value: this.value,
      direction,
    });
  }
  protected override render() {
    return html`<article class="item surface">
      <span class="handle" aria-hidden="true">⠿</span>
      <div class="content"><slot>${this.label}</slot></div>
      <div class="moves" aria-label=${`Move ${this.label || this.value}`}>
        <button
          type="button"
          aria-label=${`Move ${this.label || this.value} earlier`}
          @click=${() => this.move(-1)}
        >
          ↑
        </button>
        <button
          type="button"
          aria-label=${`Move ${this.label || this.value} later`}
          @click=${() => this.move(1)}
        >
          ↓
        </button>
      </div>
    </article>`;
  }
}
