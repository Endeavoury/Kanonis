import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const meta: Meta = { title: 'Patterns/KPI Grid', tags: ['autodocs'] };
export default meta;
export const SixMetricBudgetStrip: StoryObj = {
  render: () =>
    html`<kanonis-kpi-grid columns="6"
      ><kanonis-metric
        label="Income"
        value="€6,200"
        tone="success"
        detail="External cash received"
      ></kanonis-metric
      ><kanonis-metric
        label="Expenses"
        value="€3,441"
        tone="danger"
        detail="External spending"
      ></kanonis-metric
      ><kanonis-metric
        label="Savings"
        value="+€2,759"
        tone="warning"
        detail="Incoming minus outgoing"
      ></kanonis-metric
      ><kanonis-metric label="Transfers" value="€1,250" detail="Own accounts"></kanonis-metric
      ><kanonis-metric label="Transactions" value="21" tone="accent" detail="August 2026"></kanonis-metric
      ><kanonis-metric label="Savings rate" value="44.5%" tone="info" detail="Monthly rhythm"></kanonis-metric
    ></kanonis-kpi-grid>`,
};
export const ResponsiveStress: StoryObj = {
  parameters: { viewport: { defaultViewport: 'mobile' } },
  render: () =>
    html`<kanonis-kpi-grid columns="6"
      >${Array.from({ length: 6 }, (_, i) => html`<kanonis-metric label=${`Long metric label ${i + 1}`} value=${i % 2 ? '-€12,345.67' : '€123,456.78'} tone=${i % 2 ? 'danger' : 'success'} detail="Supporting information"></kanonis-metric>`)}</kanonis-kpi-grid
    >`,
};
