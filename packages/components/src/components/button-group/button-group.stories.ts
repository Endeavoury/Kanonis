import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisButtonGroup } from './button-group.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-button-group',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Actions',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`. Slots: `default`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-button-group') as HTMLElement &
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

export const IconButtonAndGroup: StoryObj = {
  render: () =>
    html`<kanonis-inline
      ><kanonis-icon-button label="Refresh"
        ><kanonis-icon name="refresh"></kanonis-icon></kanonis-icon-button
      ><kanonis-button-group label="Period navigation"
        ><kanonis-icon-button label="Previous"
          ><kanonis-icon name="chevron-left"></kanonis-icon></kanonis-icon-button
        ><kanonis-button variant="secondary">August 2026</kanonis-button
        ><kanonis-icon-button label="Next"
          ><kanonis-icon
            name="chevron-right"
          ></kanonis-icon></kanonis-icon-button></kanonis-button-group
    ></kanonis-inline>`,
};

void KanonisButtonGroup;
