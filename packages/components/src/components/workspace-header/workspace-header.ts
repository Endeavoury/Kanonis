import { foundationStyles, mediaCompact } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';


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
