import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Overlays',
  tags: ['autodocs'],
};

export default meta;

export const Dialog: StoryObj = {
  render: () =>
    html`<kanonis-stack>
      <kanonis-button
        @click=${() => (document.querySelector('kanonis-dialog') as HTMLElement & { show(): void })?.show()}
        >Open confirmation</kanonis-button
      >
      <kanonis-dialog heading="Delete connection?" description="This action cannot be undone.">
        Existing imported transactions remain available.
        <kanonis-inline slot="footer">
          <kanonis-button variant="secondary">Cancel</kanonis-button>
          <kanonis-button variant="danger">Delete connection</kanonis-button>
        </kanonis-inline>
      </kanonis-dialog>
    </kanonis-stack>`,
};

export const Drawer: StoryObj = {
  render: () =>
    html`<kanonis-stack>
      <kanonis-button
        @click=${() => (document.querySelector('kanonis-drawer') as HTMLElement & { show(): void })?.show()}
        >Open account details</kanonis-button
      >
      <kanonis-drawer heading="Account details" description="Daily account · 4300">
        <kanonis-stack>
          <kanonis-metric label="Current balance" value="€ 4,285.30"></kanonis-metric>
          <kanonis-disclosure summary="Identifiers">NL12 BANK 3456 7890 12</kanonis-disclosure>
        </kanonis-stack>
      </kanonis-drawer>
    </kanonis-stack>`,
};

export const Menu: StoryObj = {
  render: () =>
    html`<kanonis-menu label="Transaction actions">
      <span slot="trigger">Actions</span>
      <kanonis-menu-item value="edit"><kanonis-icon slot="icon" name="edit"></kanonis-icon>Edit</kanonis-menu-item>
      <kanonis-menu-item value="duplicate">Duplicate</kanonis-menu-item>
      <kanonis-menu-item value="archive" disabled>Archive</kanonis-menu-item>
      <kanonis-menu-item value="delete" tone="danger">Delete</kanonis-menu-item>
    </kanonis-menu>`,
};

export const Tooltip: StoryObj = {
  render: () =>
    html`<kanonis-tooltip content="Refresh balances from the connected bank">
      <kanonis-icon-button label="Refresh balances" icon="refresh"></kanonis-icon-button>
    </kanonis-tooltip>`,
};
