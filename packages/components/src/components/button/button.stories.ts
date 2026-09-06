import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { KanonisButton } from './button.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-button',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
    type: 'button',
    href: '',
    target: '',
    rel: '',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Public property (KanonisButtonVariant).',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Public property (KanonisSize).',
    },
    disabled: { control: 'boolean', description: 'Public property.' },
    loading: { control: 'boolean', description: 'Public property.' },
    fullWidth: { control: 'boolean', description: 'Public property.' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: "Public property ('button' | 'submit' | 'reset').",
    },
    href: { control: 'text', description: 'Public property.' },
    target: { control: 'text', description: 'Public property.' },
    rel: { control: 'text', description: 'Public property.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `variant`, `size`, `disabled`, `loading`, `fullWidth`, `type`, `href`, `target`, `rel`. Slots: `prefix`, `default`, `suffix`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-button') as HTMLElement &
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

void KanonisButton;
