import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement, type KanonisTone } from '../../core/kanonis-element.js';


export class KanonisBadge extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: var(--kanonis-space-1);
        min-height: 1.5rem;
        padding: 0 0.625rem;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-xs);
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: 0.01em;
        white-space: nowrap;
      }
      :host([tone='accent']) .badge,
      :host([tone='info']) .badge {
        background: var(--kanonis-color-info-soft);
        border-color: color-mix(in srgb, var(--kanonis-color-info) 30%, transparent);
        color: var(--kanonis-color-info);
      }
      :host([tone='success']) .badge {
        background: var(--kanonis-color-success-soft);
        border-color: color-mix(in srgb, var(--kanonis-color-success) 30%, transparent);
        color: var(--kanonis-color-success);
      }
      :host([tone='warning']) .badge {
        background: var(--kanonis-color-warning-soft);
        border-color: color-mix(in srgb, var(--kanonis-color-warning) 30%, transparent);
        color: var(--kanonis-color-warning);
      }
      :host([tone='danger']) .badge {
        background: var(--kanonis-color-danger-soft);
        border-color: color-mix(in srgb, var(--kanonis-color-danger) 30%, transparent);
        color: var(--kanonis-color-danger);
      }
    `,
  ];
  @property({ reflect: true }) tone: KanonisTone = 'neutral';
  protected override render() {
    return html`<span class="badge" part="badge"><slot></slot></span>`;
  }
}
