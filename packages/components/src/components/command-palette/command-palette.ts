import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export interface KanonisCommand {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
}

export const overlayStyles = css`
  :host {
    position: fixed;
    z-index: var(--kanonis-z-overlay);
    inset: 0;
    display: grid;
    place-items: start center;
    padding: min(16vh, 8rem) var(--kanonis-space-4);
    pointer-events: none;
  }
  :host([open]) {
    pointer-events: auto;
  }
  .backdrop {
    position: absolute;
    inset: 0;
    background: var(--kanonis-color-overlay);
    opacity: 0;
    transition: opacity var(--kanonis-duration-normal) var(--kanonis-ease-standard);
  }
  :host([open]) .backdrop {
    opacity: 1;
  }
  .panel {
    position: relative;
    width: min(100%, 42rem);
    max-height: min(70dvh, 40rem);
    overflow: hidden;
    border: 1px solid var(--kanonis-color-border-default);
    border-radius: var(--kanonis-radius-xl);
    background: var(--kanonis-color-bg-elevated);
    box-shadow: var(--kanonis-shadow-lg);
    transform: translateY(-0.5rem) scale(0.98);
    opacity: 0;
    transition:
      transform var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
      opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard);
  }
  :host([open]) .panel {
    transform: none;
    opacity: 1;
  }
  @media (prefers-reduced-motion: reduce) {
    .backdrop,
    .panel {
      transition: none;
    }
  }
`;

export class KanonisCommandPalette extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    overlayStyles,
    css`
      .search {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-3);
        padding: var(--kanonis-space-4);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      input {
        width: 100%;
        height: var(--kanonis-control-height-lg);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-primary);
      }
      ul {
        max-height: 28rem;
        overflow: auto;
        margin: 0;
        padding: var(--kanonis-space-2);
        list-style: none;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--kanonis-space-3);
        padding: var(--kanonis-space-3);
        border-radius: var(--kanonis-radius-md);
        cursor: pointer;
      }
      li[data-active],
      li:hover {
        background: var(--kanonis-color-bg-selected);
      }
      .copy {
        min-width: 0;
      }
      .description {
        display: block;
        margin-top: 0.125rem;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      kbd {
        flex: 0 0 auto;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ attribute: false }) commands: KanonisCommand[] = [];
  @property() placeholder = 'Search commands';
  @property() closeLabel = 'Close command palette';
  @state() private query = '';
  @state() private activeIndex = 0;
  private filteredCommands() {
    const query = this.query.trim().toLocaleLowerCase();
    return this.commands.filter(
      (command) =>
        !query ||
        `${command.label} ${command.description ?? ''}`.toLocaleLowerCase().includes(query),
    );
  }
  private keydown(event: KeyboardEvent) {
    const matches = this.filteredCommands();
    if (event.key === 'Escape') {
      event.preventDefault();
      this.open = false;
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (matches.length)
        this.activeIndex =
          (this.activeIndex + (event.key === 'ArrowDown' ? 1 : -1) + matches.length) %
          matches.length;
    } else if (event.key === 'Enter' && matches[this.activeIndex]) {
      this.select(matches[this.activeIndex]!);
    }
  }
  private select(command: KanonisCommand) {
    this.emit<{ id: string }>('kanonis-command-select', { id: command.id });
    this.open = false;
  }
  protected override render() {
    const matches = this.filteredCommands();
    return html`<button
        class="backdrop"
        aria-label=${this.closeLabel}
        @click=${() => (this.open = false)}
      ></button>
      <section class="panel" role="dialog" aria-label="Command palette" aria-modal="true">
        <div class="search">
          <input
            type="search"
            placeholder=${this.placeholder}
            .value=${this.query}
            @input=${(event: Event) => {
              this.query = (event.target as HTMLInputElement).value;
              this.activeIndex = 0;
            }}
            @keydown=${this.keydown}
          />
        </div>
        <ul>
          ${
            matches.length
              ? matches.map(
                  (command, index) =>
                    html`<li
                      data-active=${index === this.activeIndex ? '' : nothing}
                      @click=${() => this.select(command)}
                    >
                      <span class="copy"
                        ><strong>${command.label}</strong
                        >${command.description ? html`<span class="description">${command.description}</span>` : nothing}</span
                      >${command.shortcut ? html`<kbd>${command.shortcut}</kbd>` : nothing}
                    </li>`,
                )
              : html`<li class="muted">No matching commands</li>`
          }
        </ul>
      </section>`;
  }
}
