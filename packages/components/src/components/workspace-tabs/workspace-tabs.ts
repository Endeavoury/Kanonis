import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export interface KanonisWorkspaceTab {
  id: string;
  label: string;
  closable?: boolean;
}

export class KanonisWorkspaceTabs extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      nav {
        display: flex;
        min-width: 0;
        gap: var(--kanonis-space-1);
        overflow-x: auto;
        padding: var(--kanonis-space-1);
      }
      .tab {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 0 0 auto;
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        border: 1px solid transparent;
        border-radius: var(--kanonis-radius-md);
        background: transparent;
        color: var(--kanonis-color-text-muted);
        cursor: pointer;
      }
      .tab[aria-selected='true'] {
        border-color: var(--kanonis-color-border-default);
        background: var(--kanonis-color-bg-surface);
        color: var(--kanonis-color-text-primary);
        box-shadow: var(--kanonis-shadow-control);
      }
      .close {
        min-height: 1.25rem;
        padding: 0 0.25rem;
        border: 0;
        background: transparent;
      }
    `,
  ];
  @property({ attribute: false }) tabs: KanonisWorkspaceTab[] = [];
  @property() value = '';
  private select(id: string) {
    this.value = id;
    this.emit<{ id: string }>('kanonis-tab-change', { id });
  }
  private close(id: string, event: Event) {
    event.stopPropagation();
    this.emit<{ id: string }>('kanonis-tab-close', { id });
  }
  protected override render() {
    return html`<nav class="surface" role="tablist" aria-label="Workspace tabs">
      ${this.tabs.map((tab) => html`<div class="tab" role="tab" tabindex="0" aria-selected=${tab.id === this.value} @click=${() => this.select(tab.id)}>${tab.label}${tab.closable ? html`<button class="close" type="button" aria-label=${`Close ${tab.label}`} @click=${(event: Event) => this.close(tab.id, event)}>×</button>` : nothing}</div>`)}
    </nav>`;
  }
}
