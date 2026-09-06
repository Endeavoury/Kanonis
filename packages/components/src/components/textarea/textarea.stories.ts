import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisTextarea } from './textarea.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-textarea',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Example label',
    name: 'example',
    value: 'Example value',
    placeholder: 'Enter a value',
    rows: 4,
    minlength: 0,
    maxlength: 0,
    disabled: false,
    required: false,
    readonly: false,
    helpText: 'Helpful guidance appears here.',
    error: 'Example validation message.',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    name: { control: 'text', description: 'Public property.' },
    value: { control: 'text', description: 'Public property.' },
    placeholder: { control: 'text', description: 'Public property.' },
    rows: { control: { type: 'number' }, description: 'Public property.' },
    minlength: { control: { type: 'number' }, description: 'Public property (number).' },
    maxlength: { control: { type: 'number' }, description: 'Public property (number).' },
    disabled: { control: 'boolean', description: 'Public property.' },
    required: { control: 'boolean', description: 'Public property.' },
    readonly: { control: 'boolean', description: 'Public property.' },
    helpText: { control: 'text', description: 'Public property.' },
    error: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `name`, `value`, `placeholder`, `rows`, `minlength`, `maxlength`, `disabled`, `required`, `readonly`, `helpText`, `error`. This component does not expose a slot. Events: `kanonis-input`, `kanonis-change`.',
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
    const component = document.createElement('kanonis-textarea') as HTMLElement &
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

export const Textarea: StoryObj = {
  render: () =>
    html`<kanonis-textarea
      label="Internal note"
      placeholder="Add context for this transaction"
      helpText="Visible only to your finance team"
      maxlength="500"
    ></kanonis-textarea>`,
};

void KanonisTextarea;
