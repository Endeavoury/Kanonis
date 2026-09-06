import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export interface KanonisTourStep {
  id: string;
  heading: string;
  body: string;
}

export class KanonisTour extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      .tour {
        padding: var(--kanonis-space-5);
      }
      h2 {
        margin: 0;
        font-size: var(--kanonis-font-size-xl);
      }
      p {
        color: var(--kanonis-color-text-secondary);
      }
      .footer {
        display: flex;
        justify-content: space-between;
        gap: var(--kanonis-space-2);
        margin-top: var(--kanonis-space-5);
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ attribute: false }) steps: KanonisTourStep[] = [];
  @property({ type: Number }) index = 0;
  private move(delta: number) {
    this.index = Math.min(Math.max(0, this.index + delta), Math.max(0, this.steps.length - 1));
    this.emit<{ index: number }>('kanonis-tour-change', { index: this.index });
  }
  protected override render() {
    const step = this.steps[this.index];
    return step
      ? html`<section class="tour surface" role="dialog" aria-label="Product tour">
          <span class="muted">Step ${this.index + 1} of ${this.steps.length}</span>
          <h2>${step.heading}</h2>
          <p>${step.body}</p>
          <div class="footer">
            <button type="button" @click=${() => (this.open = false)}>Skip</button
            ><span
              ><button type="button" ?disabled=${this.index === 0} @click=${() => this.move(-1)}>
                Back
              </button>
              <button
                type="button"
                @click=${() => (this.index === this.steps.length - 1 ? (this.open = false) : this.move(1))}
              >
                ${this.index === this.steps.length - 1 ? 'Finish' : 'Next'}
              </button></span
            >
          </div>
        </section>`
      : nothing;
  }
}
