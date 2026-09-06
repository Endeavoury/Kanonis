import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { enterpriseSurface } from '../enterprise/shared.js';


export interface KanonisSavedViewOption {
  id: string;
  label: string;
}

export class KanonisSavedView extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    enterpriseSurface,
    css`
      .surface {
        flex-wrap: wrap;
      }
      select {
        min-height: var(--kanonis-control-height-sm);
        min-width: 12rem;
        padding: 0 var(--kanonis-space-3);
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-primary);
      }
    `,
  ];
  @property({ attribute: false }) views: KanonisSavedViewOption[] = [];
  @property() current = '';
  @property() saveLabel = 'Save view';
  @property() deleteLabel = 'Delete view';
  private select(event: Event) {
    this.current = (event.target as HTMLSelectElement).value;
    this.emit<{ id: string }>('kanonis-view-change', { id: this.current });
  }
  protected override render() {
    return html`<section class="surface" aria-label="Saved views">
      <select .value=${this.current} @change=${this.select}>
        <option value="">Choose a view</option>
        ${this.views.map((view) => html`<option value=${view.id}>${view.label}</option>`)}
      </select>
      <button type="button" @click=${() => this.emit<void>('kanonis-view-save', undefined)}>
        ${this.saveLabel}
      </button>
      ${this.current ? html`<button type="button" @click=${() => this.emit<{ id: string }>('kanonis-view-delete', { id: this.current })}>${this.deleteLabel}</button>` : nothing}
    </section>`;
  }
}
