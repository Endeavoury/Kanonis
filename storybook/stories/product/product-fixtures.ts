import { html } from 'lit';
import type { DsTableColumn } from '@endeavoury/kanonis';

export const productStyles = html`<style>
  .product {
    width: 100%;
    height: 100dvh;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }
  .topbar {
    height: 76px;
    padding: 0 28px;
  }
  .content {
    display: grid;
    gap: var(--kanonis-space-6);
    margin-top: var(--kanonis-space-6);
  }
  .chart {
    display: flex;
    align-items: end;
    gap: 12px;
    height: 220px;
    padding: 22px 10px 0;
    border-bottom: 1px solid var(--kanonis-color-border-default);
    background: repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 54px,
      var(--kanonis-color-border-subtle) 55px
    );
  }
  .chart-group {
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 3px;
    flex: 1;
    height: 100%;
  }
  .bar {
    display: block;
    width: 10px;
    min-height: 3px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--kanonis-color-success) 84%, white),
      var(--kanonis-color-success)
    );
    box-shadow: 0 -6px 18px color-mix(in srgb, var(--kanonis-color-success) 16%, transparent);
  }
  .bar.out {
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--kanonis-color-danger) 84%, white),
      var(--kanonis-color-danger)
    );
    box-shadow: 0 -6px 18px color-mix(in srgb, var(--kanonis-color-danger) 14%, transparent);
  }
  .split {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--kanonis-space-6);
  }
  .category-list {
    display: grid;
    gap: 0;
  }
  .category {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--kanonis-color-border-subtle);
  }
  .category:first-child {
    padding-top: 2px;
  }
  .category:last-child {
    padding-bottom: 2px;
    border-bottom: 0;
  }
  .category small {
    display: block;
    color: var(--kanonis-color-text-muted);
  }
  .category i {
    display: block;
    height: 3px;
    margin-top: 6px;
    border-radius: var(--kanonis-radius-round);
    background: var(--kanonis-color-accent-primary);
  }
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }
  .day {
    display: grid;
    place-items: center;
    min-height: 50px;
    border: 1px solid transparent;
    border-radius: var(--kanonis-radius-sm);
    background: var(--kanonis-color-bg-hover);
    color: var(--kanonis-color-text-secondary);
    font-size: 11px;
  }
  .day.hot {
    border-color: color-mix(in srgb, var(--kanonis-color-accent-primary) 46%, transparent);
    background: color-mix(in srgb, var(--kanonis-color-accent-primary) 20%, var(--kanonis-color-bg-surface));
    color: #fff;
  }
  .settings {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--kanonis-space-6);
  }
  .drop {
    display: grid;
    place-items: center;
    min-height: 190px;
    border: 1px dashed var(--kanonis-color-border-strong);
    border-radius: var(--kanonis-radius-lg);
    background: var(--kanonis-gradient-surface);
    text-align: center;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--kanonis-color-text-primary);
    font-weight: var(--kanonis-font-weight-semibold);
    letter-spacing: var(--kanonis-letter-spacing-tight);
  }
  .brandmark {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border: 1px solid color-mix(in srgb, var(--kanonis-color-accent-primary) 48%, white);
    border-radius: var(--kanonis-radius-md);
    background: var(--kanonis-gradient-accent);
    box-shadow: var(--kanonis-shadow-accent);
    color: #fff;
  }
  @media (max-width: 48rem) {
    .split,
    .settings {
      grid-template-columns: 1fr;
    }
    .topbar {
      padding: 0 14px;
    }
  }
</style>`;

export const productSidebar = () =>
  html`<kanonis-sidebar slot="sidebar"
    ><div slot="brand" class="brand"><span class="brandmark">O</span><span>Oikonomis</span></div>
    <kanonis-sidebar-item value="overview" active
      ><kanonis-icon slot="icon" name="home"></kanonis-icon>Overview</kanonis-sidebar-item
    ><kanonis-sidebar-item value="monthly"
      ><kanonis-icon slot="icon" name="calendar"></kanonis-icon>Monthly overview</kanonis-sidebar-item
    ><kanonis-sidebar-item value="year"
      ><kanonis-icon slot="icon" name="chart"></kanonis-icon>Year overview</kanonis-sidebar-item
    ><kanonis-sidebar-item value="ledger"
      ><kanonis-icon slot="icon" name="table"></kanonis-icon>Ledger</kanonis-sidebar-item
    ><kanonis-sidebar-item value="settings"
      ><kanonis-icon slot="icon" name="settings"></kanonis-icon>Accounts</kanonis-sidebar-item
    ><kanonis-status-badge slot="footer" tone="success">System online</kanonis-status-badge></kanonis-sidebar
  >`;
export const productHeader = (title: string) =>
  html`<kanonis-inline slot="header" class="topbar" justify="between"
    ><div>
      <span
        style="display:block;color:var(--kanonis-color-text-muted);font-size:11px;letter-spacing:.12em"
        >PERSONAL FINANCE</span
      ><strong>${title}</strong>
    </div>
    <kanonis-inline
      ><kanonis-icon-button label="Refresh"><kanonis-icon name="refresh"></kanonis-icon></kanonis-icon-button
      ><kanonis-avatar name="Roy Gerritse"></kanonis-avatar
      ><kanonis-button size="small"
        ><kanonis-icon slot="prefix" name="plus"></kanonis-icon>Import files</kanonis-button
      ></kanonis-inline
    ></kanonis-inline
  >`;
export const money = (value: number) =>
  new Intl.NumberFormat('en-NL', { style: 'currency', currency: 'EUR' }).format(value);
export const ledgerRows = [
  {
    id: '1',
    date: 'Aug 23, 2026',
    account: 'Daily · 4300',
    description: 'Spaghetteria',
    category: 'Food · Restaurants',
    source: 'Manual',
    debit: 69,
    credit: null,
    balance: 12840.22,
  },
  {
    id: '2',
    date: 'Aug 22, 2026',
    account: 'Daily · 4300',
    description: 'Albert Heijn',
    category: 'Food · Groceries',
    source: 'Automatic',
    debit: 153,
    credit: null,
    balance: 12909.22,
  },
  {
    id: '3',
    date: 'Aug 19, 2026',
    account: 'Savings · 9308',
    description: 'Travel Fund',
    category: 'Financial · Savings',
    source: 'Manual',
    debit: null,
    credit: 250,
    balance: 13062.22,
  },
  {
    id: '4',
    date: 'Aug 18, 2026',
    account: 'Daily · 4300',
    description: 'Jumbo',
    category: 'Food · Groceries',
    source: 'Manual',
    debit: 181,
    credit: null,
    balance: 12812.22,
  },
];
export const ledgerColumns: DsTableColumn[] = [
  { key: 'date', label: 'Booking date', sortable: true },
  { key: 'account', label: 'Account' },
  { key: 'description', label: 'Description', sortable: true },
  { key: 'category', label: 'Category' },
  { key: 'source', label: 'Source' },
  {
    key: 'debit',
    label: 'Debit',
    align: 'end',
    format: (value) => (value == null ? '—' : money(Number(value))),
  },
  {
    key: 'credit',
    label: 'Credit',
    align: 'end',
    format: (value) => (value == null ? '—' : money(Number(value))),
  },
  { key: 'balance', label: 'Balance', align: 'end', format: (value) => money(Number(value)) },
];
