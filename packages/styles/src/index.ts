import { breakpoints } from '@endeavoury/kanonis-tokens';
import { css, unsafeCSS, type CSSResultGroup } from 'lit';

export const responsiveBreakpoints = breakpoints;
export const mediaCompact = unsafeCSS(`(max-width: ${breakpoints.compact})`);
export const mediaMedium = unsafeCSS(`(max-width: ${breakpoints.medium})`);
export const mediaExpanded = unsafeCSS(`(max-width: ${breakpoints.expanded})`);
export const mediaWide = unsafeCSS(`(max-width: ${breakpoints.wide})`);

export const hostStyles = css`
  :host {
    box-sizing: border-box;
    color: var(--kanonis-color-text-primary);
    font-family: var(--kanonis-font-sans);
    line-height: var(--kanonis-line-height-normal);
    -webkit-font-smoothing: antialiased;
  }
  :host([hidden]) {
    display: none !important;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const typographyStyles = css`
  button,
  input,
  select,
  textarea {
    font: inherit;
  }
  .eyebrow {
    margin: 0;
    color: var(--kanonis-color-text-muted);
    font-size: var(--kanonis-font-size-xs);
    font-weight: var(--kanonis-font-weight-semibold);
    letter-spacing: var(--kanonis-letter-spacing-wide);
    line-height: var(--kanonis-line-height-tight);
    text-transform: uppercase;
  }
  .muted {
    color: var(--kanonis-color-text-muted);
  }
`;

export const focusStyles = css`
  :where(button, input, select, textarea, a, [tabindex]):focus-visible {
    outline: 2px solid color-mix(in srgb, var(--kanonis-color-focus) 82%, white);
    outline-offset: 3px;
  }
`;

export const preferenceStyles = css`
  @media (forced-colors: active) {
    :where(button, input, select, textarea, a, [tabindex]):focus-visible {
      outline: 2px solid Highlight;
      outline-offset: 3px;
    }
    :where(button, input, select, textarea) {
      forced-color-adjust: auto;
    }
  }
  :host-context([dir='rtl']) {
    direction: rtl;
  }
`;

export const controlStyles = css`
  .control {
    min-height: var(--kanonis-control-height-md);
    border: 1px solid var(--kanonis-color-border-default);
    border-radius: var(--kanonis-radius-md);
    background: var(--kanonis-color-bg-surface-subtle);
    color: var(--kanonis-color-text-primary);
    box-shadow: var(--kanonis-shadow-control);
    transition:
      background var(--kanonis-duration-fast) var(--kanonis-ease-standard),
      border-color var(--kanonis-duration-fast) var(--kanonis-ease-standard),
      box-shadow var(--kanonis-duration-fast) var(--kanonis-ease-standard);
  }
  .control:hover:not(:disabled) {
    border-color: var(--kanonis-color-border-strong);
    background: var(--kanonis-color-bg-elevated);
  }
  .control:focus-visible {
    border-color: var(--kanonis-color-focus);
    outline: 0;
    box-shadow:
      var(--kanonis-shadow-control),
      0 0 0 3px color-mix(in srgb, var(--kanonis-color-focus) 18%, transparent);
  }
  .control:disabled {
    cursor: not-allowed;
    opacity: var(--kanonis-opacity-disabled);
  }
`;

export const formStyles = css`
  .field {
    display: grid;
    gap: 0.375rem;
    min-width: 0;
  }
  .label {
    color: var(--kanonis-color-text-secondary);
    font-size: var(--kanonis-font-size-sm);
    font-weight: var(--kanonis-font-weight-semibold);
    letter-spacing: 0.01em;
  }
  .required {
    color: var(--kanonis-color-danger);
  }
  .help,
  .error {
    margin: 0;
    font-size: var(--kanonis-font-size-xs);
    line-height: var(--kanonis-line-height-normal);
  }
  .help {
    color: var(--kanonis-color-text-muted);
  }
  .error {
    color: var(--kanonis-color-danger);
  }
`;

export const surfaceStyles = css`
  .surface {
    background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
    border: 1px solid var(--kanonis-color-border-default);
    border-top-color: var(--kanonis-color-border-highlight, var(--kanonis-color-border-default));
    border-radius: var(--kanonis-radius-lg);
    box-shadow: var(--kanonis-shadow-panel, var(--kanonis-shadow-sm));
  }
`;

export const a11yStyles = css`
  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

export const spinnerStyles = css`
  .spinner {
    display: inline-block;
    width: var(--kanonis-spinner-size, 1.5rem);
    height: var(--kanonis-spinner-size, 1.5rem);
    border: 2px solid var(--kanonis-spinner-track, var(--kanonis-color-border-default));
    border-top-color: var(--kanonis-spinner-color, var(--kanonis-color-accent-primary));
    border-right-color: var(--kanonis-spinner-gap, transparent);
    border-radius: 50%;
    animation: kanonis-spin var(--kanonis-duration-progress) linear infinite;
  }
  @keyframes kanonis-spin {
    to {
      transform: rotate(360deg);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation: none;
      border-right-color: var(--kanonis-spinner-color, var(--kanonis-color-accent-primary));
    }
  }
`;

export const foundationStyles: CSSResultGroup = [
  hostStyles,
  typographyStyles,
  focusStyles,
  preferenceStyles,
];
export const controlFoundationStyles: CSSResultGroup = [
  hostStyles,
  typographyStyles,
  focusStyles,
  preferenceStyles,
  controlStyles,
];
export const formFoundationStyles: CSSResultGroup = [
  hostStyles,
  typographyStyles,
  focusStyles,
  preferenceStyles,
  controlStyles,
  formStyles,
  a11yStyles,
];
