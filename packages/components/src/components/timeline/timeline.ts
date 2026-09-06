import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export interface KanonisTimelineItem {
  title: string;
  body?: string;
  time?: string;
  tone?: string;
}

export class KanonisTimeline extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      ol {
        margin: 0;
        padding: var(--kanonis-space-4);
        list-style: none;
      }
      li {
        position: relative;
        display: grid;
        grid-template-columns: 1rem minmax(0, 1fr);
        gap: var(--kanonis-space-3);
        padding-bottom: var(--kanonis-space-5);
      }
      li:last-child {
        padding-bottom: 0;
      }
      li::before {
        content: '';
        position: absolute;
        top: 0.7rem;
        bottom: -0.25rem;
        left: 0.28rem;
        width: 1px;
        background: var(--kanonis-color-border-default);
      }
      li:last-child::before {
        display: none;
      }
      .dot {
        position: relative;
        z-index: 1;
        width: 0.65rem;
        height: 0.65rem;
        margin-top: 0.3rem;
        border-radius: 50%;
        background: var(--kanonis-color-accent-primary);
        box-shadow: 0 0 0 3px var(--kanonis-color-bg-surface);
      }
      .time {
        margin-left: 0.5rem;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
      }
      p {
        margin: 0.25rem 0 0;
        color: var(--kanonis-color-text-secondary);
        font-size: var(--kanonis-font-size-sm);
      }
    `,
  ];
  @property({ attribute: false }) items: KanonisTimelineItem[] = [];
  protected override render() {
    return html`<ol class="surface">
      ${this.items.map(
        (item) =>
          html`<li>
            <span class="dot"></span>
            <div>
              <strong>${item.title}</strong
              >${item.time ? html`<span class="time">${item.time}</span>` : nothing}${item.body ? html`<p>${item.body}</p>` : nothing}
            </div>
          </li>`,
      )}
    </ol>`;
  }
}
