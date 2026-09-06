import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisListActivateDetail {
  value: string;
}

export class KanonisListItem extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      .item {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        gap: var(--kanonis-space-3);
        align-items: center;
        width: 100%;
        min-height: var(--kanonis-control-height-lg);
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        border: 0;
        border-radius: var(--kanonis-radius-md);
        background: transparent;
        color: var(--kanonis-color-text-primary);
        font: inherit;
        text-align: left;
        text-decoration: none;
      }
      button.item,
      a.item {
        cursor: pointer;
      }
      button.item:hover,
      a.item:hover {
        background: var(--kanonis-color-bg-hover);
      }
      :host([selected]) .item {
        background: var(--kanonis-color-bg-selected);
      }
      .content {
        min-width: 0;
      }
      .primary {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .supporting {
        margin-top: 0.125rem;
        overflow: hidden;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .leading,
      .trailing {
        display: inline-flex;
        color: var(--kanonis-color-text-muted);
      }
      :host([disabled]) {
        opacity: 0.5;
      }
    `,
  ];

  @property() value = '';
  @property() href = '';
  @property({ attribute: 'supporting-text' }) supportingText = '';
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  protected override updated() {
    this.setAttribute('role', 'listitem');
  }

  private activate(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.emit<KanonisListActivateDetail>('kanonis-list-activate', { value: this.value });
  }

  protected override render() {
    const content = html`<span class="leading"><slot name="leading"></slot></span
      ><span class="content"
        ><span class="primary"><slot></slot></span>${
          this.supportingText
            ? html`<span class="supporting">${this.supportingText}</span>`
            : nothing
        }</span
      ><span class="trailing"><slot name="trailing"></slot></span>`;
    if (this.href)
      return html`<a
        class="item"
        part="item"
        href=${this.href}
        aria-current=${this.selected ? 'page' : nothing}
        aria-disabled=${this.disabled ? 'true' : nothing}
        @click=${this.activate}
        >${content}</a
      >`;
    if (this.value)
      return html`<button
        class="item"
        part="item"
        type="button"
        ?disabled=${this.disabled}
        aria-pressed=${String(this.selected)}
        @click=${this.activate}
      >
        ${content}
      </button>`;
    return html`<div class="item" part="item">${content}</div>`;
  }
}
