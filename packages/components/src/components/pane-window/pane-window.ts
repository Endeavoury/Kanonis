import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property, state } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { paneFoundation } from '../layout/shared.js';


/** Framed horizontal canvas. It owns horizontal overflow; pane bodies own vertical overflow. */
export class KanonisPaneWindow extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        --pane-min-width: 22.5rem;
        --pane-preferred-width: 30rem;
        --pane-max-width: 40rem;
        display: block;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        overflow-x: auto;
        overflow-y: hidden;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-lg);
        background: var(--kanonis-color-bg-surface);
        box-shadow: var(--kanonis-shadow-panel);
        scrollbar-width: thin;
        scrollbar-color: var(--kanonis-color-border-strong) transparent;
        overscroll-behavior-inline: contain;
      }
      :host::-webkit-scrollbar {
        height: var(--kanonis-scrollbar-size);
      }
      :host::-webkit-scrollbar-thumb {
        border: 0.1875rem solid transparent;
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-border-strong);
        background-clip: padding-box;
      }
      :host(:focus-visible) {
        outline: 2px solid var(--kanonis-color-focus);
        outline-offset: 2px;
      }
      .track {
        position: relative;
        display: flex;
        width: max-content;
        min-width: 100%;
        height: 100%;
        min-height: 0;
        isolation: isolate;
      }
      .track::before {
        position: absolute;
        z-index: 3;
        inset: 0 0 auto;
        height: 1px;
        content: '';
        pointer-events: none;
        background: linear-gradient(
          90deg,
          transparent,
          color-mix(in srgb, var(--kanonis-color-border-highlight) 82%, transparent) 18%,
          color-mix(in srgb, var(--kanonis-color-accent-soft) 44%, transparent) 50%,
          transparent 82%
        );
        opacity: 0.85;
      }
      .track[data-changing]::after {
        position: absolute;
        z-index: 4;
        inset: 0;
        width: 18rem;
        content: '';
        pointer-events: none;
        background: linear-gradient(
          100deg,
          transparent,
          color-mix(in srgb, var(--kanonis-color-accent-soft) 12%, transparent),
          transparent
        );
        transform: translateX(-120%);
        animation: pane-window-sweep var(--kanonis-motion-pane) both;
      }
      ::slotted(kanonis-pane),
      ::slotted(kanonis-pane-stack) {
        flex: 1 1 var(--pane-preferred-width);
        width: clamp(
          var(--pane-min-width),
          var(--pane-preferred-width),
          var(--pane-max-width)
        ) !important;
        min-width: var(--pane-min-width);
        max-width: var(--pane-max-width);
        height: 100%;
        transition:
          flex-basis var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
          width var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
          opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard),
          transform var(--kanonis-duration-normal) var(--kanonis-ease-emphasized);
      }
      ::slotted(kanonis-pane-stack) {
        display: grid;
      }
      @media ${mediaCompact} {
        :host {
          --pane-min-width: min(22.5rem, 86vw);
          --pane-preferred-width: min(30rem, 86vw);
        }
      }
      @keyframes pane-window-sweep {
        to {
          transform: translateX(calc(100vw + 18rem));
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .track[data-changing]::after {
          animation: none;
          display: none;
        }
      }
    `,
  ];
  @property({ type: Boolean, attribute: 'focusable-overflow' }) focusableOverflow = true;
  @state() private changing = false;
  private transitionTimer?: ReturnType<typeof globalThis.setTimeout>;
  override disconnectedCallback() {
    if (this.transitionTimer) globalThis.clearTimeout(this.transitionTimer);
    super.disconnectedCallback();
  }
  private handleSlotChange() {
    this.changing = true;
    if (this.transitionTimer) globalThis.clearTimeout(this.transitionTimer);
    this.transitionTimer = globalThis.setTimeout(() => (this.changing = false), 380);
  }
  protected override updated() {
    this.tabIndex = this.focusableOverflow ? 0 : -1;
  }
  protected override render() {
    return html`<div class="track" part="track" data-changing=${this.changing ? true : nothing}>
      <slot @slotchange=${this.handleSlotChange}></slot>
    </div>`;
  }
}
