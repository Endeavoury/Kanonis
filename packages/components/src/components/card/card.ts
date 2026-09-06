import { foundationStyles, surfaceStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisCard extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    css`
      :host {
        display: block;
      }
      .card {
        overflow: hidden;
      }
      .header,
      .body,
      .footer {
        padding: var(--kanonis-space-5);
      }
      .header {
        display: flex;
        justify-content: space-between;
        gap: var(--kanonis-space-4);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        background: color-mix(in srgb, var(--kanonis-color-bg-elevated) 34%, transparent);
      }
      .footer {
        border-top: 1px solid var(--kanonis-color-border-subtle);
        background: color-mix(in srgb, var(--kanonis-color-bg-surface-subtle) 50%, transparent);
      }
      [hidden] {
        display: none;
      }
      :host([padding='none']) .body {
        padding: 0;
      }
      :host([padding='compact']) .body {
        padding: var(--kanonis-space-3);
      }
    `,
  ];
  @property({ reflect: true }) padding: 'none' | 'compact' | 'normal' = 'normal';
  @state() private hasHeader = false;
  @state() private hasFooter = false;
  private syncSlots() {
    const hasAssignedContent = (name: string) =>
      (
        this.shadowRoot
          ?.querySelector<HTMLSlotElement>(`slot[name='${name}']`)
          ?.assignedNodes({ flatten: true }) ?? []
      ).some((node) => node.nodeType === Node.ELEMENT_NODE || Boolean(node.textContent?.trim()));
    this.hasHeader = hasAssignedContent('header') || hasAssignedContent('actions');
    this.hasFooter = hasAssignedContent('footer');
  }
  protected override render() {
    return html`<article class="card surface" part="card">
      <div class="header" part="header" ?hidden=${!this.hasHeader}>
        <slot name="header" @slotchange=${this.syncSlots}></slot
        ><slot name="actions" @slotchange=${this.syncSlots}></slot>
      </div>
      <div class="body" part="body"><slot></slot></div>
      <div class="footer" part="footer" ?hidden=${!this.hasFooter}>
        <slot name="footer" @slotchange=${this.syncSlots}></slot>
      </div>
    </article>`;
  }
}
