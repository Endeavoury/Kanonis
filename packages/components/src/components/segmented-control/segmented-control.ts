import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisValueDetail } from '../enhancements/shared.js';
import { KanonisSegment } from '../segment/segment.js';


export class KanonisSegmentedControl extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
        min-width: 0;
      }
      .group {
        display: inline-flex;
        max-width: 100%;
        gap: var(--kanonis-space-1);
        padding: var(--kanonis-space-1);
        overflow-x: auto;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-shape-surface);
        background: var(--kanonis-color-bg-surface-subtle);
      }
    `,
  ];
  @property() value = '';
  @property() label = 'Options';
  @queryAssignedElements({ selector: 'kanonis-segment' }) private segments!: KanonisSegment[];

  protected override firstUpdated() {
    this.addEventListener('kanonis-segment-request', this.selectRequested as EventListener);
    this.sync();
  }
  override disconnectedCallback() {
    this.removeEventListener('kanonis-segment-request', this.selectRequested as EventListener);
    super.disconnectedCallback();
  }
  private selectRequested = (event: CustomEvent<KanonisValueDetail>) => {
    event.stopPropagation();
    this.select(event.detail.value);
  };
  private sync() {
    const enabled = this.segments.filter((segment) => !segment.disabled);
    if (!this.value && enabled[0]) this.value = enabled[0].value;
    for (const segment of this.segments) segment.selected = segment.value === this.value;
  }
  private select(value: string, focus = false) {
    const segment = this.segments.find((item) => item.value === value && !item.disabled);
    if (!segment || value === this.value) return;
    this.value = value;
    this.sync();
    if (focus) segment.shadowRoot?.querySelector<HTMLButtonElement>('button')?.focus();
    this.emit<KanonisValueDetail>('kanonis-change', { value });
  }
  private keydown(event: KeyboardEvent) {
    const enabled = this.segments.filter((segment) => !segment.disabled);
    if (!enabled.length) return;
    const current = Math.max(
      0,
      enabled.findIndex((segment) => segment.value === this.value),
    );
    let next: number;
    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = enabled.length - 1;
    else if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      next = (current + 1) % enabled.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
      next = (current - 1 + enabled.length) % enabled.length;
    else return;
    event.preventDefault();
    this.select(enabled[next]?.value ?? '', true);
  }
  protected override render() {
    return html`<div
      class="group"
      role="radiogroup"
      aria-label=${this.label}
      @keydown=${this.keydown}
    >
      <slot @slotchange=${this.sync}></slot>
    </div>`;
  }
}
