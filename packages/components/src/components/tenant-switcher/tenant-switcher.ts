import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export interface KanonisTenant {
  id: string;
  label: string;
  description?: string;
}

export class KanonisTenantSwitcher extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      select {
        width: 100%;
        min-height: var(--kanonis-control-height-md);
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-primary);
      }
    `,
  ];
  @property({ attribute: false }) tenants: KanonisTenant[] = [];
  @property() value = '';
  @property() label = 'Workspace';
  private change(event: Event) {
    this.value = (event.target as HTMLSelectElement).value;
    this.emit<{ id: string }>('kanonis-tenant-change', { id: this.value });
  }
  protected override render() {
    return html`<label class="surface" style="display:grid;gap:.25rem;padding:.5rem .75rem"
      ><span class="muted">${this.label}</span
      ><select aria-label=${this.label} .value=${this.value} @change=${this.change}>
        ${this.tenants.map((tenant) => html`<option value=${tenant.id}>${tenant.label}</option>`)}
      </select></label
    >`;
  }
}
