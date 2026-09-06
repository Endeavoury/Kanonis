import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { KanonisMetric } from './metric.js';
import '@endeavoury/kanonis';

const meta: Meta = {
  title: 'Components/kanonis-metric',
  tags: ['autodocs'],
  args: {
    slotContent: 'Example content',
    label: 'Example label',
    value: 'Example value',
    detail: 'Example',
    tone: 'neutral',
  },
  argTypes: {
    slotContent: { control: 'text', description: 'Default-slot content.' },
    label: { control: 'text', description: 'Public property.' },
    value: { control: 'text', description: 'Public property.' },
    detail: { control: 'text', description: 'Public property.' },
    tone: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
      description: 'Public property (KanonisTone).',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Properties: `label`, `value`, `detail`, `tone`. Slots: `default`, `detail`. This component does not emit a custom event.',
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
    const component = document.createElement('kanonis-metric') as HTMLElement &
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

export const Metrics: StoryObj = {
  render: () =>
    html`<kanonis-kpi-grid columns="4"
      ><kanonis-metric
        label="Income"
        value="€6,200.00"
        detail="External cash received"
        tone="success"
      ></kanonis-metric
      ><kanonis-metric
        label="Expenses"
        value="€3,441.00"
        detail="External spending"
        tone="danger"
      ></kanonis-metric
      ><kanonis-metric
        label="Savings"
        value="+€2,759.00"
        detail="44.5% savings rate"
        tone="warning"
      ></kanonis-metric
      ><kanonis-metric
        label="Transactions"
        value="21"
        detail="August 2026"
        tone="accent"
      ></kanonis-metric
    ></kanonis-kpi-grid>`,
};

export const LongMetricContent: StoryObj = {
  render: () =>
    html`<div style="max-width:220px">
      <kanonis-metric
        label="Extremely descriptive metric label"
        value="€123,456,789.12"
        detail="Long supporting detail wraps without escaping the surface"
      ></kanonis-metric>
    </div>`,
};

void KanonisMetric;
