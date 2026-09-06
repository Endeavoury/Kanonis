import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisFormField } from './form-field.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-form-field',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Example label',
    helpText: 'Helpful guidance appears here.',
    error: 'Example validation message.',
    required: false,
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    helpText: { control: 'text', description: 'Public property.' },
    error: { control: 'text', description: 'Public property.' },
    required: { control: 'boolean', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `helpText`, `error`, `required`. Slots: `label`, `default`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-form-field') as HTMLElement &
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

export const FormFieldComposition: StoryObj = {
  render: () =>
    html`<kanonis-form-field
      label="Composed field"
      helpText="Form field can arrange a custom or native control"
      ><input
        style="height:40px;border:1px solid var(--kanonis-color-border-default);border-radius:7px;background:var(--kanonis-color-bg-surface);color:var(--kanonis-color-text-primary);padding:0 12px"
        value="Native consumer control"
    /></kanonis-form-field>`,
};

void KanonisFormField;
