import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export interface KanonisAuditEntry {
  id: string;
  actor: string;
  action: string;
  target?: string;
  time?: string;
  detail?: string;
}

export class KanonisAuditLog extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        padding: var(--kanonis-space-3) var(--kanonis-space-4);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        text-align: left;
        vertical-align: top;
      }
      th {
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      td small {
        display: block;
        color: var(--kanonis-color-text-muted);
      }
    `,
  ];
  @property({ attribute: false }) entries: KanonisAuditEntry[] = [];
  protected override render() {
    return html`<table class="surface" aria-label="Audit log">
      <thead>
        <tr>
          <th>Actor</th>
          <th>Action</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        ${this.entries.map(
          (entry) =>
            html`<tr>
              <td>
                <strong>${entry.actor}</strong
                >${entry.target ? html`<small>${entry.target}</small>` : nothing}
              </td>
              <td>
                ${entry.action}${entry.detail ? html`<small>${entry.detail}</small>` : nothing}
              </td>
              <td>${entry.time ?? '—'}</td>
            </tr>`,
        )}
      </tbody>
    </table>`;
  }
}
