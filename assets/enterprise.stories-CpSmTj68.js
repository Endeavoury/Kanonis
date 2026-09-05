import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r=[{key:`name`,label:`Name`,sortable:!0},{key:`team`,label:`Team`,sortable:!0},{key:`status`,label:`Status`}],i=[{id:`1`,name:`Atlas rollout`,team:`Platform`,status:`In progress`},{id:`2`,name:`Access review`,team:`Security`,status:`Needs review`},{id:`3`,name:`Workspace migration`,team:`Operations`,status:`Complete`}],a={title:`Components/Enterprise workflow`,parameters:{layout:`fullscreen`},tags:[`autodocs`]},o={render:()=>n`<div style="max-width:1100px;margin:auto;padding:1.5rem;display:grid;gap:1rem">
      <ds-view-toolbar query="" placeholder="Search projects">
        <ds-button slot="actions" variant="secondary">Export</ds-button>
        <ds-button slot="actions">New project</ds-button>
      </ds-view-toolbar>
      <ds-filter-builder
        .fields=${[{key:`team`,label:`Team`},{key:`status`,label:`Status`}]}
        .rules=${[{field:`status`,operator:`equals`,value:`In progress`}]}
      ></ds-filter-builder>
      <ds-bulk-actions count="2"
        ><ds-button variant="secondary">Assign</ds-button
        ><ds-button variant="danger">Archive</ds-button></ds-bulk-actions
      >
      <ds-data-grid .columns=${r} .rows=${i} selectable caption="Projects"></ds-data-grid>
      <div style="display:flex;gap:1rem;align-items:start;flex-wrap:wrap">
        <ds-column-manager
          .columns=${r.map(e=>({key:String(e.key),label:e.label,visible:!0}))}
        ></ds-column-manager>
        <ds-saved-view
          .views=${[{id:`mine`,label:`My projects`},{id:`review`,label:`Needs review`}]}
        ></ds-saved-view>
      </div>
      <ds-combobox
        label="Owner"
        .options=${[{label:`Platform team`,value:`platform`},{label:`Security team`,value:`security`}]}
      ></ds-combobox>
      <ds-validation-summary
        .errors=${[{id:`owner`,message:`Choose an owner before saving.`}]}
      ></ds-validation-summary>
    </div>`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="max-width:1100px;margin:auto;padding:1.5rem;display:grid;gap:1rem">
      <ds-view-toolbar query="" placeholder="Search projects">
        <ds-button slot="actions" variant="secondary">Export</ds-button>
        <ds-button slot="actions">New project</ds-button>
      </ds-view-toolbar>
      <ds-filter-builder
        .fields=\${[{
    key: 'team',
    label: 'Team'
  }, {
    key: 'status',
    label: 'Status'
  }]}
        .rules=\${[{
    field: 'status',
    operator: 'equals',
    value: 'In progress'
  }]}
      ></ds-filter-builder>
      <ds-bulk-actions count="2"
        ><ds-button variant="secondary">Assign</ds-button
        ><ds-button variant="danger">Archive</ds-button></ds-bulk-actions
      >
      <ds-data-grid .columns=\${columns} .rows=\${rows} selectable caption="Projects"></ds-data-grid>
      <div style="display:flex;gap:1rem;align-items:start;flex-wrap:wrap">
        <ds-column-manager
          .columns=\${columns.map(column => ({
    key: String(column.key),
    label: column.label,
    visible: true
  }))}
        ></ds-column-manager>
        <ds-saved-view
          .views=\${[{
    id: 'mine',
    label: 'My projects'
  }, {
    id: 'review',
    label: 'Needs review'
  }]}
        ></ds-saved-view>
      </div>
      <ds-combobox
        label="Owner"
        .options=\${[{
    label: 'Platform team',
    value: 'platform'
  }, {
    label: 'Security team',
    value: 'security'
  }]}
      ></ds-combobox>
      <ds-validation-summary
        .errors=\${[{
    id: 'owner',
    message: 'Choose an owner before saving.'
  }]}
      ></ds-validation-summary>
    </div>\`
}`,...o.parameters?.docs?.source}}},s=[`DataWorkflow`]})))()}c();export{o as DataWorkflow,s as __namedExportsOrder,a as default};