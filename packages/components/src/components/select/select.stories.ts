import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSelect } from './select.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-select',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Example label',
    name: 'example',
    value: 'Example value',
    placeholder: 'Enter a value',
    options: [],
    disabled: false,
    required: false,
    helpText: 'Helpful guidance appears here.',
    error: 'Example validation message.',
    size: 'medium',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    name: { control: 'text', description: 'Public property.' },
    value: { control: 'text', description: 'Public property.' },
    placeholder: { control: 'text', description: 'Public property.' },
    options: { control: 'object', description: 'Public property (KanonisSelectOption[]).' },
    disabled: { control: 'boolean', description: 'Public property.' },
    required: { control: 'boolean', description: 'Public property.' },
    helpText: { control: 'text', description: 'Public property.' },
    error: { control: 'text', description: 'Public property.' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Public property (KanonisSize).',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `name`, `value`, `placeholder`, `options`, `disabled`, `required`, `helpText`, `error`, `size`. This component does not expose a slot. Events: `kanonis-change`.',
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
    const component = document.createElement('kanonis-select') as HTMLElement &
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

const accountOptions = [
  { label: 'All accounts', value: 'all' },
  { label: 'Daily account · 4300', value: 'daily' },
  { label: 'Savings · 9308', value: 'savings' },
];

export const Select: StoryObj = {
  render: () =>
    html`<kanonis-select
      label="Account"
      value="daily"
      .options=${accountOptions}
      helpText="Choose the account scope"
    ></kanonis-select>`,
};

void KanonisSelect;
