import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTooltip } from './tooltip.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-tooltip',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    content: 'Example content',
    open: false,
    placement: 'top',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    content: { control: 'text', description: 'Public property.' },
    open: { control: 'boolean', description: 'Public property.' },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end'],
      description: "Public property ('top' | 'bottom' | 'start' | 'end').",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `content`, `open`, `placement`. Slots: `default`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-tooltip') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of [] as readonly string[]) {
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

export const Tooltip: StoryObj = {
  render: () =>
    html`<kanonis-tooltip content="Refresh balances from the connected bank">
      <kanonis-icon-button label="Refresh balances" icon="refresh"></kanonis-icon-button>
    </kanonis-tooltip>`,
};

void KanonisTooltip;
