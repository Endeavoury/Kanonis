import { css } from 'lit';


export interface KanonisValueChangeDetail {
  value: string;
}

export interface KanonisCheckedChangeDetail {
  checked: boolean;
  value: string;
}

export const fieldSpecificStyles = css`
  :host {
    display: block;
    min-width: 0;
  }
  .control-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .control-wrap > input,
  .control-wrap > select {
    width: 100%;
  }
  input,
  select {
    height: var(--kanonis-control-height-md);
    padding: 0 var(--kanonis-space-3);
    font-size: var(--kanonis-font-size-md);
  }
  :host([size='small']) input,
  :host([size='small']) select {
    height: var(--kanonis-control-height-sm);
    font-size: var(--kanonis-font-size-sm);
  }
  :host([size='large']) input,
  :host([size='large']) select {
    height: var(--kanonis-control-height-lg);
    font-size: var(--kanonis-font-size-lg);
  }
  input::placeholder {
    color: var(--kanonis-color-text-muted);
  }
  .invalid {
    border-color: var(--kanonis-color-danger) !important;
  }
  .prefix,
  .suffix {
    position: absolute;
    display: inline-flex;
    color: var(--kanonis-color-text-muted);
    pointer-events: none;
  }
  .prefix {
    left: var(--kanonis-space-3);
  }
  .suffix {
    right: var(--kanonis-space-3);
  }
  .has-prefix {
    padding-left: calc(var(--kanonis-space-3) + var(--kanonis-icon-md) + var(--kanonis-space-2));
  }
  .has-suffix {
    padding-right: calc(var(--kanonis-space-3) + var(--kanonis-icon-md) + var(--kanonis-space-2));
  }
  ::slotted([slot='prefix']),
  ::slotted([slot='suffix']) {
    width: var(--kanonis-icon-md);
    height: var(--kanonis-icon-md);
  }
`;
