import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisSkeleton } from './skeleton.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-skeleton',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    shape: 'text',
    width: '100%',
    height: '1rem',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    shape: {
      control: 'select',
      options: ['text', 'circle', 'rectangle'],
      description: "Public property ('text' | 'circle' | 'rectangle').",
    },
    width: { control: 'text', description: 'Public property.' },
    height: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `shape`, `width`, `height`. This component does not expose a slot. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-skeleton') as HTMLElement &
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

void KanonisSkeleton;
