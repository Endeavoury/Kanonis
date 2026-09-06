import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCard } from './card.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-card',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    padding: 'normal',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    padding: {
      control: 'select',
      options: ['none', 'compact', 'normal'],
      description: "Public property ('none' | 'compact' | 'normal').",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `padding`. Slots: `header`, `actions`, `default`, `footer`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-card') as HTMLElement &
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

export const CardsAndPanels: StoryObj = {
  render: () =>
    html`<kanonis-grid columns="2" responsive
      ><kanonis-card
        ><strong slot="header">Account</strong
        ><kanonis-badge slot="actions" tone="success">Active</kanonis-badge>
        <p>Daily account · NL91 •••• 4300</p>
        <strong>€12,840.22</strong><span slot="footer">Updated a minute ago</span></kanonis-card
      ><kanonis-panel
        eyebrow="Analytics"
        heading="Spending by category"
        description="A technical panel with a stable action slot"
        ><kanonis-button slot="actions" variant="secondary" size="small"
          >View details</kanonis-button
        >
        <p>
          Charts and application-specific visualizations compose inside this neutral surface.
        </p></kanonis-panel
      ></kanonis-grid
    >`,
};

void KanonisCard;
