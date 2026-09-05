import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Components/Maturity additions`,tags:[`autodocs`]},i={render:()=>n`<ds-stack gap="6">
      <ds-segmented-control label="Report period" value="month">
        <ds-segment value="week">Week</ds-segment>
        <ds-segment value="month">Month</ds-segment>
        <ds-segment value="year">Year</ds-segment>
      </ds-segmented-control>

      <ds-action-bar label="Record actions" collapse-at-compact>
        <ds-button>Save</ds-button>
        <ds-button variant="secondary" data-overflow>Duplicate</ds-button>
        <ds-button variant="danger" data-overflow slot="overflow">Delete</ds-button>
      </ds-action-bar>

      <ds-split-button label="Publish" menu-label="Publishing options">
        Publish
        <ds-menu-item slot="menu" value="schedule">Schedule</ds-menu-item>
        <ds-menu-item slot="menu" value="draft">Save draft</ds-menu-item>
      </ds-split-button>

      <ds-inline>
        <ds-chip value="open" label="Open" selected dismissible>Open</ds-chip>
        <ds-chip value="closed" label="Closed">Closed</ds-chip>
      </ds-inline>

      <ds-input-group label="Repository URL">
        <span slot="prefix">https://</span>
        <ds-input label="Repository host" hide-label value="example.test/project"></ds-input>
        <ds-button slot="suffix" variant="ghost">Copy</ds-button>
      </ds-input-group>
    </ds-stack>`},a={render:()=>n`<ds-reorder-list label="Dashboard panels">
      <ds-reorder-item value="summary" label="Summary">Summary</ds-reorder-item>
      <ds-reorder-item value="activity" label="Activity">Activity</ds-reorder-item>
      <ds-reorder-item value="audit" label="Audit log">Audit log</ds-reorder-item>
    </ds-reorder-list>`},o={render:()=>n`<ds-stack gap="6">
      <ds-brand-mark></ds-brand-mark>
      <ds-inline>
        <ds-illustration variant="empty" label="Empty archive"></ds-illustration>
        <ds-illustration variant="search" label="Search"></ds-illustration>
        <ds-illustration variant="success" label="Success"></ds-illustration>
        <ds-illustration variant="error" label="Error"></ds-illustration>
      </ds-inline>
      <ds-live-region message="Example update completed"></ds-live-region>
    </ds-stack>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack gap="6">
      <ds-segmented-control label="Report period" value="month">
        <ds-segment value="week">Week</ds-segment>
        <ds-segment value="month">Month</ds-segment>
        <ds-segment value="year">Year</ds-segment>
      </ds-segmented-control>

      <ds-action-bar label="Record actions" collapse-at-compact>
        <ds-button>Save</ds-button>
        <ds-button variant="secondary" data-overflow>Duplicate</ds-button>
        <ds-button variant="danger" data-overflow slot="overflow">Delete</ds-button>
      </ds-action-bar>

      <ds-split-button label="Publish" menu-label="Publishing options">
        Publish
        <ds-menu-item slot="menu" value="schedule">Schedule</ds-menu-item>
        <ds-menu-item slot="menu" value="draft">Save draft</ds-menu-item>
      </ds-split-button>

      <ds-inline>
        <ds-chip value="open" label="Open" selected dismissible>Open</ds-chip>
        <ds-chip value="closed" label="Closed">Closed</ds-chip>
      </ds-inline>

      <ds-input-group label="Repository URL">
        <span slot="prefix">https://</span>
        <ds-input label="Repository host" hide-label value="example.test/project"></ds-input>
        <ds-button slot="suffix" variant="ghost">Copy</ds-button>
      </ds-input-group>
    </ds-stack>\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-reorder-list label="Dashboard panels">
      <ds-reorder-item value="summary" label="Summary">Summary</ds-reorder-item>
      <ds-reorder-item value="activity" label="Activity">Activity</ds-reorder-item>
      <ds-reorder-item value="audit" label="Audit log">Audit log</ds-reorder-item>
    </ds-reorder-list>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack gap="6">
      <ds-brand-mark></ds-brand-mark>
      <ds-inline>
        <ds-illustration variant="empty" label="Empty archive"></ds-illustration>
        <ds-illustration variant="search" label="Search"></ds-illustration>
        <ds-illustration variant="success" label="Success"></ds-illustration>
        <ds-illustration variant="error" label="Error"></ds-illustration>
      </ds-inline>
      <ds-live-region message="Example update completed"></ds-live-region>
    </ds-stack>\`
}`,...o.parameters?.docs?.source}}},s=[`ActionComposition`,`AccessibleReordering`,`SharedAssets`]})))()}c();export{a as AccessibleReordering,i as ActionComposition,o as SharedAssets,s as __namedExportsOrder,r as default};