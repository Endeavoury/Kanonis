import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Components/Overlays`,tags:[`autodocs`]},i={render:()=>n`<ds-stack>
      <ds-button
        @click=${()=>document.querySelector(`ds-dialog`)?.show()}
        >Open confirmation</ds-button
      >
      <ds-dialog heading="Delete connection?" description="This action cannot be undone.">
        Existing imported transactions remain available.
        <ds-inline slot="footer">
          <ds-button variant="secondary">Cancel</ds-button>
          <ds-button variant="danger">Delete connection</ds-button>
        </ds-inline>
      </ds-dialog>
    </ds-stack>`},a={render:()=>n`<ds-stack>
      <ds-button
        @click=${()=>document.querySelector(`ds-drawer`)?.show()}
        >Open account details</ds-button
      >
      <ds-drawer heading="Account details" description="Daily account · 4300">
        <ds-stack>
          <ds-metric label="Current balance" value="€ 4,285.30"></ds-metric>
          <ds-disclosure summary="Identifiers">NL12 BANK 3456 7890 12</ds-disclosure>
        </ds-stack>
      </ds-drawer>
    </ds-stack>`},o={render:()=>n`<ds-menu label="Transaction actions">
      <span slot="trigger">Actions</span>
      <ds-menu-item value="edit"><ds-icon slot="icon" name="edit"></ds-icon>Edit</ds-menu-item>
      <ds-menu-item value="duplicate">Duplicate</ds-menu-item>
      <ds-menu-item value="archive" disabled>Archive</ds-menu-item>
      <ds-menu-item value="delete" tone="danger">Delete</ds-menu-item>
    </ds-menu>`},s={render:()=>n`<ds-tooltip content="Refresh balances from the connected bank">
      <ds-icon-button label="Refresh balances" icon="refresh"></ds-icon-button>
    </ds-tooltip>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack>
      <ds-button
        @click=\${() => (document.querySelector('ds-dialog') as HTMLElement & {
    show(): void;
  })?.show()}
        >Open confirmation</ds-button
      >
      <ds-dialog heading="Delete connection?" description="This action cannot be undone.">
        Existing imported transactions remain available.
        <ds-inline slot="footer">
          <ds-button variant="secondary">Cancel</ds-button>
          <ds-button variant="danger">Delete connection</ds-button>
        </ds-inline>
      </ds-dialog>
    </ds-stack>\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack>
      <ds-button
        @click=\${() => (document.querySelector('ds-drawer') as HTMLElement & {
    show(): void;
  })?.show()}
        >Open account details</ds-button
      >
      <ds-drawer heading="Account details" description="Daily account · 4300">
        <ds-stack>
          <ds-metric label="Current balance" value="€ 4,285.30"></ds-metric>
          <ds-disclosure summary="Identifiers">NL12 BANK 3456 7890 12</ds-disclosure>
        </ds-stack>
      </ds-drawer>
    </ds-stack>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-menu label="Transaction actions">
      <span slot="trigger">Actions</span>
      <ds-menu-item value="edit"><ds-icon slot="icon" name="edit"></ds-icon>Edit</ds-menu-item>
      <ds-menu-item value="duplicate">Duplicate</ds-menu-item>
      <ds-menu-item value="archive" disabled>Archive</ds-menu-item>
      <ds-menu-item value="delete" tone="danger">Delete</ds-menu-item>
    </ds-menu>\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-tooltip content="Refresh balances from the connected bank">
      <ds-icon-button label="Refresh balances" icon="refresh"></ds-icon-button>
    </ds-tooltip>\`
}`,...s.parameters?.docs?.source}}},c=[`Dialog`,`Drawer`,`Menu`,`Tooltip`]})))()}l();export{i as Dialog,a as Drawer,o as Menu,s as Tooltip,c as __namedExportsOrder,r as default};