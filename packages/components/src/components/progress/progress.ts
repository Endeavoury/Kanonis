import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisProgress extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      .header {
        display: flex;
        justify-content: space-between;
        gap: var(--kanonis-space-3);
        margin-bottom: var(--kanonis-space-2);
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
      }
      .value {
        color: var(--kanonis-color-text-muted);
        font-variant-numeric: tabular-nums;
      }
      progress {
        display: block;
        width: 100%;
        height: 0.5rem;
        overflow: hidden;
        border: 0;
        border-radius: var(--kanonis-radius-round);
        appearance: none;
        background: var(--kanonis-color-bg-sunken);
      }
      progress::-webkit-progress-bar {
        border-radius: inherit;
        background: var(--kanonis-color-bg-sunken);
      }
      progress::-webkit-progress-value {
        border-radius: inherit;
        background: var(--progress-color, var(--kanonis-color-accent-primary));
        transition: width var(--kanonis-duration-normal) var(--kanonis-ease-standard);
      }
      progress::-moz-progress-bar {
        border-radius: inherit;
        background: var(--progress-color, var(--kanonis-color-accent-primary));
      }
      :host([tone='success']) progress {
        --progress-color: var(--kanonis-color-success);
      }
      :host([tone='warning']) progress {
        --progress-color: var(--kanonis-color-warning);
      }
      :host([tone='danger']) progress {
        --progress-color: var(--kanonis-color-danger);
      }
      progress:indeterminate {
        background: linear-gradient(
          90deg,
          var(--kanonis-color-bg-sunken) 0 25%,
          var(--progress-color, var(--kanonis-color-accent-primary)) 45% 55%,
          var(--kanonis-color-bg-sunken) 75% 100%
        );
        background-size: 220% 100%;
        animation: kanonis-progress var(--kanonis-duration-progress) linear infinite;
      }
      @keyframes kanonis-progress {
        to {
          background-position: -220% 0;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        progress:indeterminate {
          animation: none;
          background-position: 50% 0;
        }
      }
    `,
  ];

  @property() label = '';
  @property({ type: Number }) value?: number;
  @property({ type: Number }) max = 100;
  @property({ type: Boolean, attribute: 'show-value' }) showValue = false;
  @property({ reflect: true }) tone: 'accent' | 'success' | 'warning' | 'danger' = 'accent';

  private percentage() {
    return Math.round(
      (Math.max(0, Math.min(this.value ?? 0, this.max)) / Math.max(1, this.max)) * 100,
    );
  }

  protected override render() {
    const determinate = this.value !== undefined && Number.isFinite(this.value);
    return html`${
        this.label || this.showValue
          ? html`<div class="header">
              <span>${this.label}</span
              >${this.showValue && determinate ? html`<span class="value">${this.percentage()}%</span>` : nothing}
            </div>`
          : nothing
      }<progress
        part="progress"
        aria-label=${this.label || 'Progress'}
        max=${Math.max(1, this.max)}
        value=${determinate ? Math.max(0, Math.min(this.value!, this.max)) : nothing}
      ></progress>`;
  }
}
