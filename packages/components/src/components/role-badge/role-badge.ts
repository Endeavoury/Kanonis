import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisRoleBadge extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-flex;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        min-height: 1.5rem;
        padding: 0 0.55rem;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-xs);
        font-weight: var(--kanonis-font-weight-semibold);
      }
      :host([tone='admin']) .badge {
        background: var(--kanonis-color-accent-soft);
        color: var(--kanonis-color-accent-hover);
      }
      :host([tone='danger']) .badge {
        background: var(--kanonis-color-danger-soft);
        color: var(--kanonis-color-danger);
      }
    `,
  ];
  @property() label = 'Member';
  @property({ reflect: true }) tone: 'neutral' | 'admin' | 'danger' = 'neutral';
  protected override render() {
    return html`<span class="badge">${this.label}</span>`;
  }
}
