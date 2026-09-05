import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = { title: 'Patterns/Messaging decisions', tags: ['autodocs'] };
export default meta;

export const ScopeAndUrgency: StoryObj = {
  render: () => html`<kanonis-stack gap="4">
    <kanonis-banner tone="warning" heading="Scheduled maintenance">
      Imports pause between 22:00 and 22:15. Work already saved is unaffected.
    </kanonis-banner>
    <kanonis-alert tone="danger" heading="Two fields need attention">
      Correct the fields marked below, then save again.
    </kanonis-alert>
    <kanonis-empty-state heading="No matching records">
      Remove a filter or search for another identifier.
      <kanonis-button slot="actions" variant="secondary">Clear filters</kanonis-button>
    </kanonis-empty-state>
    <kanonis-toast-region label="Background confirmations">
      <kanonis-toast heading="Export started" duration="0">
        The download will appear when it is ready.
      </kanonis-toast>
    </kanonis-toast-region>
  </kanonis-stack>`,
};
