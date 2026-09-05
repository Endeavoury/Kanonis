import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a;function o(){return(o=e((()=>{t(),r={title:`Components/Enterprise operations`,parameters:{layout:`fullscreen`},tags:[`autodocs`]},i={render:()=>n`<div style="display:grid;gap:1rem;max-width:1000px;margin:auto;padding:1.5rem">
      <ds-form-section
        heading="Project settings"
        description="Configure ownership and release details"
        ><ds-input label="Project name" value="Atlas rollout"></ds-input
        ><ds-date-picker label="Release date" value="2026-09-04"></ds-date-picker
        ><ds-time-picker label="Release time" value="09:30"></ds-time-picker
      ></ds-form-section>
      <ds-field-array
        .items=${[{id:`one`,label:`Environment`,value:`Production`}]}
      ></ds-field-array>
      <ds-stepper
        .steps=${[{id:`configure`,label:`Configure`},{id:`review`,label:`Review`},{id:`deploy`,label:`Deploy`}]}
        value="review"
      ></ds-stepper>
      <ds-approval-flow status="pending"></ds-approval-flow>
      <ds-task-list
        .tasks=${[{id:`1`,title:`Review access policy`,detail:`Security team`,completed:!1},{id:`2`,title:`Validate deployment`,completed:!0}]}
      ></ds-task-list>
      <ds-timeline
        .items=${[{title:`Deployment started`,body:`Release 2.4.0 entered the pipeline.`,time:`09:42`},{title:`Configuration approved`,time:`Yesterday`}]}
      ></ds-timeline>
      <ds-activity-feed
        .items=${[{id:`1`,actor:`Jordan Lee`,body:`Updated the release target.`,time:`10 minutes ago`}]}
      ></ds-activity-feed>
      <ds-job-status label="Deployment progress" value="68" show-value></ds-job-status>
      <ds-change-summary
        .changes=${[{field:`Owner`,before:`Operations`,after:`Platform`},{field:`Region`,before:`EU West`,after:`EU Central`}]}
      ></ds-change-summary>
      <ds-file-upload
        label="Upload release manifest"
        hint="YAML or JSON up to 10 MB"
        accept=".yaml,.json"
      ></ds-file-upload>
    </div>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="display:grid;gap:1rem;max-width:1000px;margin:auto;padding:1.5rem">
      <ds-form-section
        heading="Project settings"
        description="Configure ownership and release details"
        ><ds-input label="Project name" value="Atlas rollout"></ds-input
        ><ds-date-picker label="Release date" value="2026-09-04"></ds-date-picker
        ><ds-time-picker label="Release time" value="09:30"></ds-time-picker
      ></ds-form-section>
      <ds-field-array
        .items=\${[{
    id: 'one',
    label: 'Environment',
    value: 'Production'
  }]}
      ></ds-field-array>
      <ds-stepper
        .steps=\${[{
    id: 'configure',
    label: 'Configure'
  }, {
    id: 'review',
    label: 'Review'
  }, {
    id: 'deploy',
    label: 'Deploy'
  }]}
        value="review"
      ></ds-stepper>
      <ds-approval-flow status="pending"></ds-approval-flow>
      <ds-task-list
        .tasks=\${[{
    id: '1',
    title: 'Review access policy',
    detail: 'Security team',
    completed: false
  }, {
    id: '2',
    title: 'Validate deployment',
    completed: true
  }]}
      ></ds-task-list>
      <ds-timeline
        .items=\${[{
    title: 'Deployment started',
    body: 'Release 2.4.0 entered the pipeline.',
    time: '09:42'
  }, {
    title: 'Configuration approved',
    time: 'Yesterday'
  }]}
      ></ds-timeline>
      <ds-activity-feed
        .items=\${[{
    id: '1',
    actor: 'Jordan Lee',
    body: 'Updated the release target.',
    time: '10 minutes ago'
  }]}
      ></ds-activity-feed>
      <ds-job-status label="Deployment progress" value="68" show-value></ds-job-status>
      <ds-change-summary
        .changes=\${[{
    field: 'Owner',
    before: 'Operations',
    after: 'Platform'
  }, {
    field: 'Region',
    before: 'EU West',
    after: 'EU Central'
  }]}
      ></ds-change-summary>
      <ds-file-upload
        label="Upload release manifest"
        hint="YAML or JSON up to 10 MB"
        accept=".yaml,.json"
      ></ds-file-upload>
    </div>\`
}`,...i.parameters?.docs?.source}}},a=[`Operations`]})))()}o();export{i as Operations,a as __namedExportsOrder,r as default};