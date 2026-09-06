import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const meta: Meta = {
  title: 'Components/Actions',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};
export default meta;
export const ButtonPlayground: StoryObj = {
  args: { variant: 'primary', size: 'medium', disabled: false, loading: false },
  render: (args) =>
    html`<kanonis-button
      variant=${args['variant']}
      size=${args['size']}
      ?disabled=${args['disabled']}
      ?loading=${args['loading']}
      ><kanonis-icon slot="prefix" name="plus"></kanonis-icon>Add transaction</kanonis-button
    >`,
};
export const VariantsAndSizes: StoryObj = {
  render: () =>
    html`<kanonis-stack
      >${['small', 'medium', 'large'].map((size) => html`<kanonis-inline>${['primary', 'secondary', 'ghost', 'danger'].map((variant) => html`<kanonis-button variant=${variant} size=${size}>${variant}</kanonis-button>`)}</kanonis-inline>`)}</kanonis-stack
    >`,
};
export const LoadingDisabledAndWidth: StoryObj = {
  render: () =>
    html`<kanonis-stack
      ><kanonis-inline
        ><kanonis-button loading>Saving</kanonis-button><kanonis-button disabled>Unavailable</kanonis-button></kanonis-inline
      ><kanonis-button full-width>Full-width action</kanonis-button></kanonis-stack
    >`,
};
export const LinkButton: StoryObj = {
  render: () =>
    html`<kanonis-button href="/documentation" variant="secondary" target="_blank"
      ><kanonis-icon slot="prefix" name="book"></kanonis-icon>Open documentation</kanonis-button
    >`,
};
export const IconButtonAndGroup: StoryObj = {
  render: () =>
    html`<kanonis-inline
      ><kanonis-icon-button label="Refresh"><kanonis-icon name="refresh"></kanonis-icon></kanonis-icon-button
      ><kanonis-button-group label="Period navigation"
        ><kanonis-icon-button label="Previous"><kanonis-icon name="chevron-left"></kanonis-icon></kanonis-icon-button
        ><kanonis-button variant="secondary">August 2026</kanonis-button
        ><kanonis-icon-button label="Next"
          ><kanonis-icon name="chevron-right"></kanonis-icon></kanonis-icon-button></kanonis-button-group
    ></kanonis-inline>`,
};
