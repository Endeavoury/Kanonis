import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export interface KanonisActivityItem {
  id: string;
  actor: string;
  body: string;
  time?: string;
}

export class KanonisActivityFeed extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      ul {
        display: grid;
        gap: var(--kanonis-space-2);
        margin: 0;
        padding: var(--kanonis-space-3);
        list-style: none;
      }
      li {
        padding: var(--kanonis-space-3);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      li:last-child {
        border-bottom: 0;
      }
      .time {
        margin-left: 0.5rem;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
      }
      p {
        margin: 0.25rem 0 0;
        color: var(--kanonis-color-text-secondary);
      }
    `,
  ];
  @property({ attribute: false }) items: KanonisActivityItem[] = [];
  protected override render() {
    return html`<ul class="surface" aria-label="Activity">
      ${this.items.map(
        (item) =>
          html`<li>
            <strong>${item.actor}</strong
            >${item.time ? html`<span class="time">${item.time}</span>` : nothing}
            <p>${item.body}</p>
          </li>`,
      )}
    </ul>`;
  }
}
