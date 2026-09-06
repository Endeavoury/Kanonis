import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Feedback', tags: ['autodocs'] };
export default meta;
export const Alerts: StoryObj = {
  render: () =>
    html`<kanonis-stack
      >${['info', 'success', 'warning', 'danger'].map((tone) => html`<kanonis-alert tone=${tone} heading=${tone[0]!.toUpperCase() + tone.slice(1)} ?dismissible=${tone === 'info'}>A concise message explains what happened and what the user can do next.</kanonis-alert>`)}</kanonis-stack
    >`,
};
export const Loading: StoryObj = {
  render: () => html`<kanonis-loading-state label="Calculating financial overview"></kanonis-loading-state>`,
};
export const Empty: StoryObj = {
  render: () =>
    html`<kanonis-empty-state
      heading="No transactions found"
      description="Change the filters or import a bank statement to populate this view."
      ><kanonis-icon slot="icon" name="table"></kanonis-icon
      ><kanonis-button slot="actions">Import statement</kanonis-button></kanonis-empty-state
    >`,
};

export const Progress: StoryObj = {
  render: () =>
    html`<kanonis-stack>
      <kanonis-progress label="Importing statements" value="68" show-value></kanonis-progress>
      <kanonis-progress label="Validating transactions" tone="success"></kanonis-progress>
      <kanonis-progress label="Storage usage" value="86" tone="warning" show-value></kanonis-progress>
    </kanonis-stack>`,
};

export const Skeletons: StoryObj = {
  render: () =>
    html`<kanonis-inline wrap="false" align="start">
      <kanonis-skeleton shape="circle" width="3rem" height="3rem"></kanonis-skeleton>
      <kanonis-stack style="width:min(100%,28rem)" gap="2">
        <kanonis-skeleton width="42%" height="1.1rem"></kanonis-skeleton>
        <kanonis-skeleton width="100%"></kanonis-skeleton>
        <kanonis-skeleton width="76%"></kanonis-skeleton>
      </kanonis-stack>
    </kanonis-inline>`,
};

export const Toasts: StoryObj = {
  render: () =>
    html`<div style="min-height:16rem">
      <kanonis-toast-region label="Example notifications">
        <kanonis-toast heading="Import completed" tone="success" duration="0">
          24 new transactions were added.
        </kanonis-toast>
        <kanonis-toast heading="Connection needs attention" tone="warning" duration="0">
          Reconnect the bank to refresh balances.
          <kanonis-button slot="actions" size="small" variant="secondary">Reconnect</kanonis-button>
        </kanonis-toast>
      </kanonis-toast-region>
    </div>`,
};
