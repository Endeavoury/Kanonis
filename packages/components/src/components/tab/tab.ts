import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


export class KanonisTab extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property() value = '';
  @property() label = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) active = false;

  protected override updated() {
    this.setAttribute('role', 'tabpanel');
    this.setAttribute('aria-label', this.label);
    this.tabIndex = 0;
    this.toggleAttribute('hidden', !this.active);
  }

  protected override render() {
    return html`<div part="panel"><slot></slot></div>`;
  }
}
