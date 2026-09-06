import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p3Base } from '../enterprise-p3/shared.js';


export interface KanonisDiffLine {
  type: 'added' | 'removed' | 'unchanged';
  text: string;
}

export class KanonisDiffViewer extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p3Base,
    css`
      pre {
        margin: 0;
        padding: var(--kanonis-space-4);
        overflow: auto;
        font-family: var(--kanonis-font-mono);
        font-size: var(--kanonis-font-size-sm);
        line-height: 1.7;
      }
      .line {
        display: block;
        padding: 0 var(--kanonis-space-2);
        white-space: pre;
      }
      .line[data-added] {
        background: var(--kanonis-color-success-soft);
        color: var(--kanonis-color-success);
      }
      .line[data-removed] {
        background: var(--kanonis-color-danger-soft);
        color: var(--kanonis-color-danger);
      }
    `,
  ];
  @property({ attribute: false }) lines: KanonisDiffLine[] = [];
  protected override render() {
    return html`<pre class="surface" aria-label="Difference">
${this.lines.map((line) => html`<span class="line" ?data-added=${line.type === 'added'} ?data-removed=${line.type === 'removed'}>${line.type === 'added' ? '＋' : line.type === 'removed' ? '－' : ' '} ${line.text}</span>`)}</pre>`;
  }
}
