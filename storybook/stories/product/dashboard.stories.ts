import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { productHeader, productSidebar, productStyles } from './product-fixtures.js';
const meta: Meta = {
  title: 'Pages/Dashboard',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
export const Desktop: StoryObj = {
  globals: { theme: 'dark' },
  render: () =>
    html`${productStyles}
      <div class="product">
        <kanonis-app-shell
          >${productSidebar()}${productHeader('Overview')}<kanonis-page-header
            eyebrow="Financial overview"
            heading="Your finances, clearly mapped."
            description="Based on 2,634 imported transactions · Updated just now"
            ><kanonis-button-group slot="actions"
              ><kanonis-button size="small" variant="secondary">This month</kanonis-button
              ><kanonis-button size="small" variant="ghost">3 months</kanonis-button
              ><kanonis-button size="small" variant="ghost">This year</kanonis-button></kanonis-button-group
            ></kanonis-page-header
          >
          <div class="content">
            <kanonis-kpi-grid columns="4"
              ><kanonis-metric
                label="Current balance"
                value="€24,839.32"
                detail="Across 8 active accounts"
                tone="accent"
              ></kanonis-metric
              ><kanonis-metric
                label="Income"
                value="€6,200.00"
                detail="Cash inflow"
                tone="success"
              ></kanonis-metric
              ><kanonis-metric
                label="Expenses"
                value="€3,441.00"
                detail="€111 average per day"
                tone="danger"
              ></kanonis-metric
              ><kanonis-metric
                label="Savings"
                value="+€2,759.00"
                detail="44.5% savings rate"
                tone="warning"
              ></kanonis-metric
            ></kanonis-kpi-grid>
            <div class="split">
              <kanonis-panel eyebrow="Cash flow" heading="Income vs expenses"
                ><div class="chart">
                  ${[65, 72, 68, 81, 73, 88, 78, 92, 82, 75, 90, 86].map((height, index) => html`<div class="chart-group"><i class="bar" style=${`height:${height}%`}></i><i class="bar out" style=${`height:${35 + (index % 4) * 9}%`}></i></div>`)}
                </div></kanonis-panel
              ><kanonis-panel eyebrow="Spending" heading="By category"
                ><div class="category-list">
                  ${[
                    ['Housing', '€1,650', '72%'],
                    ['Food', '€958', '42%'],
                    ['Transport', '€254', '18%'],
                    ['Utilities', '€188', '14%'],
                    ['Shopping', '€174', '12%'],
                  ].map(
                    (row) =>
                      html`<div class="category">
                        <div><strong>${row[0]}</strong><i style=${`width:${row[2]}`}></i></div>
                        <b>${row[1]}</b>
                      </div>`,
                  )}
                </div></kanonis-panel
              >
            </div>
            <kanonis-alert tone="info" heading="Data availability"
              >Some forecasts require more transaction history. Current calculations use imported
              CAMT records only.</kanonis-alert
            >
          </div></kanonis-app-shell
        >
      </div>`,
};
export const Mobile: StoryObj = {
  ...Desktop,
  parameters: { ...Desktop.parameters, viewport: { defaultViewport: 'mobile' } },
};
