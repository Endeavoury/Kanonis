import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const accountOptions = [
  { label: 'All accounts', value: 'all' },
  { label: 'Daily account · 4300', value: 'daily' },
  { label: 'Savings · 9308', value: 'savings' },
];
const meta: Meta = {
  title: 'Components/Forms',
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};
export default meta;
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
export const SearchInput: StoryObj = {
  render: () =>
    html`<kanonis-search-input
      label="Search ledger"
      placeholder="Counterparty, IBAN, reference or description"
      value="Albert"
    ></kanonis-search-input>`,
};
export const Select: StoryObj = {
  render: () =>
    html`<kanonis-select
      label="Account"
      value="daily"
      .options=${accountOptions}
      helpText="Choose the account scope"
    ></kanonis-select>`,
};
export const Checkbox: StoryObj = {
  render: () =>
    html`<kanonis-stack
      ><kanonis-checkbox checked>Apply to future matching entries</kanonis-checkbox
      ><kanonis-checkbox required helpText="This choice is required">Accept policy</kanonis-checkbox
      ><kanonis-checkbox disabled>Unavailable option</kanonis-checkbox></kanonis-stack
    >`,
};
export const FormFieldComposition: StoryObj = {
  render: () =>
    html`<kanonis-form-field
      label="Composed field"
      helpText="Form field can arrange a custom or native control"
      ><input
        style="height:40px;border:1px solid var(--ds-color-border-default);border-radius:7px;background:var(--ds-color-bg-surface);color:var(--ds-color-text-primary);padding:0 12px"
        value="Native consumer control"
    /></kanonis-form-field>`,
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

export const DropZone: StoryObj = {
  render: () =>
    html`<kanonis-drop-zone
      label="Choose or drop CAMT files"
      hint="XML or ZIP · up to 10 files"
      accept=".xml,.zip,application/xml,application/zip"
      max-files="10"
      multiple
      ><kanonis-icon slot="icon" name="upload"></kanonis-icon
    ></kanonis-drop-zone>`,
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

export const Switch: StoryObj = {
  render: () =>
    html`<kanonis-stack>
      <kanonis-switch checked helpText="Receive an email after every successful import"
        >Import notifications</kanonis-switch
      >
      <kanonis-switch disabled>Managed by your organization</kanonis-switch>
    </kanonis-stack>`,
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

export const RadioGroup: StoryObj = {
  render: () =>
    html`<kanonis-radio-group label="Export format" value="csv" required>
      <kanonis-radio value="csv">CSV spreadsheet</kanonis-radio>
      <kanonis-radio value="camt">CAMT XML</kanonis-radio>
      <kanonis-radio value="pdf" disabled>PDF report (coming soon)</kanonis-radio>
    </kanonis-radio-group>`,
};
