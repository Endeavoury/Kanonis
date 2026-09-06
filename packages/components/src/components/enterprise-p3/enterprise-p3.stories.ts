import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const meta: Meta = {
  title: 'Composites/Governance',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
export const Governance: StoryObj = {
  render: () =>
    html`<div style="display:grid;gap:1rem;max-width:1000px;margin:auto;padding:1.5rem">
      <kanonis-maintenance-notice
        heading="Maintenance window"
        message="The deployment service will be read-only."
        until="Saturday 22:00 UTC"
      ></kanonis-maintenance-notice>
      <kanonis-role-badge label="Administrator" tone="admin"></kanonis-role-badge>
      <kanonis-permission-matrix
        .roles=${[
          { id: 'admin', label: 'Admin' },
          { id: 'viewer', label: 'Viewer' },
        ]}
        .permissions=${[
          { id: 'read', label: 'Read records' },
          { id: 'write', label: 'Edit records' },
          { id: 'deploy', label: 'Deploy changes' },
        ]}
      ></kanonis-permission-matrix>
      <kanonis-audit-log
        .entries=${[
          {
            id: '1',
            actor: 'Jordan Lee',
            action: 'Updated access policy',
            target: 'Production',
            time: '10:42 UTC',
          },
          { id: '2', actor: 'System', action: 'Deployment completed', time: '09:30 UTC' },
        ]}
      ></kanonis-audit-log>
      <kanonis-diff-viewer
        .lines=${[
          { type: 'unchanged', text: 'name: atlas' },
          { type: 'removed', text: 'region: eu-west' },
          { type: 'added', text: 'region: eu-central' },
        ]}
      ></kanonis-diff-viewer>
      <kanonis-json-editor
        label="Configuration"
        value='{"enabled":true}'
        language="json"
      ></kanonis-json-editor>
      <kanonis-code-editor
        label="Deployment script"
        value="npm run deploy"
        language="shell"
      ></kanonis-code-editor>
      <kanonis-help-panel heading="Need guidance?"
        ><a slot="links" href="#docs">Read documentation</a
        ><a slot="links" href="#support">Contact support</a></kanonis-help-panel
      >
      <div style="display:flex;gap:1rem;align-items:start">
        <kanonis-coachmark
          heading="New workflow"
          message="Use the command palette to find actions faster."
        ></kanonis-coachmark
        ><kanonis-tour
          open
          .steps=${[
            { id: 'one', heading: 'Welcome', body: 'This workspace keeps your team aligned.' },
            { id: 'two', heading: 'Finish', body: 'You are ready to get started.' },
          ]}
        ></kanonis-tour>
      </div>
      <kanonis-compare-view left-label="Current" right-label="Proposed">
        <pre slot="left">region: eu-west</pre>
        <pre slot="right">region: eu-central</pre>
      </kanonis-compare-view>
    </div>`,
};
