import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p2Base } from '../enterprise-p2/shared.js';


export interface KanonisTask {
  id: string;
  title: string;
  detail?: string;
  completed?: boolean;
}

export class KanonisTaskList extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p2Base,
    css`
      ul {
        display: grid;
        gap: var(--kanonis-space-1);
        margin: 0;
        padding: var(--kanonis-space-2);
        list-style: none;
      }
      li {
        display: flex;
        gap: var(--kanonis-space-3);
        padding: var(--kanonis-space-3);
        border-radius: var(--kanonis-radius-md);
      }
      li:hover {
        background: var(--kanonis-color-bg-hover);
      }
      .copy {
        min-width: 0;
      }
      .detail {
        display: block;
        color: var(--kanonis-color-text-muted);
        font-size: var(--kanonis-font-size-sm);
      }
      li[data-completed] strong {
        text-decoration: line-through;
        color: var(--kanonis-color-text-muted);
      }
      input {
        accent-color: var(--kanonis-color-accent-primary);
      }
    `,
  ];
  @property({ attribute: false }) tasks: KanonisTask[] = [];
  private toggle(id: string) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    this.emit<KanonisTask[]>('kanonis-task-change', this.tasks);
  }
  protected override render() {
    return html`<ul class="surface" aria-label="Tasks">
      ${this.tasks.map(
        (task) =>
          html`<li ?data-completed=${task.completed}>
            <input
              type="checkbox"
              .checked=${task.completed ?? false}
              aria-label=${`Complete ${task.title}`}
              @change=${() => this.toggle(task.id)}
            /><span class="copy"
              ><strong>${task.title}</strong
              >${task.detail ? html`<span class="detail">${task.detail}</span>` : nothing}</span
            >
          </li>`,
      )}
    </ul>`;
  }
}
