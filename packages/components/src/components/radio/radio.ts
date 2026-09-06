import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { type KanonisRadioActivateDetail } from '../secondary-forms/shared.js';


export class KanonisRadio extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: inline-grid;
        grid-template-columns: 1.125rem minmax(0, 1fr);
        gap: var(--kanonis-space-2);
        align-items: center;
        color: var(--kanonis-color-text-primary);
        cursor: pointer;
      }
      :host(:focus-visible) {
        outline: 2px solid var(--kanonis-color-focus);
        outline-offset: 3px;
        border-radius: var(--kanonis-radius-sm);
      }
      .circle {
        display: grid;
        place-items: center;
        width: 1.125rem;
        height: 1.125rem;
        border: 1px solid var(--kanonis-color-border-strong);
        border-radius: 50%;
        background: var(--kanonis-color-bg-surface);
      }
      .dot {
        width: 0.5625rem;
        height: 0.5625rem;
        border-radius: 50%;
        background: transparent;
      }
      :host([checked]) .circle {
        border-color: var(--kanonis-color-accent-primary);
      }
      :host([checked]) .dot {
        background: var(--kanonis-color-accent-primary);
      }
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];

  @property() value = '';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.activate);
    this.addEventListener('keydown', this.keydown);
  }

  override disconnectedCallback() {
    this.removeEventListener('click', this.activate);
    this.removeEventListener('keydown', this.keydown);
    super.disconnectedCallback();
  }

  protected override updated() {
    this.setAttribute('role', 'radio');
    this.setAttribute('aria-checked', String(this.checked));
    this.setAttribute('aria-disabled', String(this.disabled));
  }

  private readonly activate = () => {
    if (!this.disabled)
      this.emit<KanonisRadioActivateDetail>('kanonis-radio-activate', { value: this.value });
  };

  private readonly keydown = (event: KeyboardEvent) => {
    if (event.key !== ' ' && event.key !== 'Enter') return;
    event.preventDefault();
    this.activate();
  };

  protected override render() {
    return html`<span class="circle" part="control"><span class="dot"></span></span
      ><span part="label"><slot></slot></span>`;
  }
}
