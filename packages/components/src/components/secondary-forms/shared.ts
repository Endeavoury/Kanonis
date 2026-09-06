import { html, nothing } from 'lit';


export const feedback = (error: string, helpText: string) =>
  error
    ? html`<p id="error" class="error" part="error">${error}</p>`
    : helpText
      ? html`<p id="help" class="help" part="help">${helpText}</p>`
      : nothing;

export interface KanonisRadioActivateDetail {
  value: string;
}
