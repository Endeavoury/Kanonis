import { foundationStyles, mediaMedium } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup, type PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisAppShell extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: relative;
        z-index: var(--kanonis-z-shell);
        display: grid;
        grid-template-columns: var(--kanonis-shell-sidebar-width) minmax(0, 1fr);
        width: 100%;
        height: 100dvh;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
        background:
          radial-gradient(
            circle at 76% -12%,
            color-mix(in srgb, var(--kanonis-color-accent-soft) 36%, transparent),
            transparent 34rem
          ),
          var(--kanonis-color-bg-canvas);
      }
      .sidebar {
        z-index: var(--kanonis-z-navigation);
        min-width: 0;
        min-height: 0;
        height: 100%;
        overflow: hidden;
        transition:
          transform var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
          opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          visibility 0s linear 0s;
      }
      ::slotted([slot='sidebar']) {
        width: 100%;
        max-width: 100%;
        min-width: 0;
        min-height: 0;
      }
      :host([sidebar-collapsed]) {
        grid-template-columns: 0 minmax(0, 1fr);
      }
      :host([sidebar-collapsed]) .sidebar {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transform: translateX(-100%);
        transition-delay: 0s, 0s, var(--kanonis-duration-normal);
      }
      .workspace {
        display: grid;
        grid-template-rows: auto minmax(0, 1fr);
        min-width: 0;
        min-height: 0;
        overflow: hidden;
      }
      .header {
        position: relative;
        z-index: var(--kanonis-z-pane-header);
        min-width: 0;
        min-height: 4.5rem;
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        background: color-mix(in srgb, var(--kanonis-color-bg-surface-subtle) 86%, transparent);
        box-shadow: 0 1px 0 color-mix(in srgb, var(--kanonis-color-border-highlight) 48%, transparent);
        backdrop-filter: blur(22px) saturate(130%);
      }
      .header {
        display: flex;
        align-items: center;
      }
      .header slot {
        flex: 1;
        min-width: 0;
      }
      .sidebar-toggle {
        flex: 0 0 auto;
        display: inline-grid;
        place-items: center;
        min-width: var(--kanonis-target-min-touch);
        min-height: var(--kanonis-target-min-touch);
        margin-inline: var(--kanonis-space-3) 0;
        padding: var(--kanonis-space-2);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface);
        color: var(--kanonis-color-text-primary);
        cursor: pointer;
      }
      .sidebar-toggle:hover {
        background: var(--kanonis-color-bg-hover);
      }
      .sidebar-toggle svg {
        width: 1.25rem;
        height: 1.25rem;
      }
      .header[hidden] {
        display: none;
      }
      .main {
        flex: 1 1 0;
        min-width: 0;
        min-height: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: var(--kanonis-color-border-strong) transparent;
        -webkit-overflow-scrolling: touch;
        padding: var(--kanonis-space-8);
      }
      .main::-webkit-scrollbar {
        width: var(--kanonis-scrollbar-size);
        height: var(--kanonis-scrollbar-size);
      }
      .main::-webkit-scrollbar-thumb {
        border: 0.1875rem solid transparent;
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-border-strong);
        background-clip: padding-box;
      }
      .workspace-body {
        position: relative;
        display: flex;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
      }
      slot[name='inspector'] {
        display: contents;
      }
      ::slotted([slot='inspector']) {
        flex: 0 0 auto;
        min-width: 0;
        min-height: 0;
        max-width: 100%;
      }
      :host([content-mode='pane']) .main {
        padding: 0;
        overflow: hidden;
        scrollbar-gutter: auto;
      }
      @media ${mediaMedium} {
        :host,
        :host([sidebar-collapsed]) {
          position: relative;
          grid-template-columns: minmax(0, 1fr);
        }
        .sidebar {
          position: absolute;
          z-index: var(--kanonis-z-navigation);
          inset: auto 0 0;
          height: auto;
        }
        :host([sidebar-collapsed]) .sidebar {
          transform: translateY(100%);
        }
        .header {
          min-height: 4rem;
        }
        .main {
          padding: var(--kanonis-space-4) var(--kanonis-space-3) calc(5rem + env(safe-area-inset-bottom));
        }
        :host([content-mode='pane']) .main {
          padding: 0 0 calc(5rem + env(safe-area-inset-bottom));
        }
        :host([sidebar-collapsed]) .main {
          padding-bottom: var(--kanonis-space-4);
        }
        :host([content-mode='pane'][sidebar-collapsed]) .main {
          padding: 0;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          transition: none !important;
        }
      }
    `,
  ];
  @property({ attribute: 'content-mode', reflect: true }) contentMode: 'scroll' | 'pane' = 'scroll';
  @property({ attribute: 'sidebar-collapsed', type: Boolean, reflect: true }) sidebarCollapsed =
    false;
  @property({ attribute: 'collapse-sidebar-label' }) collapseSidebarLabel = 'Collapse sidebar';
  @property({ attribute: 'expand-sidebar-label' }) expandSidebarLabel = 'Expand sidebar';
  @state() private hasHeader = false;
  @state() private hasSidebar = false;

  protected override updated(changed: PropertyValues<this>) {
    if (changed.has('sidebarCollapsed') && this.sidebarCollapsed) {
      const sidebar = this.querySelector('[slot="sidebar"]');
      if (sidebar?.contains(this.ownerDocument.activeElement)) {
        this.shadowRoot?.querySelector<HTMLButtonElement>('.sidebar-toggle')?.focus();
      }
    }
  }

  private handleSidebarSlot(event: Event) {
    this.hasSidebar = (event.currentTarget as HTMLSlotElement).assignedElements().length > 0;
  }

  private toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.emit<{ collapsed: boolean }>('kanonis-sidebar-toggle', { collapsed: this.sidebarCollapsed });
  }

  private handleHeaderSlot(event: Event) {
    this.hasHeader = (event.currentTarget as HTMLSlotElement).assignedElements().length > 0;
  }

  protected override render() {
    return html`<aside
        id="sidebar"
        class="sidebar"
        part="sidebar"
        ?inert=${this.sidebarCollapsed}
        aria-hidden=${this.sidebarCollapsed ? 'true' : nothing}
      >
        <slot name="sidebar" @slotchange=${this.handleSidebarSlot}></slot>
      </aside>
      <section class="workspace">
        <header class="header" part="header" ?hidden=${!this.hasHeader && !this.hasSidebar}>
          ${
            this.hasSidebar
              ? html`<button
                  class="sidebar-toggle"
                  part="sidebar-toggle"
                  type="button"
                  aria-label=${this.sidebarCollapsed ? this.expandSidebarLabel : this.collapseSidebarLabel}
                  title=${this.sidebarCollapsed ? this.expandSidebarLabel : this.collapseSidebarLabel}
                  aria-expanded=${String(!this.sidebarCollapsed)}
                  aria-controls="sidebar"
                  @click=${this.toggleSidebar}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.7"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="M9 4v16"></path>
                    <path d=${this.sidebarCollapsed ? 'm13 9 3 3-3 3' : 'm16 9-3 3 3 3'}></path>
                  </svg>
                </button>`
              : nothing
          }
          <slot name="header" @slotchange=${this.handleHeaderSlot}></slot>
        </header>
        <div class="workspace-body" part="workspace">
          <main class="main" part="main"><slot></slot></main>
          <slot name="inspector"></slot>
        </div>
      </section>`;
  }
}
