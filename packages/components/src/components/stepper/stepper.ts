import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export interface KanonisStep {
  id: string;
  label: string;
  description?: string;
}

export class KanonisStepper extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      ol {
        display: flex;
        gap: var(--kanonis-space-2);
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: auto;
      }
      li {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        min-width: max-content;
        color: var(--kanonis-color-text-muted);
      }
      li::after {
        content: '›';
        color: var(--kanonis-color-border-strong);
      }
      li:last-child::after {
        display: none;
      }
      button {
        border: 0;
        background: transparent;
        color: inherit;
      }
      li[data-active] {
        color: var(--kanonis-color-text-primary);
        font-weight: var(--kanonis-font-weight-semibold);
      }
      .number {
        display: grid;
        place-items: center;
        width: 1.75rem;
        height: 1.75rem;
        border: 1px solid currentColor;
        border-radius: 50%;
        font-size: var(--kanonis-font-size-sm);
      }
    `,
  ];
  @property({ attribute: false }) steps: KanonisStep[] = [];
  @property() value = '';
  private select(id: string) {
    this.value = id;
    this.emit<{ id: string }>('kanonis-step-change', { id });
  }
  protected override render() {
    return html`<nav aria-label="Progress">
      <ol>
        ${this.steps.map(
          (step, index) =>
            html`<li ?data-active=${step.id === this.value}>
              <button type="button" @click=${() => this.select(step.id)}>
                <span class="number">${index + 1}</span>${step.label}
              </button>
            </li>`,
        )}
      </ol>
    </nav>`;
  }
}
