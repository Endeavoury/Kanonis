import { css, html, nothing, type CSSResultGroup, type PropertyValues } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { foundationStyles, mediaCompact, mediaExpanded } from '@endeavoury/kanonis-styles';
import { KanonisElement } from '../core/kanonis-element.js';

const gaps = css`
  :host([gap='0']) {
    --gap: var(--kanonis-space-0);
  }
  :host([gap='1']) {
    --gap: var(--kanonis-space-1);
  }
  :host([gap='2']) {
    --gap: var(--kanonis-space-2);
  }
  :host([gap='3']) {
    --gap: var(--kanonis-space-3);
  }
  :host([gap='4']) {
    --gap: var(--kanonis-space-4);
  }
  :host([gap='5']) {
    --gap: var(--kanonis-space-5);
  }
  :host([gap='6']) {
    --gap: var(--kanonis-space-6);
  }
  :host([gap='8']) {
    --gap: var(--kanonis-space-8);
  }
`;

const paneFoundation = css`
  :host {
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
  }
`;

const scrollablePane = css`
  :host {
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: var(--kanonis-color-border-strong) transparent;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y pinch-zoom;
  }
  :host::-webkit-scrollbar {
    width: var(--kanonis-scrollbar-size);
    height: var(--kanonis-scrollbar-size);
  }
  :host::-webkit-scrollbar-thumb {
    border: 0.1875rem solid transparent;
    border-radius: var(--kanonis-radius-round);
    background: var(--kanonis-color-border-strong);
    background-clip: padding-box;
  }
`;

/** A viewport-bound page frame with a header above a framed pane canvas. */
export class KanonisWorkspace extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        --workspace-pane-margin: clamp(var(--kanonis-space-4), 1.25vw, var(--kanonis-space-8));
        display: grid;
        grid-template-rows: auto minmax(0, 1fr);
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
      }
      .pane-area {
        min-width: 0;
        min-height: 0;
        padding: var(--workspace-pane-margin);
      }
      ::slotted([slot='header']) {
        min-width: 0;
      }
      ::slotted(kanonis-pane-window) {
        width: 100%;
        height: 100%;
      }
      @media ${mediaCompact} {
        :host {
          --workspace-pane-margin: var(--kanonis-space-4);
        }
      }
    `,
  ];
  protected override render() {
    return html`<slot name="header"></slot>
      <div class="pane-area"><slot></slot></div>`;
  }
}

/** Header content that remains outside the pane window. */
export class KanonisWorkspaceHeader extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
        min-width: 0;
        padding: var(--kanonis-space-5) var(--workspace-pane-margin, var(--kanonis-space-6)) var(--kanonis-space-2);
      }
      .header {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: end;
        gap: var(--kanonis-space-5);
      }
      .copy,
      .meta {
        min-width: 0;
      }
      .meta {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--kanonis-space-3);
        flex-wrap: wrap;
      }
      .breadcrumb {
        margin-bottom: var(--kanonis-space-2);
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      h1 {
        margin: 0;
        color: var(--kanonis-color-text-primary);
        font-size: clamp(var(--kanonis-font-size-xl), 1.8vw, var(--kanonis-font-size-2xl));
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: var(--kanonis-letter-spacing-tight);
        line-height: var(--kanonis-line-height-tight);
      }
      @media ${mediaCompact} {
        :host {
          padding-top: var(--kanonis-space-4);
        }
        .header {
          grid-template-columns: 1fr;
          align-items: start;
          gap: var(--kanonis-space-3);
        }
        .meta {
          justify-content: flex-start;
        }
      }
    `,
  ];
  @property() heading = '';
  protected override render() {
    return html`<header class="header" part="header">
      <div class="copy">
        <div class="breadcrumb" part="breadcrumb"><slot name="breadcrumb"></slot></div>
        <h1 part="heading">${this.heading}<slot name="title"></slot></h1>
      </div>
      <div class="meta" part="meta"><slot name="status"></slot><slot name="actions"></slot></div>
    </header>`;
  }
}

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

/** A vertical composition of panes. Set split to 40/60, 60/40, 30/70, or 70/30. */
export class KanonisPaneStack extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        display: grid;
        grid-template-rows: 1fr 1fr;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
        transition: grid-template-rows var(--kanonis-duration-normal) var(--kanonis-ease-emphasized);
      }
      ::slotted(*) {
        min-width: 0;
        min-height: 0;
      }
      ::slotted(kanonis-pane:not(:last-child)) {
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([split='40/60']) {
        grid-template-rows: 40fr 60fr;
      }
      :host([split='60/40']) {
        grid-template-rows: 60fr 40fr;
      }
      :host([split='30/70']) {
        grid-template-rows: 30fr 70fr;
      }
      :host([split='70/30']) {
        grid-template-rows: 70fr 30fr;
      }
    `,
  ];
  @property({ reflect: true }) split: '50/50' | '40/60' | '60/40' | '30/70' | '70/30' = '50/50';
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class KanonisPaneGroup extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        overflow: hidden;
        isolation: isolate;
      }
      :host([orientation='vertical']) {
        flex-direction: column;
      }
      ::slotted(*) {
        min-width: 0;
        min-height: 0;
      }
    `,
  ];
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class KanonisPane extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        display: flex;
        flex: 1 1 0;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: linear-gradient(
          180deg,
          color-mix(in srgb, var(--kanonis-color-bg-surface) 96%, var(--kanonis-color-accent-soft)),
          var(--kanonis-color-bg-canvas)
        );
        box-shadow: inset 0 1px 0 var(--kanonis-color-border-highlight);
        transition:
          flex-basis var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
          width var(--kanonis-duration-normal) var(--kanonis-ease-emphasized),
          opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard);
      }
      :host([position='left']) {
        order: -20;
        flex: 0 0 var(--kanonis-pane-size, var(--kanonis-pane-sidebar-width));
        border-right: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='right']) {
        order: 20;
        flex: 0 0 var(--kanonis-pane-size, var(--kanonis-pane-inspector-width));
        border-left: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='top']) {
        order: -20;
        flex: 0 0 var(--kanonis-pane-size, auto);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='bottom']) {
        order: 20;
        flex: 0 0 var(--kanonis-pane-size, auto);
        border-top: 1px solid var(--kanonis-color-border-subtle);
      }
      :host([position='left']),
      :host([position='right']) {
        width: auto;
        max-width: 100%;
      }
      :host([position='top']),
      :host([position='bottom']) {
        height: auto;
        max-height: 100%;
      }
      :host([collapsed]) {
        display: none;
      }
    `,
  ];
  @property({ reflect: true }) position: 'left' | 'center' | 'right' | 'top' | 'bottom' = 'center';
  @property({ type: Boolean, reflect: true }) collapsed = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class KanonisScrollablePane extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    scrollablePane,
    css`
      :host {
        display: block;
        flex: 1 1 auto;
      }
    `,
  ];
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class KanonisPaneHeader extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        z-index: var(--kanonis-z-pane-header);
        display: block;
        flex: 0 0 auto;
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        background: var(--kanonis-color-bg-surface-subtle);
      }
      :host([sticky]) {
        position: sticky;
        top: 0;
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) sticky = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class KanonisPaneContent extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        display: block;
        flex: 1 1 auto;
        overflow: hidden;
      }
      :host([scrollable]) {
        overflow-x: hidden;
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: var(--kanonis-color-border-strong) transparent;
        -webkit-overflow-scrolling: touch;
        touch-action: pan-y pinch-zoom;
      }
      :host([scrollable])::-webkit-scrollbar {
        width: var(--kanonis-scrollbar-size);
        height: var(--kanonis-scrollbar-size);
      }
      :host([scrollable])::-webkit-scrollbar-thumb {
        border: 0.1875rem solid transparent;
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-border-strong);
        background-clip: padding-box;
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) scrollable = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class KanonisInspectorPane extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    paneFoundation,
    css`
      :host {
        position: relative;
        z-index: var(--kanonis-z-pane);
        display: flex;
        flex: 0 0 var(--kanonis-pane-size, var(--kanonis-pane-inspector-width));
        flex-direction: column;
        overflow: hidden;
        border-left: 1px solid var(--kanonis-color-border-default);
        background: var(--kanonis-color-bg-surface);
        box-shadow: var(--kanonis-shadow-md);
      }
      :host([collapsed]) {
        display: none;
      }
      @media ${mediaExpanded} {
        :host {
          position: absolute;
          z-index: var(--kanonis-z-drawer);
          inset: 0 0 0 auto;
          width: min(var(--kanonis-pane-size, var(--kanonis-pane-inspector-width)), 100%);
          max-width: 100%;
          transform: translateX(0);
          transition:
            transform var(--kanonis-duration-normal) var(--kanonis-ease-standard),
            opacity var(--kanonis-duration-fast) var(--kanonis-ease-standard),
            visibility 0s linear 0s;
        }
        :host([collapsed]) {
          display: flex;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transform: translateX(100%);
          transition-delay: 0s, 0s, var(--kanonis-duration-normal);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        :host {
          transition: none;
        }
      }
    `,
  ];
  @property({ type: Boolean, reflect: true }) collapsed = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
export class KanonisStack extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    gaps,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--gap, var(--kanonis-space-4));
      }
      :host([align='start']) {
        align-items: flex-start;
      }
      :host([align='center']) {
        align-items: center;
      }
      :host([align='end']) {
        align-items: flex-end;
      }
      :host([align='stretch']) {
        align-items: stretch;
      }
    `,
  ];
  @property({ reflect: true }) gap = '4';
  @property({ reflect: true }) align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  protected override render() {
    return html`<slot></slot>`;
  }
}
export class KanonisInline extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    gaps,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--gap, var(--kanonis-space-3));
        flex-wrap: wrap;
      }
      :host([align='start']) {
        align-items: flex-start;
      }
      :host([align='end']) {
        align-items: flex-end;
      }
      :host([justify='start']) {
        justify-content: flex-start;
      }
      :host([justify='center']) {
        justify-content: center;
      }
      :host([justify='end']) {
        justify-content: flex-end;
      }
      :host([justify='between']) {
        justify-content: space-between;
      }
      :host([wrap='false']) {
        flex-wrap: nowrap;
      }
      @media ${mediaCompact} {
        :host([collapse-at-compact]) {
          align-items: stretch;
          flex-direction: column;
        }
      }
    `,
  ];
  @property({ reflect: true }) gap = '3';
  @property({ reflect: true }) align: 'start' | 'center' | 'end' = 'center';
  @property({ reflect: true }) justify: 'start' | 'center' | 'end' | 'between' = 'start';
  @property({ type: Boolean, reflect: true }) wrap = true;
  @property({ type: Boolean, reflect: true, attribute: 'collapse-at-compact' })
  collapseAtCompact = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}
export class KanonisGrid extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    gaps,
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(var(--columns, 3), minmax(0, 1fr));
        gap: var(--gap, var(--kanonis-space-4));
      }
      :host([columns='1']) {
        --columns: 1;
      }
      :host([columns='2']) {
        --columns: 2;
      }
      :host([columns='3']) {
        --columns: 3;
      }
      :host([columns='4']) {
        --columns: 4;
      }
      :host([columns='6']) {
        --columns: 6;
      }
      @media ${mediaExpanded} {
        :host([responsive]) {
          grid-template-columns: repeat(var(--medium-columns, 2), minmax(0, 1fr));
        }
      }
      @media ${mediaCompact} {
        :host([responsive]) {
          grid-template-columns: repeat(var(--compact-columns, 1), minmax(0, 1fr));
        }
      }
    `,
  ];
  @property({ reflect: true }) columns = '3';
  @property({ reflect: true, attribute: 'medium-columns' }) mediumColumns = '2';
  @property({ reflect: true, attribute: 'compact-columns' }) compactColumns = '1';
  @property({ reflect: true }) gap = '4';
  @property({ type: Boolean, reflect: true }) responsive = true;
  protected override updated(changed: PropertyValues<this>) {
    if (changed.has('mediumColumns'))
      this.style.setProperty('--medium-columns', this.mediumColumns);
    if (changed.has('compactColumns'))
      this.style.setProperty('--compact-columns', this.compactColumns);
  }
  protected override render() {
    return html`<slot></slot>`;
  }
}
export class KanonisContainer extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
        width: min(
          calc(100% - 2 * var(--kanonis-space-5)),
          var(--container, var(--kanonis-container-normal))
        );
        margin-inline: auto;
      }
      @media ${mediaCompact} {
        :host {
          width: min(
            calc(100% - 2 * var(--kanonis-space-4)),
            var(--container, var(--kanonis-container-normal))
          );
        }
      }
      :host([size='narrow']) {
        --container: var(--kanonis-container-narrow);
      }
      :host([size='wide']) {
        --container: var(--kanonis-container-wide);
      }
      :host([flush]) {
        width: 100%;
      }
    `,
  ];
  @property({ reflect: true }) size: 'narrow' | 'normal' | 'wide' = 'normal';
  @property({ type: Boolean, reflect: true }) flush = false;
  protected override render() {
    return html`<slot></slot>`;
  }
}

export class KanonisPageHeader extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        display: block;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--kanonis-space-6);
        padding: var(--kanonis-space-2) 0 var(--kanonis-space-5);
      }
      .copy {
        min-width: 0;
      }
      h1 {
        margin: 0.375rem 0 0;
        font-size: clamp(var(--kanonis-font-size-2xl), 2.3vw, var(--kanonis-font-size-3xl));
        font-weight: var(--kanonis-font-weight-semibold);
        letter-spacing: var(--kanonis-letter-spacing-tight);
        line-height: var(--kanonis-line-height-tight);
      }
      p {
        max-width: 48rem;
        margin: 0.4375rem 0 0;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-md);
      }
      .actions {
        flex: 0 0 auto;
      }
      @media ${mediaCompact} {
        .header {
          display: grid;
          align-items: start;
        }
        .actions {
          width: 100%;
        }
      }
    `,
  ];
  @property() eyebrow = '';
  @property() heading = '';
  @property() description = '';
  protected override render() {
    return html`<header class="header" part="header">
      <div class="copy">
        ${this.eyebrow ? html`<p class="eyebrow">${this.eyebrow}</p>` : nothing}
        <h1 part="heading">${this.heading}</h1>
        ${this.description ? html`<p part="description">${this.description}</p>` : nothing}
      </div>
      <div class="actions" part="actions"><slot name="actions"></slot></div>
    </header>`;
  }
}

export class KanonisDetailSidebar extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    css`
      :host {
        position: fixed;
        z-index: var(--kanonis-z-modal);
        inset: 0;
        display: block;
        visibility: hidden;
        pointer-events: none;
        transition: visibility 0s linear var(--kanonis-duration-normal);
      }
      :host([open]) {
        visibility: visible;
        transition-delay: 0s;
      }
      :host([open][modal]) {
        pointer-events: auto;
      }
      .backdrop {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        border: 0;
        background: color-mix(in srgb, var(--kanonis-color-bg-sunken) 38%, transparent);
        opacity: 0;
        pointer-events: none;
        cursor: default;
        transition: opacity var(--kanonis-duration-normal) var(--kanonis-ease-standard);
      }
      :host([open][modal]) .backdrop {
        opacity: 1;
        pointer-events: auto;
      }
      aside {
        position: absolute;
        inset: 0 0 0 auto;
        display: grid;
        grid-template-rows: auto auto minmax(0, 1fr) auto;
        width: min(var(--kanonis-detail-sidebar-width, 30rem), 100%);
        border-left: 1px solid var(--kanonis-color-border-default);
        outline: 0;
        background: var(--kanonis-color-bg-surface);
        box-shadow: var(--kanonis-shadow-lg);
        color: var(--kanonis-color-text-primary);
        pointer-events: auto;
        transform: translateX(100%);
        transition: transform var(--kanonis-duration-normal) var(--kanonis-ease-standard);
      }
      :host([open]) aside {
        transform: translateX(0);
      }
      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--kanonis-space-4);
        padding: var(--kanonis-space-6);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
      }
      h2 {
        margin: 0;
        font-size: var(--kanonis-font-size-xl);
        line-height: var(--kanonis-line-height-tight);
      }
      .close {
        display: grid;
        place-items: center;
        flex: 0 0 auto;
        width: 2.25rem;
        height: 2.25rem;
        padding: 0;
        border: 1px solid var(--kanonis-color-border-default);
        border-radius: var(--kanonis-radius-md);
        background: var(--kanonis-color-bg-surface-subtle);
        color: var(--kanonis-color-text-muted);
        font: inherit;
        font-size: 1.375rem;
        line-height: 1;
        cursor: pointer;
      }
      .close:hover {
        border-color: var(--kanonis-color-border-strong);
        background: var(--kanonis-color-bg-hover);
        color: var(--kanonis-color-text-primary);
      }
      .summary {
        padding: var(--kanonis-space-5) var(--kanonis-space-6);
        border-bottom: 1px solid var(--kanonis-color-border-subtle);
        background: var(--kanonis-color-bg-surface-subtle);
      }
      .content {
        min-height: 0;
        padding: var(--kanonis-space-5) var(--kanonis-space-6);
        overflow: auto;
        overscroll-behavior: contain;
        scrollbar-gutter: stable;
      }
      footer {
        padding: var(--kanonis-space-4) var(--kanonis-space-6);
        border-top: 1px solid var(--kanonis-color-border-subtle);
        background: var(--kanonis-color-bg-surface-subtle);
      }
      @media ${mediaCompact} {
        aside {
          width: 100%;
        }
        header,
        .summary,
        .content,
        footer {
          padding-inline: var(--kanonis-space-4);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        :host,
        .backdrop,
        aside {
          transition: none;
        }
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) modal = false;
  @property() heading = 'Details';
  @property({ attribute: 'close-label' }) closeLabel = 'Close details';
  @query('aside') private panel!: HTMLElement;
  private returnFocus: HTMLElement | null = null;

  protected override updated(changed: PropertyValues<this>) {
    if (!changed.has('open')) return;
    if (this.open) {
      this.returnFocus =
        this.ownerDocument.activeElement instanceof HTMLElement
          ? this.ownerDocument.activeElement
          : null;
      this.panel.focus({ preventScroll: true });
    } else {
      this.returnFocus?.focus({ preventScroll: true });
      this.returnFocus = null;
    }
  }

  private close() {
    this.emit<void>('kanonis-close', undefined);
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key !== 'Tab' || !this.modal) return;
    const selector =
      'button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"]),kanonis-button:not([disabled]),kanonis-icon-button:not([disabled]),kanonis-input:not([disabled]),kanonis-select:not([disabled]),kanonis-checkbox:not([disabled])';
    const focusable = [
      ...this.shadowRoot!.querySelectorAll<HTMLElement>('.close'),
      ...this.querySelectorAll<HTMLElement>(selector),
    ].filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
    if (!focusable.length) {
      event.preventDefault();
      this.panel.focus();
      return;
    }
    const active =
      this.shadowRoot?.activeElement instanceof HTMLElement
        ? this.shadowRoot.activeElement
        : this.ownerDocument.activeElement;
    const index = focusable.indexOf(active as HTMLElement);
    if (
      index < 0 ||
      (event.shiftKey && index === 0) ||
      (!event.shiftKey && index === focusable.length - 1)
    ) {
      event.preventDefault();
      (event.shiftKey ? focusable.at(-1) : focusable[0])?.focus();
    }
  }

  protected override render() {
    return html`<div aria-hidden=${this.open ? 'false' : 'true'} @keydown=${this.handleKeydown}>
      <button
        class="backdrop"
        type="button"
        tabindex="-1"
        aria-label=${this.closeLabel}
        @click=${this.close}
      ></button>
      <aside
        part="panel"
        role=${this.modal ? 'dialog' : 'complementary'}
        aria-modal=${this.modal ? 'true' : nothing}
        aria-labelledby=${this.heading ? 'detail-sidebar-title' : nothing}
        aria-label=${this.heading ? nothing : 'Details'}
        tabindex="-1"
      >
        <header part="header">
          <h2 id="detail-sidebar-title" part="heading">${this.heading}</h2>
          <button
            class="close"
            part="close-button"
            type="button"
            aria-label=${this.closeLabel}
            @click=${this.close}
          >
            ×
          </button>
        </header>
        <section class="summary" part="summary"><slot name="summary"></slot></section>
        <section class="content" part="content"><slot></slot></section>
        <footer part="footer"><slot name="footer"></slot></footer>
      </aside>
    </div>`;
  }
}
