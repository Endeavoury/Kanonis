import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Components/Interaction`,tags:[`autodocs`]},i={render:()=>n`<ds-inline>
      <ds-theme-toggle theme="light"></ds-theme-toggle>
      <span>Switches and persists the document theme when configured with a storage key.</span>
    </ds-inline>`},a={render:()=>n`<ds-tabs label="Account views" value="activity">
      <ds-tab value="activity" label="Activity">
        <ds-panel
          ><strong>Recent account activity</strong>
          <p>Arrow keys move between tabs.</p></ds-panel
        >
      </ds-tab>
      <ds-tab value="details" label="Details">
        <ds-panel
          ><strong>Account details</strong>
          <p>Panels preserve native slotted content.</p></ds-panel
        >
      </ds-tab>
      <ds-tab value="audit" label="Audit log" disabled>
        <ds-panel>This panel is unavailable.</ds-panel>
      </ds-tab>
    </ds-tabs>`},o={render:()=>n`<ds-stack>
      <ds-disclosure summary="How balances are calculated" open>
        Balances are calculated independently for every account and statement.
      </ds-disclosure>
      <ds-disclosure summary="Unavailable section" disabled>
        This content cannot currently be expanded.
      </ds-disclosure>
    </ds-stack>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-inline>
      <ds-theme-toggle theme="light"></ds-theme-toggle>
      <span>Switches and persists the document theme when configured with a storage key.</span>
    </ds-inline>\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-tabs label="Account views" value="activity">
      <ds-tab value="activity" label="Activity">
        <ds-panel
          ><strong>Recent account activity</strong>
          <p>Arrow keys move between tabs.</p></ds-panel
        >
      </ds-tab>
      <ds-tab value="details" label="Details">
        <ds-panel
          ><strong>Account details</strong>
          <p>Panels preserve native slotted content.</p></ds-panel
        >
      </ds-tab>
      <ds-tab value="audit" label="Audit log" disabled>
        <ds-panel>This panel is unavailable.</ds-panel>
      </ds-tab>
    </ds-tabs>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack>
      <ds-disclosure summary="How balances are calculated" open>
        Balances are calculated independently for every account and statement.
      </ds-disclosure>
      <ds-disclosure summary="Unavailable section" disabled>
        This content cannot currently be expanded.
      </ds-disclosure>
    </ds-stack>\`
}`,...o.parameters?.docs?.source}}},s=[`ThemeToggle`,`Tabs`,`Disclosure`]})))()}c();export{o as Disclosure,a as Tabs,i as ThemeToggle,s as __namedExportsOrder,r as default};