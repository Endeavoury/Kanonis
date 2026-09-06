import { css } from 'lit';
import { type KanonisTableColumn } from '../data-table/data-table.js';


export const enterpriseSurface = css`
  :host {
    display: block;
    min-width: 0;
  }
  .surface {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: var(--kanonis-space-3);
    padding: var(--kanonis-space-3) var(--kanonis-space-4);
    border: 1px solid var(--kanonis-color-border-default);
    border-radius: var(--kanonis-radius-lg);
    background: var(--kanonis-gradient-surface, var(--kanonis-color-bg-surface));
    box-shadow: var(--kanonis-shadow-panel);
  }
  button,
  input,
  select {
    font: inherit;
  }
  button {
    min-height: var(--kanonis-control-height-sm);
    padding: 0 var(--kanonis-space-3);
    border: 1px solid var(--kanonis-color-border-default);
    border-radius: var(--kanonis-radius-md);
    background: var(--kanonis-color-bg-surface-subtle);
    color: var(--kanonis-color-text-primary);
    cursor: pointer;
  }
  button:hover {
    border-color: var(--kanonis-color-border-strong);
    background: var(--kanonis-color-bg-hover);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--kanonis-color-focus);
    outline-offset: 2px;
  }
  .muted {
    color: var(--kanonis-color-text-muted);
    font-size: var(--kanonis-font-size-sm);
  }
`;

export type KanonisEnterpriseColumn = KanonisTableColumn;
