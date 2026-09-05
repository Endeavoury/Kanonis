import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Data Display', tags: ['autodocs'] };
export default meta;
export const Badges: StoryObj = {
  render: () =>
    html`<kanonis-inline
      >${['neutral', 'accent', 'success', 'warning', 'danger', 'info'].map((tone) => html`<kanonis-badge tone=${tone}>${tone}</kanonis-badge>`)}</kanonis-inline
    >`,
};
export const StatusBadges: StoryObj = {
  render: () =>
    html`<kanonis-inline
      ><kanonis-status-badge tone="success">Online</kanonis-status-badge
      ><kanonis-status-badge tone="warning">Sync pending</kanonis-status-badge
      ><kanonis-status-badge tone="danger">Offline</kanonis-status-badge
      ><kanonis-status-badge>Unknown</kanonis-status-badge></kanonis-inline
    >`,
};
export const Avatars: StoryObj = {
  render: () =>
    html`<kanonis-inline
      ><kanonis-avatar name="Roy Gerritse" size="small"></kanonis-avatar
      ><kanonis-avatar name="Roy Gerritse"></kanonis-avatar
      ><kanonis-avatar name="Oikonomis" size="large"></kanonis-avatar
    ></kanonis-inline>`,
};
export const CardsAndPanels: StoryObj = {
  render: () =>
    html`<kanonis-grid columns="2" responsive
      ><kanonis-card
        ><strong slot="header">Account</strong
        ><kanonis-badge slot="actions" tone="success">Active</kanonis-badge>
        <p>Daily account · NL91 •••• 4300</p>
        <strong>€12,840.22</strong><span slot="footer">Updated a minute ago</span></kanonis-card
      ><kanonis-panel
        eyebrow="Analytics"
        heading="Spending by category"
        description="A technical panel with a stable action slot"
        ><kanonis-button slot="actions" variant="secondary" size="small">View details</kanonis-button>
        <p>
          Charts and application-specific visualizations compose inside this neutral surface.
        </p></kanonis-panel
      ></kanonis-grid
    >`,
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
      ><kanonis-metric label="Transactions" value="21" detail="August 2026" tone="accent"></kanonis-metric
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

export const StructuredMetadata: StoryObj = {
  render: () =>
    html`<kanonis-description-list
      .items=${[
        { term: 'Authoritative Node', value: 'Commercial master data' },
        { term: 'Object URI', value: 'https://customer.example/id/customer/42' },
        { term: 'Schema version', value: '2.4.0' },
        { term: 'Steward', value: 'Data Governance' },
      ]}
    ></kanonis-description-list>`,
};

export const CodeBlock: StoryObj = {
  render: () =>
    html`<kanonis-code-block label="Canonical relationship" language="YAML"
      >source: Customer target: Country cardinality: ManyToOne</kanonis-code-block
    >`,
};
