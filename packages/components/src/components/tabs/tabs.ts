import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup, type PropertyValues } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { KanonisTab } from '../tab/tab.js';


export interface KanonisTabChangeDetail {
  value: string;
}

export let tabsId = 0;

export class KanonisTabs extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
        min-width: 0;
      }
      .tablist {
        display: flex;
        gap: var(--kanonis-space-1);
        max-width: 100%;
        padding: var(--kanonis-space-1);
        overflow-x: auto;
        border: 1px solid var(--kanonis-color-border-subtle);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-sunken);
        scrollbar-width: thin;
      }
      button {
        flex: 0 0 auto;
        min-height: var(--kanonis-control-height-sm);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid transparent;
        border-radius: var(--kanonis-radius-sm);
        background: transparent;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
        font-weight: var(--kanonis-font-weight-semibold);
        cursor: pointer;
      }
      button:hover:not(:disabled) {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
      button[aria-selected='true'] {
        border-color: var(--kanonis-color-border-default);
        background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-control);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .panels {
        margin-top: var(--kanonis-space-4);
      }
    `,
  ];

  @property({ reflect: true }) value = '';
  @property() label = 'Sections';
  @queryAssignedElements({ selector: 'kanonis-tab' }) private assignedTabs!: KanonisTab[];
  @state() private tabs: KanonisTab[] = [];
  private readonly instanceId = `kanonis-tabs-${++tabsId}`;

  private syncTabs() {
    this.tabs = [...this.assignedTabs];
    const enabled = this.tabs.filter((tab) => !tab.disabled);
    if (!enabled.some((tab) => tab.value === this.value)) this.value = enabled[0]?.value ?? '';
    this.syncTabState();
  }

  private syncTabState() {
    this.tabs.forEach((tab) => {
      tab.active = tab.value === this.value;
    });
  }

  protected override updated(changed: PropertyValues<this>) {
    if (changed.has('value')) this.syncTabState();
  }

  private select(tab: KanonisTab, focus = false) {
    if (tab.disabled || tab.value === this.value) return;
    this.value = tab.value;
    this.emit<KanonisTabChangeDetail>('kanonis-tab-change', { value: tab.value });
    if (focus)
      void this.updateComplete.then(() =>
        this.shadowRoot
          ?.querySelector<HTMLButtonElement>(`button[data-value="${CSS.escape(tab.value)}"]`)
          ?.focus(),
      );
  }

  private keydown(event: KeyboardEvent) {
    const enabled = this.tabs.filter((tab) => !tab.disabled);
    if (!enabled.length) return;
    const current = Math.max(
      0,
      enabled.findIndex((tab) => tab.value === this.value),
    );
    let next: number | undefined;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      next = (current + 1) % enabled.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
      next = (current - 1 + enabled.length) % enabled.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = enabled.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    this.select(enabled[next]!, true);
  }

  protected override render() {
    return html`<div
        class="tablist"
        part="tablist"
        role="tablist"
        aria-label=${this.label}
        @keydown=${this.keydown}
      >
        ${this.tabs.map(
          (tab, index) =>
            html`<button
              id=${`${this.instanceId}-tab-${index}`}
              part="tab"
              type="button"
              role="tab"
              data-value=${tab.value}
              aria-selected=${String(tab.value === this.value)}
              tabindex=${tab.value === this.value ? 0 : -1}
              ?disabled=${tab.disabled}
              @click=${() => this.select(tab)}
            >
              ${tab.label}
            </button>`,
        )}
      </div>
      <div class="panels" part="panels"><slot @slotchange=${this.syncTabs}></slot></div>`;
  }
}
