import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import {
  ledgerColumns,
  ledgerRows,
  productHeader,
  productSidebar,
  productStyles,
} from './product-fixtures.js';
const meta: Meta = {
  title: 'Pages/Ledger',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
export const FilteredLedger: StoryObj = {
  globals: { theme: 'dark' },
  render: () =>
    html`${productStyles}
      <div class="product">
        <kanonis-app-shell
          >${productSidebar()}${productHeader('Ledger')}<kanonis-page-header
            eyebrow="Account ledger"
            heading="Filter, inspect, and categorize"
            description="Balances are calculated independently per account and statement."
            ><kanonis-badge slot="actions" tone="accent">2,634 entries</kanonis-badge></kanonis-page-header
          >
          <div class="content">
            <kanonis-filter-bar columns="4"
              ><kanonis-select
                label="Account"
                .options=${[
                  { label: 'All accounts', value: '' },
                  { label: 'Daily · 4300', value: 'daily' },
                ]}
              ></kanonis-select
              ><kanonis-select
                label="Category"
                .options=${[
                  { label: 'All categories', value: '' },
                  { label: 'Food', value: 'food' },
                ]}
              ></kanonis-select
              ><kanonis-input type="date" label="From" value="2026-08-01"></kanonis-input
              ><kanonis-input type="date" label="To" value="2026-08-31"></kanonis-input
              ><kanonis-search-input
                label="Search"
                placeholder="Counterparty or reference"
              ></kanonis-search-input
              ><kanonis-button slot="actions" variant="secondary">Clear</kanonis-button
              ><kanonis-button slot="actions">Apply filters</kanonis-button></kanonis-filter-bar
            ><kanonis-alert tone="info" heading="Balance after transaction"
              >Calculated within each account and statement, anchored to bank-reported
              balances.</kanonis-alert
            ><kanonis-data-table
              density="compact"
              selectable
              .columns=${ledgerColumns}
              .rows=${ledgerRows}
            ></kanonis-data-table></div
        ></kanonis-app-shell>
      </div>`,
};
