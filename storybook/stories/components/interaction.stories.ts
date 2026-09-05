import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Interaction',
  tags: ['autodocs'],
};

export default meta;

export const ThemeToggle: StoryObj = {
  render: () =>
    html`<kanonis-inline>
      <kanonis-theme-toggle theme="light"></kanonis-theme-toggle>
      <span>Switches and persists the document theme when configured with a storage key.</span>
    </kanonis-inline>`,
};

export const Tabs: StoryObj = {
  render: () =>
    html`<kanonis-tabs label="Account views" value="activity">
      <kanonis-tab value="activity" label="Activity">
        <kanonis-panel
          ><strong>Recent account activity</strong>
          <p>Arrow keys move between tabs.</p></kanonis-panel
        >
      </kanonis-tab>
      <kanonis-tab value="details" label="Details">
        <kanonis-panel
          ><strong>Account details</strong>
          <p>Panels preserve native slotted content.</p></kanonis-panel
        >
      </kanonis-tab>
      <kanonis-tab value="audit" label="Audit log" disabled>
        <kanonis-panel>This panel is unavailable.</kanonis-panel>
      </kanonis-tab>
    </kanonis-tabs>`,
};

export const Disclosure: StoryObj = {
  render: () =>
    html`<kanonis-stack>
      <kanonis-disclosure summary="How balances are calculated" open>
        Balances are calculated independently for every account and statement.
      </kanonis-disclosure>
      <kanonis-disclosure summary="Unavailable section" disabled>
        This content cannot currently be expanded.
      </kanonis-disclosure>
    </kanonis-stack>`,
};
