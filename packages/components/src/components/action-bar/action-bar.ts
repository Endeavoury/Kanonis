import { foundationStyles, mediaCompact, responsiveBreakpoints } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisActionBar extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: var(--kanonis-space-2);
      }
      .actions {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: var(--kanonis-space-2);
        overflow: hidden;
      }
      details {
        position: relative;
        flex: 0 0 auto;
      }
      details:not([data-has-overflow]) {
        display: none;
      }
      summary {
        display: grid;
        min-width: var(--kanonis-control-height-md);
        min-height: var(--kanonis-control-height-md);
        place-items: center;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-shape-control);
        background: var(--kanonis-color-bg-surface);
        cursor: pointer;
        list-style: none;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      .overflow {
        position: absolute;
        z-index: var(--kanonis-z-dropdown);
        inset-block-start: calc(100% + var(--kanonis-space-1));
        inset-inline-end: 0;
        display: grid;
        min-width: 12rem;
        gap: var(--kanonis-space-1);
        padding: var(--kanonis-space-2);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-shape-surface);
        background: var(--kanonis-color-bg-elevated);
        box-shadow: var(--kanonis-elevation-overlay);
      }
      ::slotted([slot='overflow']) {
        width: 100%;
      }
      @media ${mediaCompact} {
        :host([collapse-at-compact]) ::slotted([data-overflow]) {
          display: none;
        }
        :host([collapse-at-compact]) details {
          display: block;
        }
      }
    `,
  ];
  @property() label = 'Actions';
  @property({ type: Boolean, reflect: true, attribute: 'collapse-at-compact' })
  collapseAtCompact = false;
  @query('.actions') private actionContainer!: HTMLElement;
  @state() private hasOverflow = false;
  private observer?: ResizeObserver;
  private reflowQueued = false;
  private autoOverflow = new Set<HTMLElement>();

  protected override firstUpdated() {
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(() => this.reflow());
      this.observer.observe(this);
    }
    this.reflow();
  }
  override disconnectedCallback() {
    this.observer?.disconnect();
    super.disconnectedCallback();
  }
  private reflow() {
    if (this.reflowQueued) return;
    this.reflowQueued = true;
    globalThis.setTimeout(() => {
      this.reflowQueued = false;
      const compact =
        this.collapseAtCompact &&
        globalThis.matchMedia?.(`(max-width: ${responsiveBreakpoints.compact})`).matches;
      for (const child of this.autoOverflow) {
        child.slot = '';
        child.removeAttribute('data-auto-overflow');
      }
      this.autoOverflow.clear();
      for (const child of this.children) {
        if (child instanceof HTMLElement && child.hasAttribute('data-overflow')) {
          const slot = compact ? 'overflow' : '';
          if (child.slot !== slot) child.slot = slot;
        }
      }
      const candidates = [...this.children]
        .filter(
          (child): child is HTMLElement =>
            child instanceof HTMLElement &&
            child.slot !== 'overflow' &&
            child.getAttribute('data-priority') !== 'primary',
        )
        .reverse();
      while (
        this.actionContainer.scrollWidth > this.actionContainer.clientWidth &&
        candidates.length
      ) {
        const child = candidates.shift();
        if (!child) break;
        child.slot = 'overflow';
        child.setAttribute('data-auto-overflow', '');
        this.autoOverflow.add(child);
      }
      const hasOverflow = this.querySelector('[slot="overflow"]') !== null;
      if (this.hasOverflow !== hasOverflow) this.hasOverflow = hasOverflow;
    });
  }
  protected override render() {
    return html`<div class="actions" role="toolbar" aria-label=${this.label}>
        <slot @slotchange=${this.reflow}></slot>
      </div>
      <details ?data-has-overflow=${this.hasOverflow}>
        <summary aria-label="More actions">•••</summary>
        <div class="overflow"><slot name="overflow" @slotchange=${this.reflow}></slot></div>
      </details>`;
  }
}
