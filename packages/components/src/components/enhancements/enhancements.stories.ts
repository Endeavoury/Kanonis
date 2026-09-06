import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Maturity additions',
  tags: ['autodocs'],
};
export default meta;

export const ActionComposition: StoryObj = {
  render: () =>
    html`<kanonis-stack gap="6">
      <kanonis-segmented-control label="Report period" value="month">
        <kanonis-segment value="week">Week</kanonis-segment>
        <kanonis-segment value="month">Month</kanonis-segment>
        <kanonis-segment value="year">Year</kanonis-segment>
      </kanonis-segmented-control>

      <kanonis-action-bar label="Record actions" collapse-at-compact>
        <kanonis-button>Save</kanonis-button>
        <kanonis-button variant="secondary" data-overflow>Duplicate</kanonis-button>
        <kanonis-button variant="danger" data-overflow slot="overflow">Delete</kanonis-button>
      </kanonis-action-bar>

      <kanonis-split-button label="Publish" menu-label="Publishing options">
        Publish
        <kanonis-menu-item slot="menu" value="schedule">Schedule</kanonis-menu-item>
        <kanonis-menu-item slot="menu" value="draft">Save draft</kanonis-menu-item>
      </kanonis-split-button>

      <kanonis-inline>
        <kanonis-chip value="open" label="Open" selected dismissible>Open</kanonis-chip>
        <kanonis-chip value="closed" label="Closed">Closed</kanonis-chip>
      </kanonis-inline>

      <kanonis-input-group label="Repository URL">
        <span slot="prefix">https://</span>
        <kanonis-input label="Repository host" hide-label value="example.test/project"></kanonis-input>
        <kanonis-button slot="suffix" variant="ghost">Copy</kanonis-button>
      </kanonis-input-group>
    </kanonis-stack>`,
};

export const AccessibleReordering: StoryObj = {
  render: () =>
    html`<kanonis-reorder-list label="Dashboard panels">
      <kanonis-reorder-item value="summary" label="Summary">Summary</kanonis-reorder-item>
      <kanonis-reorder-item value="activity" label="Activity">Activity</kanonis-reorder-item>
      <kanonis-reorder-item value="audit" label="Audit log">Audit log</kanonis-reorder-item>
    </kanonis-reorder-list>`,
};

export const SharedAssets: StoryObj = {
  render: () =>
    html`<kanonis-stack gap="6">
      <kanonis-brand-mark></kanonis-brand-mark>
      <kanonis-inline>
        <kanonis-illustration variant="empty" label="Empty archive"></kanonis-illustration>
        <kanonis-illustration variant="search" label="Search"></kanonis-illustration>
        <kanonis-illustration variant="success" label="Success"></kanonis-illustration>
        <kanonis-illustration variant="error" label="Error"></kanonis-illustration>
      </kanonis-inline>
      <kanonis-live-region message="Example update completed"></kanonis-live-region>
    </kanonis-stack>`,
};
