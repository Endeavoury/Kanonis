import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r={title:`Components/Feedback`,tags:[`autodocs`]},i={render:()=>n`<ds-stack
      >${[`info`,`success`,`warning`,`danger`].map(e=>n`<ds-alert tone=${e} heading=${e[0].toUpperCase()+e.slice(1)} ?dismissible=${e===`info`}>A concise message explains what happened and what the user can do next.</ds-alert>`)}</ds-stack
    >`},a={render:()=>n`<ds-loading-state label="Calculating financial overview"></ds-loading-state>`},o={render:()=>n`<ds-empty-state
      heading="No transactions found"
      description="Change the filters or import a bank statement to populate this view."
      ><ds-icon slot="icon" name="table"></ds-icon
      ><ds-button slot="actions">Import statement</ds-button></ds-empty-state
    >`},s={render:()=>n`<ds-stack>
      <ds-progress label="Importing statements" value="68" show-value></ds-progress>
      <ds-progress label="Validating transactions" tone="success"></ds-progress>
      <ds-progress label="Storage usage" value="86" tone="warning" show-value></ds-progress>
    </ds-stack>`},c={render:()=>n`<ds-inline wrap="false" align="start">
      <ds-skeleton shape="circle" width="3rem" height="3rem"></ds-skeleton>
      <ds-stack style="width:min(100%,28rem)" gap="2">
        <ds-skeleton width="42%" height="1.1rem"></ds-skeleton>
        <ds-skeleton width="100%"></ds-skeleton>
        <ds-skeleton width="76%"></ds-skeleton>
      </ds-stack>
    </ds-inline>`},l={render:()=>n`<div style="min-height:16rem">
      <ds-toast-region label="Example notifications">
        <ds-toast heading="Import completed" tone="success" duration="0">
          24 new transactions were added.
        </ds-toast>
        <ds-toast heading="Connection needs attention" tone="warning" duration="0">
          Reconnect the bank to refresh balances.
          <ds-button slot="actions" size="small" variant="secondary">Reconnect</ds-button>
        </ds-toast>
      </ds-toast-region>
    </div>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{\n  render: () => html`<ds-stack\n      >${['info', 'success', 'warning', 'danger'].map(tone => html`<ds-alert tone=${tone} heading=${tone[0]!.toUpperCase() + tone.slice(1)} ?dismissible=${tone === 'info'}>A concise message explains what happened and what the user can do next.</ds-alert>`)}</ds-stack\n    >`\n}",...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-loading-state label="Calculating financial overview"></ds-loading-state>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-empty-state
      heading="No transactions found"
      description="Change the filters or import a bank statement to populate this view."
      ><ds-icon slot="icon" name="table"></ds-icon
      ><ds-button slot="actions">Import statement</ds-button></ds-empty-state
    >\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack>
      <ds-progress label="Importing statements" value="68" show-value></ds-progress>
      <ds-progress label="Validating transactions" tone="success"></ds-progress>
      <ds-progress label="Storage usage" value="86" tone="warning" show-value></ds-progress>
    </ds-stack>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-inline wrap="false" align="start">
      <ds-skeleton shape="circle" width="3rem" height="3rem"></ds-skeleton>
      <ds-stack style="width:min(100%,28rem)" gap="2">
        <ds-skeleton width="42%" height="1.1rem"></ds-skeleton>
        <ds-skeleton width="100%"></ds-skeleton>
        <ds-skeleton width="76%"></ds-skeleton>
      </ds-stack>
    </ds-inline>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="min-height:16rem">
      <ds-toast-region label="Example notifications">
        <ds-toast heading="Import completed" tone="success" duration="0">
          24 new transactions were added.
        </ds-toast>
        <ds-toast heading="Connection needs attention" tone="warning" duration="0">
          Reconnect the bank to refresh balances.
          <ds-button slot="actions" size="small" variant="secondary">Reconnect</ds-button>
        </ds-toast>
      </ds-toast-region>
    </div>\`
}`,...l.parameters?.docs?.source}}},u=[`Alerts`,`Loading`,`Empty`,`Progress`,`Skeletons`,`Toasts`]})))()}d();export{i as Alerts,o as Empty,a as Loading,s as Progress,c as Skeletons,l as Toasts,u as __namedExportsOrder,r as default};