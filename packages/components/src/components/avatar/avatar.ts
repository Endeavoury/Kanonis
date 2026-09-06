import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisAvatar extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      .avatar {
        display: grid;
        place-items: center;
        width: 2rem;
        height: 2rem;
        border: 1px solid color-mix(in srgb, var(--kanonis-color-accent-hover) 46%, transparent);
        border-radius: var(--kanonis-radius-md);
        overflow: hidden;
        background: var(--kanonis-gradient-accent);
        color: var(--kanonis-color-text-inverse);
        font-size: var(--kanonis-font-size-xs);
        font-weight: var(--kanonis-font-weight-semibold);
        text-transform: uppercase;
        box-shadow:
          inset 0 1px 0 var(--kanonis-color-highlight),
          0 5px 14px color-mix(in srgb, var(--kanonis-color-accent-primary) 16%, transparent);
      }
      :host([size='small']) .avatar {
        width: 1.5rem;
        height: 1.5rem;
      }
      :host([size='large']) .avatar {
        width: 2.75rem;
        height: 2.75rem;
        font-size: var(--kanonis-font-size-sm);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ];
  @property() name = '';
  @property() src = '';
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  private initials() {
    return (
      this.name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0] ?? '')
        .join('') || '?'
    );
  }
  protected override render() {
    return html`<span class="avatar" part="avatar" role="img" aria-label=${this.name || 'User'}
      >${this.src ? html`<img src=${this.src} alt="" />` : this.initials()}</span
    >`;
  }
}
