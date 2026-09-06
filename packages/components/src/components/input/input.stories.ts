import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisInput } from './input.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-input',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Example label',
    name: 'example',
    value: 'Example value',
    type: 'text',
    placeholder: 'Enter a value',
    autocomplete: 'Example',
    disabled: false,
    required: false,
    readonly: false,
    minlength: 0,
    maxlength: 0,
    helpText: 'Helpful guidance appears here.',
    error: 'Example validation message.',
    size: 'medium',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    name: { control: 'text', description: 'Public property.' },
    value: { control: 'text', description: 'Public property.' },
    type: { control: 'text', description: 'Public property.' },
    placeholder: { control: 'text', description: 'Public property.' },
    autocomplete: { control: 'text', description: 'Public property.' },
    disabled: { control: 'boolean', description: 'Public property.' },
    required: { control: 'boolean', description: 'Public property.' },
    readonly: { control: 'boolean', description: 'Public property.' },
    minlength: { control: { type: 'number' }, description: 'Public property (number).' },
    maxlength: { control: { type: 'number' }, description: 'Public property (number).' },
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
          'Properties: `label`, `name`, `value`, `type`, `placeholder`, `autocomplete`, `disabled`, `required`, `readonly`, `minlength`, `maxlength`, `helpText`, `error`, `size`. Slots: `prefix`, `suffix`. Events: `kanonis-input`, `kanonis-change`.',
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
    const component = document.createElement('kanonis-input') as HTMLElement &
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

const accountOptions = [
  { label: 'All accounts', value: 'all' },
  { label: 'Daily account · 4300', value: 'daily' },
  { label: 'Savings · 9308', value: 'savings' },
];

export const InputPlayground: StoryObj = {
  args: {
    label: 'Device name',
    placeholder: 'Enter a name',
    helpText: 'Names can contain letters, numbers, and spaces.',
    error: '',
    disabled: false,
    required: false,
    size: 'medium',
  },
  render: (args) =>
    html`<kanonis-input
      label=${args['label']}
      placeholder=${args['placeholder']}
      helpText=${args['helpText']}
      error=${args['error']}
      ?disabled=${args['disabled']}
      ?required=${args['required']}
      size=${args['size']}
    ></kanonis-input>`,
};

export const InputStates: StoryObj = {
  render: () =>
    html`<div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px"
    >
      <kanonis-input label="Default" placeholder="Value"></kanonis-input
      ><kanonis-input label="Required" required value="Finance gateway"></kanonis-input
      ><kanonis-input label="Error" value="x" error="Use at least three characters"></kanonis-input
      ><kanonis-input label="Disabled" value="Managed by policy" disabled></kanonis-input
      ><kanonis-input
        label="Long content"
        value="A deliberately long value that demonstrates horizontal control behavior"
      ></kanonis-input>
    </div>`,
};

export const NativeFormSubmission: StoryObj = {
  render: () =>
    html`<form
      @submit=${(event: SubmitEvent) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget as HTMLFormElement);
        alert(JSON.stringify(Object.fromEntries(data)));
      }}
    >
      <kanonis-stack
        ><kanonis-input name="name" label="Name" value="Gateway" required></kanonis-input
        ><kanonis-select
          name="account"
          label="Account"
          value="daily"
          .options=${accountOptions}
        ></kanonis-select
        ><kanonis-checkbox name="enabled" checked>Enabled</kanonis-checkbox
        ><kanonis-button type="submit">Submit native form</kanonis-button></kanonis-stack
      >
    </form>`,
};

void KanonisInput;
