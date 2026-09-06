import { css } from 'lit';


export const gaps = css`
  :host([gap='0']) {
    --gap: var(--kanonis-space-0);
  }
  :host([gap='1']) {
    --gap: var(--kanonis-space-1);
  }
  :host([gap='2']) {
    --gap: var(--kanonis-space-2);
  }
  :host([gap='3']) {
    --gap: var(--kanonis-space-3);
  }
  :host([gap='4']) {
    --gap: var(--kanonis-space-4);
  }
  :host([gap='5']) {
    --gap: var(--kanonis-space-5);
  }
  :host([gap='6']) {
    --gap: var(--kanonis-space-6);
  }
  :host([gap='8']) {
    --gap: var(--kanonis-space-8);
  }
`;

export const paneFoundation = css`
  :host {
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
  }
`;
