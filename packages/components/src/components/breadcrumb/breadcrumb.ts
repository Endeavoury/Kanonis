import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisBreadcrumb extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      a {
        color: var(--kanonis-color-text-secondary);
        text-decoration: none;
      }
      a:hover {
        color: var(--kanonis-color-accent-hover);
        text-decoration: underline;
      }
      .current {
        color: var(--kanonis-color-text-primary);
        font-weight: var(--kanonis-font-weight-medium);
      }
      .separator {
        color: var(--kanonis-color-border-strong);
        user-select: none;
      }
      :host([disabled]) {
        pointer-events: none;
        opacity: 0.5;
      }
    `,
  ];

  @property() href = '';
  @property({ type: Boolean, reflect: true }) current = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() separator = '/';

  protected override updated() {
    this.setAttribute('role', 'listitem');
  }

  protected override render() {
    const content = this.current
      ? html`<span class="current" aria-current="page"><slot></slot></span>`
      : this.href
        ? html`<a href=${this.href} aria-disabled=${this.disabled ? 'true' : nothing}
            ><slot></slot
          ></a>`
        : html`<span><slot></slot></span>`;
    return html`${content}${
      this.current
        ? nothing
        : html`<span class="separator" aria-hidden="true">${this.separator}</span>`
    }`;
  }
}
