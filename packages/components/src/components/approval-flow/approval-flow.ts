import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export class KanonisApprovalFlow extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      .flow {
        display: flex;
        align-items: center;
        gap: var(--kanonis-space-2);
        padding: var(--kanonis-space-4);
      }
      .state {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      .state[data-current] {
        color: var(--kanonis-color-text-primary);
        font-weight: var(--kanonis-font-weight-semibold);
      }
      .dot {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background: currentColor;
      }
      .connector {
        flex: 1;
        height: 1px;
        background: var(--kanonis-color-border-default);
      }
    `,
  ];
  @property() status: 'draft' | 'pending' | 'approved' | 'rejected' = 'draft';
  private readonly states = ['draft', 'pending', 'approved'];
  protected override render() {
    const current = this.status === 'rejected' ? 1 : this.states.indexOf(this.status);
    return html`<div class="flow surface" aria-label="Approval status">
      ${this.states.map((state, index) => html`<span class="state" ?data-current=${index === current}><span class="dot"></span>${state}</span>${index < this.states.length - 1 ? html`<span class="connector"></span>` : nothing}`)}${this.status === 'rejected' ? html`<span class="state" data-current><span class="dot"></span>rejected</span>` : nothing}
    </div>`;
  }
}
