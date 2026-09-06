import { foundationStyles, surfaceStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement, type KanonisTone } from '../../core/kanonis-element.js';


export class KanonisMetric extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    surfaceStyles,
    css`
      :host {
        display: block;
        min-width: 0;
      }
      .metric {
        position: relative;
        min-height: 7rem;
        padding: var(--kanonis-space-5);
        overflow: hidden;
      }
      .metric::before {
        content: '';
        position: absolute;
        inset: 0 var(--kanonis-space-4) auto;
        height: 2px;
        border-radius: 0 0 var(--kanonis-radius-round) var(--kanonis-radius-round);
        background: var(--kanonis-color-border-strong);
      }
      .metric::after {
        content: '';
        position: absolute;
        z-index: 0;
        top: -4.5rem;
        right: -4rem;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          color-mix(in srgb, var(--metric-accent, var(--kanonis-color-border-strong)) 12%, transparent),
          transparent 68%
        );
        pointer-events: none;
      }
      :host([tone='accent']) .metric::before,
      :host([tone='info']) .metric::before {
        background: var(--kanonis-color-info);
      }
      :host([tone='success']) .metric::before {
        background: var(--kanonis-color-success);
      }
      :host([tone='warning']) .metric::before {
        background: var(--kanonis-color-warning);
      }
      :host([tone='danger']) .metric::before {
        background: var(--kanonis-color-danger);
      }
      :host([tone='accent']) .metric,
      :host([tone='info']) .metric {
        --metric-accent: var(--kanonis-color-info);
      }
      :host([tone='success']) .metric {
        --metric-accent: var(--kanonis-color-success);
      }
      :host([tone='warning']) .metric {
        --metric-accent: var(--kanonis-color-warning);
      }
      :host([tone='danger']) .metric {
        --metric-accent: var(--kanonis-color-danger);
      }
      .label,
      .value,
      .detail {
        position: relative;
        z-index: 1;
      }
      .label {
        display: block;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: var(--kanonis-letter-spacing-wide);
        text-transform: uppercase;
      }
      .value {
        display: block;
        margin: 0.625rem 0 var(--kanonis-space-1);
        font-size: var(--kanonis-font-size-2xl);
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: var(--kanonis-letter-spacing-tight);
        line-height: var(--kanonis-line-height-tight);
        overflow-wrap: anywhere;
      }
      .detail {
        display: block;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
      }
      :host([tone='success']) .value {
        color: var(--kanonis-color-success);
      }
      :host([tone='warning']) .value {
        color: var(--kanonis-color-warning);
      }
      :host([tone='danger']) .value {
        color: var(--kanonis-color-danger);
      }
      :host([tone='accent']) .value,
      :host([tone='info']) .value {
        color: var(--kanonis-color-info);
      }
    `,
  ];
  @property() label = '';
  @property() value = '';
  @property() detail = '';
  @property({ reflect: true }) tone: KanonisTone = 'neutral';
  protected override render() {
    return html`<article class="metric surface" part="metric">
      <span class="label" part="label">${this.label}</span
      ><strong class="value" part="value">${this.value || html`<slot></slot>`}</strong
      ><span class="detail" part="detail">${this.detail}<slot name="detail"></slot></span>
    </article>`;
  }
}
