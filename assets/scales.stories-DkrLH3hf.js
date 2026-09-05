import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Foundation/Scales`,tags:[`autodocs`]},i={render:()=>n`<h2>Spacing</h2>
      <div style="display:grid;gap:10px">
        ${[1,2,3,4,5,6,7,8].map(e=>n`<div style="display:flex;align-items:center;gap:12px"><code style="width:100px">--ds-space-${e}</code><span style=${`display:block;height:18px;width:var(--ds-space-${e});background:var(--ds-color-accent-primary)`}></span></div>`)}
      </div>`},a={render:()=>n`<div style="display:flex;gap:24px;flex-wrap:wrap">
      ${[`sm`,`md`,`lg`].map(e=>n`<div style=${`width:150px;height:100px;padding:16px;border:1px solid var(--ds-color-border-default);border-radius:var(--ds-radius-${e});background:var(--ds-color-bg-surface);box-shadow:var(--ds-shadow-${e===`lg`?`lg`:`sm`})`}><code>radius-${e}</code></div>`)}
    </div>`},o={render:()=>n`<ds-panel
      heading="Motion and responsive policy"
      description="Fast 140ms feedback, 220ms structural transitions, semantic motion roles, and automatic reduction when requested."
      ><ds-stack gap="3"
        ><code>compact ≤40rem · medium ≤48rem · expanded ≤56.25rem · wide ≤68.75rem</code>
        <p style="color:var(--ds-color-text-secondary)">
          Component responsiveness is container-conscious where possible; application-shell
          structure uses the shared compact, medium, expanded, and wide contract.
        </p></ds-stack
      ></ds-panel
    >`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'{\n  render: () => html`<h2>Spacing</h2>\n      <div style="display:grid;gap:10px">\n        ${[1, 2, 3, 4, 5, 6, 7, 8].map(step => html`<div style="display:flex;align-items:center;gap:12px"><code style="width:100px">--ds-space-${step}</code><span style=${`display:block;height:18px;width:var(--ds-space-${step});background:var(--ds-color-accent-primary)`}></span></div>`)}\n      </div>`\n}',...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  render: () => html`<div style=\"display:flex;gap:24px;flex-wrap:wrap\">\n      ${['sm', 'md', 'lg'].map(size => html`<div style=${`width:150px;height:100px;padding:16px;border:1px solid var(--ds-color-border-default);border-radius:var(--ds-radius-${size});background:var(--ds-color-bg-surface);box-shadow:var(--ds-shadow-${size === 'lg' ? 'lg' : 'sm'})`}><code>radius-${size}</code></div>`)}\n    </div>`\n}",...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-panel
      heading="Motion and responsive policy"
      description="Fast 140ms feedback, 220ms structural transitions, semantic motion roles, and automatic reduction when requested."
      ><ds-stack gap="3"
        ><code>compact ≤40rem · medium ≤48rem · expanded ≤56.25rem · wide ≤68.75rem</code>
        <p style="color:var(--ds-color-text-secondary)">
          Component responsiveness is container-conscious where possible; application-shell
          structure uses the shared compact, medium, expanded, and wide contract.
        </p></ds-stack
      ></ds-panel
    >\`
}`,...o.parameters?.docs?.source}}},s=[`Spacing`,`RadiusAndElevation`,`MotionAndBreakpoints`]})))()}c();export{o as MotionAndBreakpoints,a as RadiusAndElevation,i as Spacing,s as __namedExportsOrder,r as default};