import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export interface KanonisDescriptionItem {
  term: string;
  value: string;
}

export class KanonisDescriptionList extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host { display: block; }
      dl { display: grid; grid-template-columns: repeat(var(--kanonis-description-columns, 2), minmax(0, 1fr)); gap: var(--kanonis-space-4); margin: 0; }
      div { min-width: 0; padding: var(--kanonis-space-3); border: 1px solid var(--kanonis-color-border-subtle); border-radius: var(--kanonis-radius-md); background: var(--kanonis-color-bg-surface-subtle); }
      dt { color: var(--kanonis-color-text-muted); font-size: var(--kanonis-font-size-xs); font-weight: var(--kanonis-font-weight-semibold); letter-spacing: var(--kanonis-letter-spacing-wide); text-transform: uppercase; }
      dd { margin: var(--kanonis-space-1) 0 0; color: var(--kanonis-color-text-primary); font-weight: var(--kanonis-font-weight-medium); overflow-wrap: anywhere; }
      @media ${mediaCompact} { dl { grid-template-columns: 1fr; } }
    `,
  ];
  @property({ attribute: false }) items: KanonisDescriptionItem[] = [];
  @property({ type: Number, reflect: true }) columns = 2;
  protected override render() {
    return html`<dl part="list" style=${`--kanonis-description-columns:${Math.max(1, Math.min(this.columns, 4))}`}>
      ${this.items.map((item) => html`<div part="item"><dt part="term">${item.term}</dt><dd part="value">${item.value}</dd></div>`)}
    </dl>`;
  }
}
