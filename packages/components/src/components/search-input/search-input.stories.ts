import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSearchInput } from './search-input.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-search-input',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    clearLabel: 'Clear search',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    clearLabel: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `clearLabel`. Slots: `prefix`. Events: `kanonis-input`, `kanonis-change`.',
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
    const component = document.createElement('kanonis-search-input') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-input', 'kanonis-change'] as readonly string[]) {
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

export const SearchInput: StoryObj = {
  render: () =>
    html`<kanonis-search-input
      label="Search ledger"
      placeholder="Counterparty, IBAN, reference or description"
      value="Albert"
    ></kanonis-search-input>`,
};

void KanonisSearchInput;
