import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const meta: Meta = {
  title: 'Patterns/Operations',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
export const Operations: StoryObj = {
  render: () =>
    html`<div style="display:grid;gap:1rem;max-width:1000px;margin:auto;padding:1.5rem">
      <kanonis-form-section
        heading="Project settings"
        description="Configure ownership and release details"
        ><kanonis-input label="Project name" value="Atlas rollout"></kanonis-input
        ><kanonis-date-picker label="Release date" value="2026-09-04"></kanonis-date-picker
        ><kanonis-time-picker label="Release time" value="09:30"></kanonis-time-picker
      ></kanonis-form-section>
      <kanonis-field-array
        .items=${[{ id: 'one', label: 'Environment', value: 'Production' }]}
      ></kanonis-field-array>
      <kanonis-stepper
        .steps=${[
          { id: 'configure', label: 'Configure' },
          { id: 'review', label: 'Review' },
          { id: 'deploy', label: 'Deploy' },
        ]}
        value="review"
      ></kanonis-stepper>
      <kanonis-approval-flow status="pending"></kanonis-approval-flow>
      <kanonis-task-list
        .tasks=${[
          { id: '1', title: 'Review access policy', detail: 'Security team', completed: false },
          { id: '2', title: 'Validate deployment', completed: true },
        ]}
      ></kanonis-task-list>
      <kanonis-timeline
        .items=${[
          {
            title: 'Deployment started',
            body: 'Release 2.4.0 entered the pipeline.',
            time: '09:42',
          },
          { title: 'Configuration approved', time: 'Yesterday' },
        ]}
      ></kanonis-timeline>
      <kanonis-activity-feed
        .items=${[{ id: '1', actor: 'Jordan Lee', body: 'Updated the release target.', time: '10 minutes ago' }]}
      ></kanonis-activity-feed>
      <kanonis-job-status label="Deployment progress" value="68" show-value></kanonis-job-status>
      <kanonis-change-summary
        .changes=${[
          { field: 'Owner', before: 'Operations', after: 'Platform' },
          { field: 'Region', before: 'EU West', after: 'EU Central' },
        ]}
      ></kanonis-change-summary>
      <kanonis-file-upload
        label="Upload release manifest"
        hint="YAML or JSON up to 10 MB"
        accept=".yaml,.json"
      ></kanonis-file-upload>
    </div>`,
};
