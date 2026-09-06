import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement, type KanonisTone } from '../../core/kanonis-element.js';


export class KanonisStatusBadge extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      .status {
        display: inline-flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
        font-weight: var(--kanonis-font-weight-medium);
        white-space: nowrap;
      }
      .dot {
        width: 0.4375rem;
        height: 0.4375rem;
        border-radius: 50%;
        background: var(--kanonis-color-text-muted);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--kanonis-color-text-muted) 12%, transparent);
      }
      :host([tone='success']) .dot {
        background: var(--kanonis-color-success);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--kanonis-color-success) 14%, transparent);
      }
      :host([tone='warning']) .dot {
        background: var(--kanonis-color-warning);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--kanonis-color-warning) 14%, transparent);
      }
      :host([tone='danger']) .dot {
        background: var(--kanonis-color-danger);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--kanonis-color-danger) 14%, transparent);
      }
      :host([tone='info']) .dot,
      :host([tone='accent']) .dot {
        background: var(--kanonis-color-info);
      }
    `,
  ];
  @property({ reflect: true }) tone: KanonisTone = 'neutral';
  protected override render() {
    return html`<span class="status" part="status"
      ><span class="dot" part="indicator" aria-hidden="true"></span><slot></slot
    ></span>`;
  }
}
