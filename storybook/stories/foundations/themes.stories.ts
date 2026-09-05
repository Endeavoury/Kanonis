import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
const meta: Meta = { title: 'Foundation/Themes & Accessibility', tags: ['autodocs'] };
export default meta;
export const ThemeComparison: StoryObj = {
  render: () =>
    html`<div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px"
    >
      ${['light', 'dark'].map(
        (theme) =>
          html`<section
            data-kanonis-theme=${theme}
            style="padding:20px;border:1px solid var(--kanonis-color-border-default);border-radius:10px;background:var(--kanonis-color-bg-canvas);color:var(--kanonis-color-text-primary)"
          >
            <h2>${theme}</h2>
            <kanonis-panel heading="Surface hierarchy"
              ><kanonis-inline
                ><kanonis-button>Primary</kanonis-button><kanonis-button variant="secondary">Secondary</kanonis-button
                ><kanonis-status-badge tone="success">Online</kanonis-status-badge></kanonis-inline
              ></kanonis-panel
            >
          </section>`,
      )}
    </div>`,
};
export const AccessibilityFoundation: StoryObj = {
  render: () =>
    html`<kanonis-panel
      heading="Accessibility defaults"
      description="WCAG-oriented focus, semantics, motion, and contrast are part of the shared foundation."
      ><ul>
        <li>Visible two-pixel focus rings with contrast-aware semantic color.</li>
        <li>Minimum 40px default controls and larger mobile navigation targets.</li>
        <li>Native controls and ElementInternals for form semantics.</li>
        <li>Reduced-motion token override and non-motion loading fallback.</li>
        <li>Errors are text plus color; status dots always retain labels.</li>
      </ul>
      <kanonis-inline
        ><kanonis-button>Tab to inspect focus</kanonis-button
        ><kanonis-input
          label="Labeled field"
          helpText="Labels and descriptions remain programmatic"
        ></kanonis-input></kanonis-inline
    ></kanonis-panel>`,
};

export const ContrastAndBrandMatrix: StoryObj = {
  render: () =>
    html`<div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:var(--kanonis-space-4)"
    >
      ${[
        { brand: 'default', contrast: 'standard' },
        { brand: 'finance', contrast: 'standard' },
        { brand: 'ontology', contrast: 'standard' },
        { brand: 'default', contrast: 'more' },
      ].map(
        ({ brand, contrast }) =>
          html`<section
            data-kanonis-theme="light"
            data-kanonis-brand=${brand}
            data-kanonis-contrast=${contrast}
            style="padding:var(--kanonis-space-5);border:1px solid var(--kanonis-color-border-default);border-radius:var(--kanonis-shape-surface);background:var(--kanonis-color-bg-canvas);color:var(--kanonis-color-text-primary)"
          >
            <kanonis-brand-mark name=${brand === 'default' ? 'Kanonis' : brand}></kanonis-brand-mark>
            <p>${brand === 'default' ? 'Kanonis' : brand} · ${contrast}</p>
            <kanonis-button>Primary action</kanonis-button>
          </section>`,
      )}
    </div>`,
};
