import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisRange } from './range.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-range',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Example label',
    name: 'example',
    value: '0',
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: false,
    helpText: 'Helpful guidance appears here.',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    name: { control: 'text', description: 'Public property.' },
    value: { control: 'text', description: 'Public property.' },
    min: { control: { type: 'number' }, description: 'Public property.' },
    max: { control: { type: 'number' }, description: 'Public property.' },
    step: { control: { type: 'number' }, description: 'Public property.' },
    disabled: { control: 'boolean', description: 'Public property.' },
    showValue: { control: 'boolean', description: 'Public property.' },
    helpText: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `name`, `value`, `min`, `max`, `step`, `disabled`, `showValue`, `helpText`. This component does not expose a slot. Events: `kanonis-input`, `kanonis-change`.',
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
    const component = document.createElement('kanonis-range') as HTMLElement &
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

export const Range: StoryObj = {
  render: () =>
    html`<kanonis-range
      label="Forecast confidence"
      value="72"
      min="0"
      max="100"
      show-value
      helpText="Adjust the confidence threshold"
    ></kanonis-range>`,
};

void KanonisRange;
