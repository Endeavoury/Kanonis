import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const options = [
  { label: 'All accounts', value: '' },
  { label: 'Daily account', value: 'daily' },
  { label: 'Savings', value: 'savings' },
];
const meta: Meta = { title: 'Patterns/Filter Bar', tags: ['autodocs'] };
export default meta;
export const LedgerFilters: StoryObj = {
  render: () =>
    html`<kanonis-filter-bar columns="4"
      ><kanonis-select label="Account" .options=${options}></kanonis-select
      ><kanonis-select
        label="Category"
        .options=${[
          { label: 'All categories', value: '' },
          { label: 'Food', value: 'food' },
          { label: 'Housing', value: 'housing' },
        ]}
      ></kanonis-select
      ><kanonis-input type="date" label="From"></kanonis-input><kanonis-input type="date" label="To"></kanonis-input
      ><kanonis-search-input label="Search" placeholder="Counterparty or reference"></kanonis-search-input
      ><kanonis-button slot="actions" variant="secondary">Clear</kanonis-button
      ><kanonis-button slot="actions">Apply filters</kanonis-button></kanonis-filter-bar
    >`,
};
