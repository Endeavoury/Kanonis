import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDrawer } from './drawer.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-drawer',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    position: 'end',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    position: {
      control: 'select',
      options: ['start', 'end'],
      description: "Public property ('start' | 'end').",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `position`. This component does not expose a slot. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-drawer') as HTMLElement &
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

export const Drawer: StoryObj = {
  render: () =>
    html`<kanonis-stack>
      <kanonis-button
        @click=${() => (document.querySelector('kanonis-drawer') as HTMLElement & { show(): void })?.show()}
        >Open account details</kanonis-button
      >
      <kanonis-drawer heading="Account details" description="Daily account · 4300">
        <kanonis-stack>
          <kanonis-metric label="Current balance" value="€ 4,285.30"></kanonis-metric>
          <kanonis-disclosure summary="Identifiers">NL12 BANK 3456 7890 12</kanonis-disclosure>
        </kanonis-stack>
      </kanonis-drawer>
    </kanonis-stack>`,
};

void KanonisDrawer;
