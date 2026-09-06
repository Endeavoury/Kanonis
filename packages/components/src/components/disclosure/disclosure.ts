import { foundationStyles, surfaceStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisDisclosureChangeDetail {
  open: boolean;
}

export class KanonisDisclosure extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    css`
      :host {
        display: block;
      }
      details {
        overflow: clip;
      }
      summary {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: var(--kanonis-space-3);
        align-items: center;
        min-height: var(--kanonis-control-height-lg);
        padding: var(--kanonis-space-3) var(--kanonis-space-4);
        color: var(--kanonis-color-text-primary);
        font-size: var(--kanonis-font-size-md);
        font-weight: var(--kanonis-font-weight-semibold);
        cursor: pointer;
        list-style: none;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      summary:hover {
        background: var(--kanonis-color-bg-hover);
      }
      .chevron {
        color: var(--kanonis-color-text-muted);
        transition: transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      details[open] .chevron {
        transform: rotate(180deg);
      }
      .content {
        padding: 0 var(--kanonis-space-4) var(--kanonis-space-4);
        border-top: 1px solid var(--kanonis-color-border-subtle);
        color: var(--kanonis-color-text-secondary);
      }
      :host([disabled]) {
        opacity: 0.55;
      }
      :host([disabled]) summary {
        cursor: not-allowed;
      }
    `,
  ];

  @property() summary = '';
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private beforeToggle(event: Event) {
    if (!this.disabled) return;
    event.preventDefault();
  }

  private toggled(event: Event) {
    if (this.disabled) return;
    const open = (event.currentTarget as HTMLDetailsElement).open;
    if (open === this.open) return;
    this.open = open;
    this.emit<KanonisDisclosureChangeDetail>('kanonis-disclosure-change', { open: this.open });
  }

  protected override render() {
    return html`<details
      class="surface"
      part="details"
      .open=${this.open}
      @click=${this.beforeToggle}
      @toggle=${this.toggled}
    >
      <summary part="summary" aria-disabled=${String(this.disabled)}>
        <span><slot name="summary">${this.summary}</slot></span
        ><span class="chevron" aria-hidden="true">⌄</span>
      </summary>
      <div class="content" part="content"><slot></slot></div>
    </details>`;
  }
}
