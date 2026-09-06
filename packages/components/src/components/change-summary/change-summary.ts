import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export interface KanonisChangeItem {
  field: string;
  before: string;
  after: string;
}

export class KanonisChangeSummary extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
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
      .before {
        color: var(--kanonis-color-danger);
      }
      .after {
        color: var(--kanonis-color-success);
      }
    `,
  ];
  @property({ attribute: false }) changes: KanonisChangeItem[] = [];
  protected override render() {
    return html`<table class="surface" aria-label="Changes">
      <thead>
        <tr>
          <th>Field</th>
          <th>Before</th>
          <th>After</th>
        </tr>
      </thead>
      <tbody>
        ${this.changes.map(
          (change) =>
            html`<tr>
              <th scope="row">${change.field}</th>
              <td class="before">${change.before}</td>
              <td class="after">${change.after}</td>
            </tr>`,
        )}
      </tbody>
    </table>`;
  }
}
