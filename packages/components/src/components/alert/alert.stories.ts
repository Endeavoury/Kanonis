import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisAlert } from './alert.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-alert',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    tone: 'info',
    heading: 'Example heading',
    dismissible: false,
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    tone: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
      description: 'Public property (KanonisTone).',
    },
    heading: { control: 'text', description: 'Public property.' },
    dismissible: { control: 'boolean', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `tone`, `heading`, `dismissible`. Slots: `icon`, `default`. Events: `kanonis-dismiss`.',
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
    const component = document.createElement('kanonis-alert') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-dismiss'] as readonly string[]) {
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

export const Alerts: StoryObj = {
  render: () =>
    html`<kanonis-stack
      >${['info', 'success', 'warning', 'danger'].map((tone) => html`<kanonis-alert tone=${tone} heading=${tone[0]!.toUpperCase() + tone.slice(1)} ?dismissible=${tone === 'info'}>A concise message explains what happened and what the user can do next.</kanonis-alert>`)}</kanonis-stack
    >`,
};

void KanonisAlert;
