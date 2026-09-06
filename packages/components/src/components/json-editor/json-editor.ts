import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisCodeEditor } from '../code-editor/code-editor.js';


export class KanonisJsonEditor extends KanonisCodeEditor {
  @property() invalidMessage = '';
  protected override render() {
    let invalid = this.invalidMessage;
    try {
      if (this.value.trim()) JSON.parse(this.value);
    } catch {
      invalid = invalid || 'Invalid JSON';
    }
    return html`${super.render()}${invalid ? html`<p role="alert" style="color:var(--kanonis-color-danger);font-size:var(--kanonis-font-size-sm)">${invalid}</p>` : nothing}`;
  }
}
