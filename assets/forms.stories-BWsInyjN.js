import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),r=[{label:`All accounts`,value:`all`},{label:`Daily account · 4300`,value:`daily`},{label:`Savings · 9308`,value:`savings`}],i={title:`Components/Forms`,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},required:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`,`large`]}}},a={args:{label:`Device name`,placeholder:`Enter a name`,helpText:`Names can contain letters, numbers, and spaces.`,error:``,disabled:!1,required:!1,size:`medium`},render:e=>n`<ds-input
      label=${e.label}
      placeholder=${e.placeholder}
      helpText=${e.helpText}
      error=${e.error}
      ?disabled=${e.disabled}
      ?required=${e.required}
      size=${e.size}
    ></ds-input>`},o={render:()=>n`<div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px"
    >
      <ds-input label="Default" placeholder="Value"></ds-input
      ><ds-input label="Required" required value="Finance gateway"></ds-input
      ><ds-input label="Error" value="x" error="Use at least three characters"></ds-input
      ><ds-input label="Disabled" value="Managed by policy" disabled></ds-input
      ><ds-input
        label="Long content"
        value="A deliberately long value that demonstrates horizontal control behavior"
      ></ds-input>
    </div>`},s={render:()=>n`<ds-search-input
      label="Search ledger"
      placeholder="Counterparty, IBAN, reference or description"
      value="Albert"
    ></ds-search-input>`},c={render:()=>n`<ds-select
      label="Account"
      value="daily"
      .options=${r}
      helpText="Choose the account scope"
    ></ds-select>`},l={render:()=>n`<ds-stack
      ><ds-checkbox checked>Apply to future matching entries</ds-checkbox
      ><ds-checkbox required helpText="This choice is required">Accept policy</ds-checkbox
      ><ds-checkbox disabled>Unavailable option</ds-checkbox></ds-stack
    >`},u={render:()=>n`<ds-form-field
      label="Composed field"
      helpText="Form field can arrange a custom or native control"
      ><input
        style="height:40px;border:1px solid var(--ds-color-border-default);border-radius:7px;background:var(--ds-color-bg-surface);color:var(--ds-color-text-primary);padding:0 12px"
        value="Native consumer control"
    /></ds-form-field>`},d={render:()=>n`<form
      @submit=${e=>{e.preventDefault();let t=new FormData(e.currentTarget);alert(JSON.stringify(Object.fromEntries(t)))}}
    >
      <ds-stack
        ><ds-input name="name" label="Name" value="Gateway" required></ds-input
        ><ds-select
          name="account"
          label="Account"
          value="daily"
          .options=${r}
        ></ds-select
        ><ds-checkbox name="enabled" checked>Enabled</ds-checkbox
        ><ds-button type="submit">Submit native form</ds-button></ds-stack
      >
    </form>`},f={render:()=>n`<ds-drop-zone
      label="Choose or drop CAMT files"
      hint="XML or ZIP · up to 10 files"
      accept=".xml,.zip,application/xml,application/zip"
      max-files="10"
      multiple
      ><ds-icon slot="icon" name="upload"></ds-icon
    ></ds-drop-zone>`},p={render:()=>n`<ds-textarea
      label="Internal note"
      placeholder="Add context for this transaction"
      helpText="Visible only to your finance team"
      maxlength="500"
    ></ds-textarea>`},m={render:()=>n`<ds-stack>
      <ds-switch checked helpText="Receive an email after every successful import"
        >Import notifications</ds-switch
      >
      <ds-switch disabled>Managed by your organization</ds-switch>
    </ds-stack>`},h={render:()=>n`<ds-range
      label="Forecast confidence"
      value="72"
      min="0"
      max="100"
      show-value
      helpText="Adjust the confidence threshold"
    ></ds-range>`},g={render:()=>n`<ds-radio-group label="Export format" value="csv" required>
      <ds-radio value="csv">CSV spreadsheet</ds-radio>
      <ds-radio value="camt">CAMT XML</ds-radio>
      <ds-radio value="pdf" disabled>PDF report (coming soon)</ds-radio>
    </ds-radio-group>`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Device name',
    placeholder: 'Enter a name',
    helpText: 'Names can contain letters, numbers, and spaces.',
    error: '',
    disabled: false,
    required: false,
    size: 'medium'
  },
  render: args => html\`<ds-input
      label=\${args['label']}
      placeholder=\${args['placeholder']}
      helpText=\${args['helpText']}
      error=\${args['error']}
      ?disabled=\${args['disabled']}
      ?required=\${args['required']}
      size=\${args['size']}
    ></ds-input>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px"
    >
      <ds-input label="Default" placeholder="Value"></ds-input
      ><ds-input label="Required" required value="Finance gateway"></ds-input
      ><ds-input label="Error" value="x" error="Use at least three characters"></ds-input
      ><ds-input label="Disabled" value="Managed by policy" disabled></ds-input
      ><ds-input
        label="Long content"
        value="A deliberately long value that demonstrates horizontal control behavior"
      ></ds-input>
    </div>\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-search-input
      label="Search ledger"
      placeholder="Counterparty, IBAN, reference or description"
      value="Albert"
    ></ds-search-input>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-select
      label="Account"
      value="daily"
      .options=\${accountOptions}
      helpText="Choose the account scope"
    ></ds-select>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack
      ><ds-checkbox checked>Apply to future matching entries</ds-checkbox
      ><ds-checkbox required helpText="This choice is required">Accept policy</ds-checkbox
      ><ds-checkbox disabled>Unavailable option</ds-checkbox></ds-stack
    >\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-form-field
      label="Composed field"
      helpText="Form field can arrange a custom or native control"
      ><input
        style="height:40px;border:1px solid var(--ds-color-border-default);border-radius:7px;background:var(--ds-color-bg-surface);color:var(--ds-color-text-primary);padding:0 12px"
        value="Native consumer control"
    /></ds-form-field>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<form
      @submit=\${(event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget as HTMLFormElement);
    alert(JSON.stringify(Object.fromEntries(data)));
  }}
    >
      <ds-stack
        ><ds-input name="name" label="Name" value="Gateway" required></ds-input
        ><ds-select
          name="account"
          label="Account"
          value="daily"
          .options=\${accountOptions}
        ></ds-select
        ><ds-checkbox name="enabled" checked>Enabled</ds-checkbox
        ><ds-button type="submit">Submit native form</ds-button></ds-stack
      >
    </form>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-drop-zone
      label="Choose or drop CAMT files"
      hint="XML or ZIP · up to 10 files"
      accept=".xml,.zip,application/xml,application/zip"
      max-files="10"
      multiple
      ><ds-icon slot="icon" name="upload"></ds-icon
    ></ds-drop-zone>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-textarea
      label="Internal note"
      placeholder="Add context for this transaction"
      helpText="Visible only to your finance team"
      maxlength="500"
    ></ds-textarea>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack>
      <ds-switch checked helpText="Receive an email after every successful import"
        >Import notifications</ds-switch
      >
      <ds-switch disabled>Managed by your organization</ds-switch>
    </ds-stack>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-range
      label="Forecast confidence"
      value="72"
      min="0"
      max="100"
      show-value
      helpText="Adjust the confidence threshold"
    ></ds-range>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-radio-group label="Export format" value="csv" required>
      <ds-radio value="csv">CSV spreadsheet</ds-radio>
      <ds-radio value="camt">CAMT XML</ds-radio>
      <ds-radio value="pdf" disabled>PDF report (coming soon)</ds-radio>
    </ds-radio-group>\`
}`,...g.parameters?.docs?.source}}},_=[`InputPlayground`,`InputStates`,`SearchInput`,`Select`,`Checkbox`,`FormFieldComposition`,`NativeFormSubmission`,`DropZone`,`Textarea`,`Switch`,`Range`,`RadioGroup`]})))()}v();export{l as Checkbox,f as DropZone,u as FormFieldComposition,a as InputPlayground,o as InputStates,d as NativeFormSubmission,g as RadioGroup,h as Range,s as SearchInput,c as Select,m as Switch,p as Textarea,_ as __namedExportsOrder,i as default};