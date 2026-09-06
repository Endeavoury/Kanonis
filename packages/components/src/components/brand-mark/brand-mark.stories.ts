import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisBrandMark } from './brand-mark.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-brand-mark',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    name: 'Kanonis',
    symbolOnly: false,
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    name: { control: 'text', description: 'Public property.' },
    symbolOnly: { control: 'boolean', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `name`, `symbolOnly`. This component does not expose a slot. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-brand-mark') as HTMLElement &
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

void KanonisBrandMark;
