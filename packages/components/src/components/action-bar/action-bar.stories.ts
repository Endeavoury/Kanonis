import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisActionBar } from './action-bar.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-action-bar',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Actions',
    collapseAtCompact: false,
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    collapseAtCompact: { control: 'boolean', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `collapseAtCompact`. Slots: `default`, `overflow`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-action-bar') as HTMLElement &
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
        <kanonis-input
          label="Repository host"
          hide-label
          value="example.test/project"
        ></kanonis-input>
        <kanonis-button slot="suffix" variant="ghost">Copy</kanonis-button>
      </kanonis-input-group>
    </kanonis-stack>`,
};

void KanonisActionBar;
