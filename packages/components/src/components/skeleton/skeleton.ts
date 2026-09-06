import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisSkeleton extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
        width: var(--skeleton-width, 100%);
      }
      .skeleton {
        display: block;
        width: 100%;
        height: var(--skeleton-height, 1rem);
        overflow: hidden;
        border-radius: var(--kanonis-radius-sm);
        background: linear-gradient(
          100deg,
          var(--kanonis-color-bg-sunken) 20%,
          var(--kanonis-color-bg-hover) 38%,
          var(--kanonis-color-bg-sunken) 56%
        );
        background-size: 220% 100%;
        animation: kanonis-skeleton var(--kanonis-duration-skeleton) var(--kanonis-ease-standard) infinite;
      }
      :host([shape='circle']) {
        width: var(--skeleton-width, 2.5rem);
      }
      :host([shape='circle']) .skeleton {
        height: var(--skeleton-height, var(--skeleton-width, 2.5rem));
        border-radius: 50%;
      }
      :host([shape='rectangle']) .skeleton {
        border-radius: var(--kanonis-radius-lg);
      }
      @keyframes kanonis-skeleton {
        to {
          background-position: -220% 0;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .skeleton {
          animation: none;
          background-position: 50% 0;
        }
      }
    `,
  ];

  @property({ reflect: true }) shape: 'text' | 'circle' | 'rectangle' = 'text';
  @property() width = '100%';
  @property() height = '1rem';

  protected override updated() {
    this.style.setProperty('--skeleton-width', this.width);
    this.style.setProperty('--skeleton-height', this.height);
  }

  protected override render() {
    return html`<span class="skeleton" part="skeleton" aria-hidden="true"></span>`;
  }
}
