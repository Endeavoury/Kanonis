import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisMenuSelectDetail {
  value: string;
}

export class KanonisMenuItem extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        min-height: var(--kanonis-control-height-sm);
        padding: var(--kanonis-space-2) var(--kanonis-space-3);
        border-radius: var(--kanonis-radius-sm);
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-md);
        cursor: pointer;
        user-select: none;
      }
      :host(:hover),
      :host(:focus-visible) {
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
        outline: 0;
      }
      :host([tone='danger']) {
        color: var(--kanonis-color-danger);
      }
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .icon {
        display: inline-flex;
        width: var(--kanonis-icon-md);
      }
    `,
  ];

  @property() value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ reflect: true }) tone: 'default' | 'danger' = 'default';

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.select);
    this.addEventListener('keydown', this.keydown);
  }

  override disconnectedCallback() {
    this.removeEventListener('click', this.select);
    this.removeEventListener('keydown', this.keydown);
    super.disconnectedCallback();
  }

  protected override updated() {
    this.setAttribute('role', 'menuitem');
    this.setAttribute('aria-disabled', String(this.disabled));
    if (!this.hasAttribute('tabindex')) this.tabIndex = -1;
  }

  private readonly select = () => {
    if (!this.disabled) this.emit<KanonisMenuSelectDetail>('kanonis-menu-select', { value: this.value });
  };

  private readonly keydown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    this.select();
  };

  protected override render() {
    return html`<span class="icon"><slot name="icon"></slot></span><slot></slot>`;
  }
}
