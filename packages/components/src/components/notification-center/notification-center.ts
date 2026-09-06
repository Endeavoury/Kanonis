import { foundationStyles } from '@endeavoury/kanonis-styles';
import { css, html, nothing, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisElement } from '../../core/kanonis-element.js';
import { p1Surface } from '../enterprise-p1/shared.js';


export interface KanonisNotification {
  id: string;
  title: string;
  body?: string;
  read?: boolean;
  time?: string;
}

export class KanonisNotificationCenter extends KanonisElement {
  static override styles: CSSResultGroup = [
    foundationStyles,
    p1Surface,
    css`
      .center {
        position: relative;
        display: inline-block;
      }
      .badge {
        position: absolute;
        top: -0.35rem;
        right: -0.35rem;
        min-width: 1.15rem;
        padding: 0.1rem 0.3rem;
        border-radius: var(--kanonis-radius-round);
        background: var(--kanonis-color-danger);
        color: var(--kanonis-color-text-inverse);
        font-size: var(--kanonis-font-size-xs);
        text-align: center;
      }
      .panel {
        position: absolute;
        z-index: var(--kanonis-z-popover);
        top: calc(100% + 0.5rem);
        right: 0;
        width: min(24rem, calc(100vw - 2rem));
        max-height: 28rem;
        overflow: auto;
        padding: var(--kanonis-space-2);
      }
      .notification {
        padding: var(--kanonis-space-3);
        border-radius: var(--kanonis-radius-md);
      }
      .notification:not([data-read]) {
        background: var(--kanonis-color-bg-selected);
      }
    `,
  ];
  @property({ attribute: false }) notifications: KanonisNotification[] = [];
  @property({ type: Boolean, reflect: true }) open = false;
  @property() label = 'Notifications';
  private markRead(id: string) {
    this.emit<{ id: string }>('kanonis-notification-read', { id });
  }
  protected override render() {
    const unread = this.notifications.filter((notification) => !notification.read).length;
    return html`<div class="center">
      <button
        aria-expanded=${this.open}
        aria-label=${this.label}
        @click=${() => (this.open = !this.open)}
      >
        🔔${unread ? html`<span class="badge">${unread}</span>` : nothing}</button
      >${this.open ? html`<section class="panel surface" aria-label=${this.label}>${this.notifications.length ? this.notifications.map((notification) => html`<article class="notification" ?data-read=${notification.read} @click=${() => this.markRead(notification.id)}><strong>${notification.title}</strong>${notification.time ? html`<span class="muted"> · ${notification.time}</span>` : nothing}${notification.body ? html`<p>${notification.body}</p>` : nothing}</article>`) : html`<p class="muted">No notifications</p>`}</section>` : nothing}
    </div>`;
  }
}
