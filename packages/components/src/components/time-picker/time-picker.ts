import { html } from 'lit';
import { KanonisDatePicker } from '../date-picker/date-picker.js';


export class KanonisTimePicker extends KanonisDatePicker {
  protected override render() {
    return html`<label
      >${this.label}<input
        type="time"
        .value=${this.value}
        @change=${(event: Event) => {
          this.value = (event.target as HTMLInputElement).value;
          this.emit<{ value: string }>('kanonis-change', { value: this.value });
        }}
    /></label>`;
  }
}
