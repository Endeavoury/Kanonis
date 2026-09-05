import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Patterns/Adaptive layouts',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;

const paneContent = (heading: string, description: string) => html`<kanonis-pane-header>
    <div style="padding:var(--ds-space-4)"><strong>${heading}</strong></div>
  </kanonis-pane-header>
  <kanonis-pane-content scrollable>
    <div style="padding:var(--ds-space-4)"><p>${description}</p><slot></slot></div>
  </kanonis-pane-content>`;

export const ListDetail: StoryObj = {
  render: () => html`<div style="height:36rem;max-height:80vh">
    <kanonis-pane-group>
      <kanonis-pane position="left" style="--ds-pane-size:19rem">
        ${paneContent('Records', 'Choose a record to inspect.')}
        <kanonis-list label="Records">
          <kanonis-list-item value="one" selected>Commercial Node</kanonis-list-item>
          <kanonis-list-item value="two">Research Node</kanonis-list-item>
        </kanonis-list>
      </kanonis-pane>
      <kanonis-pane position="center">
        ${paneContent(
          'Commercial Node',
          'The detail region keeps reading and keyboard order after the list.',
        )}
      </kanonis-pane>
    </kanonis-pane-group>
  </div>`,
};

export const SupportingPane: StoryObj = {
  render: () => html`<div style="height:36rem;max-height:80vh">
    <kanonis-pane-group>
      <kanonis-pane position="center">
        ${paneContent('Canonical model', 'The primary work remains available at every width.')}
      </kanonis-pane>
      <kanonis-inspector-pane>
        ${paneContent('Properties', 'Supporting detail becomes an overlay below expanded width.')}
      </kanonis-inspector-pane>
    </kanonis-pane-group>
  </div>`,
};

export const Feed: StoryObj = {
  render: () => html`<kanonis-container>
    <kanonis-grid columns="3" responsive>
      ${['Summary', 'Activity', 'Approvals', 'Jobs', 'Audit', 'Changes'].map(
        (heading) => html`<kanonis-card heading=${heading}>Responsive feed content</kanonis-card>`,
      )}
    </kanonis-grid>
  </kanonis-container>`,
};
