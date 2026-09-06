import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export type KanonisTheme = 'light' | 'dark';

export interface KanonisThemeChangeDetail {
  theme: KanonisTheme;
}

export class KanonisThemeToggle extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      button {
        display: grid;
        place-items: center;
        width: var(--kanonis-control-height-md);
        height: var(--kanonis-control-height-md);
        padding: 0;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
        color: var(--kanonis-color-text-secondary);
        box-shadow: var(--kanonis-shadow-control);
        cursor: pointer;
        transition:
          background var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          border-color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          transform var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      button:hover {
        border-color: var(--kanonis-color-border-strong);
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
        transform: translateY(-1px);
      }
      button:active {
        transform: translateY(1px);
      }
      .glyph {
        width: var(--kanonis-icon-md);
        height: var(--kanonis-icon-md);
        font-size: 1.05rem;
        line-height: 0.9;
      }
    `,
  ];

  @property({ reflect: true }) theme: KanonisTheme = 'dark';
  @property({ attribute: 'light-label' }) lightLabel = 'Switch to light theme';
  @property({ attribute: 'dark-label' }) darkLabel = 'Switch to dark theme';
  @property({ attribute: 'storage-key' }) storageKey = '';

  override connectedCallback() {
    super.connectedCallback();
    if (!this.storageKey) return;
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'light' || stored === 'dark') this.theme = stored;
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
  }

  protected override updated(changed: PropertyValues<this>) {
    if (!changed.has('theme') && !changed.has('storageKey')) return;
    this.ownerDocument.documentElement.dataset['kanonisTheme'] = this.theme;
    if (!this.storageKey) return;
    try {
      localStorage.setItem(this.storageKey, this.theme);
    } catch {
      // Theme switching remains functional when persistence is unavailable.
    }
  }

  private toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.emit<KanonisThemeChangeDetail>('kanonis-theme-change', { theme: this.theme });
  }

  protected override render() {
    const label = this.theme === 'dark' ? this.lightLabel : this.darkLabel;
    return html`<button
      part="button"
      type="button"
      aria-label=${label}
      title=${label}
      @click=${this.toggle}
    >
      <span class="glyph" aria-hidden="true">${this.theme === 'dark' ? '☀' : '☾'}</span>
    </button>`;
  }
}
