import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisDialog } from './dialog.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-dialog',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    open: false,
    heading: 'Example heading',
    description: 'Supporting information that explains this component.',
    dismissible: true,
    closeLabel: 'Close',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    open: { control: 'boolean', description: 'Public property.' },
    heading: { control: 'text', description: 'Public property.' },
    description: { control: 'text', description: 'Public property.' },
    dismissible: { control: 'boolean', description: 'Public property.' },
    closeLabel: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `open`, `heading`, `description`, `dismissible`, `closeLabel`. Slots: `heading`, `default`, `footer`. Events: `kanonis-close`.',
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
    const component = document.createElement('kanonis-dialog') as HTMLElement &
      Record<string, unknown>;
    const { slotContent, ...properties } = args as Record<string, unknown>;
    Object.assign(component, properties);
    component.textContent = String(slotContent ?? 'Example content');
    const events = document.createElement('output');
    events.setAttribute('aria-live', 'polite');
    events.style.cssText =
      'min-height:1.5rem;color:var(--kanonis-color-text-secondary);font-size:var(--kanonis-font-size-sm)';
    events.textContent = 'Interact with the component to inspect its events.';
    for (const eventName of ['kanonis-close'] as readonly string[]) {
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

export const Dialog: StoryObj = {
  render: () =>
    html`<kanonis-stack>
      <kanonis-button
        @click=${() => (document.querySelector('kanonis-dialog') as HTMLElement & { show(): void })?.show()}
        >Open confirmation</kanonis-button
      >
      <kanonis-dialog heading="Delete connection?" description="This action cannot be undone.">
        Existing imported transactions remain available.
        <kanonis-inline slot="footer">
          <kanonis-button variant="secondary">Cancel</kanonis-button>
          <kanonis-button variant="danger">Delete connection</kanonis-button>
        </kanonis-inline>
      </kanonis-dialog>
    </kanonis-stack>`,
};

void KanonisDialog;
