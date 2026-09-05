import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Patterns/Adaptive layouts`,parameters:{layout:`fullscreen`},tags:[`autodocs`]},i=(e,t)=>n`<ds-pane-header>
    <div style="padding:var(--ds-space-4)"><strong>${e}</strong></div>
  </ds-pane-header>
  <ds-pane-content scrollable>
    <div style="padding:var(--ds-space-4)"><p>${t}</p><slot></slot></div>
  </ds-pane-content>`,a={render:()=>n`<div style="height:36rem;max-height:80vh">
    <ds-pane-group>
      <ds-pane position="left" style="--ds-pane-size:19rem">
        ${i(`Records`,`Choose a record to inspect.`)}
        <ds-list label="Records">
          <ds-list-item value="one" selected>Commercial Node</ds-list-item>
          <ds-list-item value="two">Research Node</ds-list-item>
        </ds-list>
      </ds-pane>
      <ds-pane position="center">
        ${i(`Commercial Node`,`The detail region keeps reading and keyboard order after the list.`)}
      </ds-pane>
    </ds-pane-group>
  </div>`},o={render:()=>n`<div style="height:36rem;max-height:80vh">
    <ds-pane-group>
      <ds-pane position="center">
        ${i(`Canonical model`,`The primary work remains available at every width.`)}
      </ds-pane>
      <ds-inspector-pane>
        ${i(`Properties`,`Supporting detail becomes an overlay below expanded width.`)}
      </ds-inspector-pane>
    </ds-pane-group>
  </div>`},s={render:()=>n`<ds-container>
    <ds-grid columns="3" responsive>
      ${[`Summary`,`Activity`,`Approvals`,`Jobs`,`Audit`,`Changes`].map(e=>n`<ds-card heading=${e}>Responsive feed content</ds-card>`)}
    </ds-grid>
  </ds-container>`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:36rem;max-height:80vh">
    <ds-pane-group>
      <ds-pane position="left" style="--ds-pane-size:19rem">
        \${paneContent('Records', 'Choose a record to inspect.')}
        <ds-list label="Records">
          <ds-list-item value="one" selected>Commercial Node</ds-list-item>
          <ds-list-item value="two">Research Node</ds-list-item>
        </ds-list>
      </ds-pane>
      <ds-pane position="center">
        \${paneContent('Commercial Node', 'The detail region keeps reading and keyboard order after the list.')}
      </ds-pane>
    </ds-pane-group>
  </div>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:36rem;max-height:80vh">
    <ds-pane-group>
      <ds-pane position="center">
        \${paneContent('Canonical model', 'The primary work remains available at every width.')}
      </ds-pane>
      <ds-inspector-pane>
        \${paneContent('Properties', 'Supporting detail becomes an overlay below expanded width.')}
      </ds-inspector-pane>
    </ds-pane-group>
  </div>\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-container>
    <ds-grid columns="3" responsive>
      \${['Summary', 'Activity', 'Approvals', 'Jobs', 'Audit', 'Changes'].map(heading => html\`<ds-card heading=\${heading}>Responsive feed content</ds-card>\`)}
    </ds-grid>
  </ds-container>\`
}`,...s.parameters?.docs?.source}}},c=[`ListDetail`,`SupportingPane`,`Feed`]})))()}l();export{s as Feed,a as ListDetail,o as SupportingPane,c as __namedExportsOrder,r as default};