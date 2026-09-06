import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisCheckbox } from './checkbox.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-checkbox',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    name: 'example',
    value: 'on',
    checked: false,
    indeterminate: false,
    disabled: false,
    required: false,
    helpText: 'Helpful guidance appears here.',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    name: { control: 'text', description: 'Public property.' },
    value: { control: 'text', description: 'Public property.' },
    checked: { control: 'boolean', description: 'Public property.' },
    indeterminate: { control: 'boolean', description: 'Public property.' },
    disabled: { control: 'boolean', description: 'Public property.' },
    required: { control: 'boolean', description: 'Public property.' },
    helpText: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `name`, `value`, `checked`, `indeterminate`, `disabled`, `required`, `helpText`. Slots: `default`. Events: `kanonis-change`.',
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
    const component = document.createElement('kanonis-checkbox') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-change'] as readonly string[]) {
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

export const Checkbox: StoryObj = {
  render: () =>
    html`<kanonis-stack
      ><kanonis-checkbox checked>Apply to future matching entries</kanonis-checkbox
      ><kanonis-checkbox required helpText="This choice is required">Accept policy</kanonis-checkbox
      ><kanonis-checkbox disabled>Unavailable option</kanonis-checkbox></kanonis-stack
    >`,
};

void KanonisCheckbox;
