import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export interface KanonisPermissionRole {
  id: string;
  label: string;
}

export interface KanonisPermission {
  id: string;
  label: string;
  description?: string;
}

export class KanonisPermissionMatrix extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      .frame {
        overflow: auto;
      }
      table {
        width: 100%;
        min-width: 36rem;
        border-collapse: collapse;
      }
      th,
      td {
        padding: var(--kanonis-space-3);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        text-align: center;
      }
      th:first-child,
      td:first-child {
        position: sticky;
        left: 0;
        text-align: left;
        background: var(--kanonis-color-bg-surface);
      }
      th {
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-xs);
      }
      input {
        accent-color: var(--kanonis-color-accent-primary);
      }
    `,
  ];
  @property({ attribute: false }) roles: KanonisPermissionRole[] = [];
  @property({ attribute: false }) permissions: KanonisPermission[] = [];
  @property({ attribute: false }) value: Record<string, boolean> = {};
  private toggle(role: string, permission: string, checked: boolean) {
    this.value = { ...this.value, [`${role}:${permission}`]: checked };
    this.emit<Record<string, boolean>>('kanonis-permission-change', this.value);
  }
  protected override render() {
    return html`<div class="frame surface">
      <table aria-label="Permissions">
        <thead>
          <tr>
            <th>Permission</th>
            ${this.roles.map((role) => html`<th>${role.label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.permissions.map(
            (permission) =>
              html`<tr>
                <th scope="row">${permission.label}</th>
                ${this.roles.map((role) => html`<td><input type="checkbox" aria-label=${`${role.label}: ${permission.label}`} .checked=${this.value[`${role.id}:${permission.id}`] ?? false} @change=${(event: Event) => this.toggle(role.id, permission.id, (event.target as HTMLInputElement).checked)} /></td>`)}
              </tr>`,
          )}
        </tbody>
      </table>
    </div>`;
  }
}
