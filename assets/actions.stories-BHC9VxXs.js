import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r={title:`Components/Actions`,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`ghost`,`danger`]},size:{control:`select`,options:[`small`,`medium`,`large`]},disabled:{control:`boolean`},loading:{control:`boolean`}}},i={args:{variant:`primary`,size:`medium`,disabled:!1,loading:!1},render:e=>n`<ds-button
      variant=${e.variant}
      size=${e.size}
      ?disabled=${e.disabled}
      ?loading=${e.loading}
      ><ds-icon slot="prefix" name="plus"></ds-icon>Add transaction</ds-button
    >`},a={render:()=>n`<ds-stack
      >${[`small`,`medium`,`large`].map(e=>n`<ds-inline>${[`primary`,`secondary`,`ghost`,`danger`].map(t=>n`<ds-button variant=${t} size=${e}>${t}</ds-button>`)}</ds-inline>`)}</ds-stack
    >`},o={render:()=>n`<ds-stack
      ><ds-inline
        ><ds-button loading>Saving</ds-button><ds-button disabled>Unavailable</ds-button></ds-inline
      ><ds-button full-width>Full-width action</ds-button></ds-stack
    >`},s={render:()=>n`<ds-button href="/documentation" variant="secondary" target="_blank"
      ><ds-icon slot="prefix" name="book"></ds-icon>Open documentation</ds-button
    >`},c={render:()=>n`<ds-inline
      ><ds-icon-button label="Refresh"><ds-icon name="refresh"></ds-icon></ds-icon-button
      ><ds-button-group label="Period navigation"
        ><ds-icon-button label="Previous"><ds-icon name="chevron-left"></ds-icon></ds-icon-button
        ><ds-button variant="secondary">August 2026</ds-button
        ><ds-icon-button label="Next"
          ><ds-icon name="chevron-right"></ds-icon></ds-icon-button></ds-button-group
    ></ds-inline>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false
  },
  render: args => html\`<ds-button
      variant=\${args['variant']}
      size=\${args['size']}
      ?disabled=\${args['disabled']}
      ?loading=\${args['loading']}
      ><ds-icon slot="prefix" name="plus"></ds-icon>Add transaction</ds-button
    >\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  render: () => html`<ds-stack\n      >${['small', 'medium', 'large'].map(size => html`<ds-inline>${['primary', 'secondary', 'ghost', 'danger'].map(variant => html`<ds-button variant=${variant} size=${size}>${variant}</ds-button>`)}</ds-inline>`)}</ds-stack\n    >`\n}",...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack
      ><ds-inline
        ><ds-button loading>Saving</ds-button><ds-button disabled>Unavailable</ds-button></ds-inline
      ><ds-button full-width>Full-width action</ds-button></ds-stack
    >\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-button href="/documentation" variant="secondary" target="_blank"
      ><ds-icon slot="prefix" name="book"></ds-icon>Open documentation</ds-button
    >\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-inline
      ><ds-icon-button label="Refresh"><ds-icon name="refresh"></ds-icon></ds-icon-button
      ><ds-button-group label="Period navigation"
        ><ds-icon-button label="Previous"><ds-icon name="chevron-left"></ds-icon></ds-icon-button
        ><ds-button variant="secondary">August 2026</ds-button
        ><ds-icon-button label="Next"
          ><ds-icon name="chevron-right"></ds-icon></ds-icon-button></ds-button-group
    ></ds-inline>\`
}`,...c.parameters?.docs?.source}}},l=[`ButtonPlayground`,`VariantsAndSizes`,`LoadingDisabledAndWidth`,`LinkButton`,`IconButtonAndGroup`]})))()}u();export{i as ButtonPlayground,c as IconButtonAndGroup,s as LinkButton,o as LoadingDisabledAndWidth,a as VariantsAndSizes,l as __namedExportsOrder,r as default};