import { controlStyles, foundationStyles } from '@endeavoury/kanonis-styles';
import { html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { enterpriseSurface } from '../enterprise/shared.js';


export interface KanonisFilterRule {
  field: string;
  operator: string;
  value: string;
}

export interface KanonisFilterField {
  key: string;
  label: string;
}

export class KanonisFilterBuilder extends KanonisElement {
  static override styles: CSSResultGroup = [foundationStyles, controlStyles, enterpriseSurface];
  @property({ attribute: false }) fields: KanonisFilterField[] = [];
  @property({ attribute: false }) rules: KanonisFilterRule[] = [];
  @property({ attribute: false }) operators: string[] = [
    'contains',
    'equals',
    'starts with',
    'is empty',
  ];
  @property() addLabel = 'Add filter';
  @property() clearLabel = 'Clear filters';

  private emitChange() {
    this.emit<KanonisFilterRule[]>('kanonis-filter-change', this.rules);
  }
  private updateRule(index: number, patch: Partial<KanonisFilterRule>) {
    this.rules = this.rules.map((rule, item) => (item === index ? { ...rule, ...patch } : rule));
    this.emitChange();
  }
  private add() {
    const field = this.fields[0]?.key ?? '';
    this.rules = [...this.rules, { field, operator: this.operators[0] ?? 'contains', value: '' }];
    this.emitChange();
  }
  private removeRule(index: number) {
    this.rules = this.rules.filter((_, item) => item !== index);
    this.emitChange();
  }
  private clear() {
    this.rules = [];
    this.emitChange();
  }
  protected override render() {
    return html`<section class="surface" aria-label="Filters">
      <div class="rules">
        ${
          this.rules.length
            ? this.rules.map(
                (rule, index) =>
                  html`<div class="rule">
                    <select
                      aria-label="Filter field"
                      .value=${rule.field}
                      @change=${(event: Event) => this.updateRule(index, { field: (event.target as HTMLSelectElement).value })}
                    >
                      ${this.fields.map((field) => html`<option value=${field.key}>${field.label}</option>`)}
                    </select>
                    <select
                      aria-label="Filter operator"
                      .value=${rule.operator}
                      @change=${(event: Event) => this.updateRule(index, { operator: (event.target as HTMLSelectElement).value })}
                    >
                      ${this.operators.map((operator) => html`<option value=${operator}>${operator}</option>`)}
                    </select>
                    <input
                      aria-label="Filter value"
                      .value=${rule.value}
                      @input=${(event: Event) => this.updateRule(index, { value: (event.target as HTMLInputElement).value })}
                    />
                    <button
                      type="button"
                      aria-label="Remove filter"
                      @click=${() => this.removeRule(index)}
                    >
                      ×
                    </button>
                  </div>`,
              )
            : html`<span class="muted">No filters applied</span>`
        }
      </div>
      <button type="button" @click=${this.add}>${this.addLabel}</button>
      ${this.rules.length ? html`<button type="button" @click=${this.clear}>${this.clearLabel}</button>` : nothing}
    </section>`;
  }
}
