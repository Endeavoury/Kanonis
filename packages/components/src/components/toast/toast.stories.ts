import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisToast } from './toast.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-toast',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    open: true,
    tone: 'info',
    heading: 'Example heading',
    duration: 5000,
    dismissible: true,
    closeLabel: 'Dismiss notification',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    open: { control: 'boolean', description: 'Public property.' },
    tone: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
      description: 'Public property (KanonisTone).',
    },
    heading: { control: 'text', description: 'Public property.' },
    duration: { control: { type: 'number' }, description: 'Public property.' },
    dismissible: { control: 'boolean', description: 'Public property.' },
    closeLabel: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `open`, `tone`, `heading`, `duration`, `dismissible`, `closeLabel`. Slots: `default`, `actions`. Events: `kanonis-toast-close`.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

/** Use the Controls panel to try every public property. Emitted events appear below the component. */
export const Usage: Story = {
  render: (args) => {
    const container = document.createElement('section');
    container.style.cssText = 'display:grid;gap:1rem;max-width:960px';
    const component = document.createElement('kanonis-toast') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-toast-close'] as readonly string[]) {
      component.addEventListener(eventName, (event) => {
        const detail =
          event instanceof CustomEvent && event.detail !== undefined
            ? ' — ' + JSON.stringify(event.detail)
            : '';
        events.textContent = eventName + detail;
      });
    }
    container.append(component, events);
    return container;
  },
};

export const Toasts: StoryObj = {
  render: () =>
    html`<div style="min-height:16rem">
      <kanonis-toast-region label="Example notifications">
        <kanonis-toast heading="Import completed" tone="success" duration="0">
          24 new transactions were added.
        </kanonis-toast>
        <kanonis-toast heading="Connection needs attention" tone="warning" duration="0">
          Reconnect the bank to refresh balances.
          <kanonis-button slot="actions" size="small" variant="secondary">Reconnect</kanonis-button>
        </kanonis-toast>
      </kanonis-toast-region>
    </div>`,
};

void KanonisToast;
