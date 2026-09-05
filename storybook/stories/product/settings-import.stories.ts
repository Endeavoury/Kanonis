import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { productHeader, productSidebar, productStyles } from './product-fixtures.js';
const types = [
  { label: 'Current account', value: 'current' },
  { label: 'Savings account', value: 'savings' },
  { label: 'Investment account', value: 'investment' },
];
const meta: Meta = {
  title: 'Patterns/Settings & Import',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
export const AccountSettings: StoryObj = {
  globals: { theme: 'dark' },
  render: () =>
    html`${productStyles}
      <div class="product">
        <kanonis-app-shell
          >${productSidebar()}${productHeader('Accounts')}<kanonis-page-header
            eyebrow="Account settings"
            heading="Name and organize accounts"
            description="Custom names and account types are stored separately from bank source data."
          ></kanonis-page-header>
          <div class="content settings">
            ${[
              ['Daily account', 'NL91 •••• 4300', '€12,840.22', 'current'],
              ['Rainy day fund', 'NL38 •••• 9308', '€9,200.00', 'savings'],
            ].map(
              (account) =>
                html`<kanonis-card
                  ><kanonis-inline slot="header" justify="between"
                    ><kanonis-inline
                      ><kanonis-icon name="wallet"></kanonis-icon>
                      <div>
                        <strong>${account[0]}</strong
                        ><small style="display:block;color:var(--ds-color-text-muted)"
                          >${account[1]}</small
                        >
                      </div></kanonis-inline
                    ><strong>${account[2]}</strong></kanonis-inline
                  ><kanonis-stack
                    ><kanonis-input label="Custom account name" value=${account[0]}></kanonis-input
                    ><kanonis-select
                      label="Account type"
                      value=${account[3]}
                      .options=${types}
                    ></kanonis-select
                    ><kanonis-button>Save account</kanonis-button></kanonis-stack
                  ></kanonis-card
                >`,
            )}
          </div></kanonis-app-shell
        >
      </div>`,
};
export const ImportWorkflow: StoryObj = {
  globals: { theme: 'dark' },
  render: () =>
    html`${productStyles}
      <div class="product">
        <kanonis-app-shell
          >${productSidebar()}${productHeader('Upload CAMT')}<kanonis-page-header
            eyebrow="Data ingestion"
            heading="Import bank statements"
            description="Upload one CAMT XML file or a ZIP archive."
          ></kanonis-page-header>
          <div class="content">
            <kanonis-panel heading="New import"
              ><label class="drop"
                ><div>
                  <kanonis-icon
                    name="upload"
                    style="font-size:32px;color:var(--ds-color-accent-primary)"
                  ></kanonis-icon>
                  <h3>Choose or drop an XML / ZIP file</h3>
                  <p style="color:var(--ds-color-text-muted)">Maximum ZIP size 2 GiB</p>
                  <kanonis-button variant="secondary">Choose file</kanonis-button>
                </div></label
              ></kanonis-panel
            ><kanonis-alert tone="success" heading="Import queued"
              >The statement is ready for background processing.</kanonis-alert
            >
          </div></kanonis-app-shell
        >
      </div>`,
};
