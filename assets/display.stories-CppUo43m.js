import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r={title:`Components/Data Display`,tags:[`autodocs`]},i={render:()=>n`<ds-inline
      >${[`neutral`,`accent`,`success`,`warning`,`danger`,`info`].map(e=>n`<ds-badge tone=${e}>${e}</ds-badge>`)}</ds-inline
    >`},a={render:()=>n`<ds-inline
      ><ds-status-badge tone="success">Online</ds-status-badge
      ><ds-status-badge tone="warning">Sync pending</ds-status-badge
      ><ds-status-badge tone="danger">Offline</ds-status-badge
      ><ds-status-badge>Unknown</ds-status-badge></ds-inline
    >`},o={render:()=>n`<ds-inline
      ><ds-avatar name="Roy Gerritse" size="small"></ds-avatar
      ><ds-avatar name="Roy Gerritse"></ds-avatar
      ><ds-avatar name="Finance Inzicht" size="large"></ds-avatar
    ></ds-inline>`},s={render:()=>n`<ds-grid columns="2" responsive
      ><ds-card
        ><strong slot="header">Account</strong
        ><ds-badge slot="actions" tone="success">Active</ds-badge>
        <p>Daily account · NL91 •••• 4300</p>
        <strong>€12,840.22</strong><span slot="footer">Updated a minute ago</span></ds-card
      ><ds-panel
        eyebrow="Analytics"
        heading="Spending by category"
        description="A technical panel with a stable action slot"
        ><ds-button slot="actions" variant="secondary" size="small">View details</ds-button>
        <p>
          Charts and application-specific visualizations compose inside this neutral surface.
        </p></ds-panel
      ></ds-grid
    >`},c={render:()=>n`<ds-kpi-grid columns="4"
      ><ds-metric
        label="Income"
        value="€6,200.00"
        detail="External cash received"
        tone="success"
      ></ds-metric
      ><ds-metric
        label="Expenses"
        value="€3,441.00"
        detail="External spending"
        tone="danger"
      ></ds-metric
      ><ds-metric
        label="Savings"
        value="+€2,759.00"
        detail="44.5% savings rate"
        tone="warning"
      ></ds-metric
      ><ds-metric label="Transactions" value="21" detail="August 2026" tone="accent"></ds-metric
    ></ds-kpi-grid>`},l={render:()=>n`<div style="max-width:220px">
      <ds-metric
        label="Extremely descriptive metric label"
        value="€123,456,789.12"
        detail="Long supporting detail wraps without escaping the surface"
      ></ds-metric>
    </div>`},u={render:()=>n`<ds-description-list .items=${[{term:`Authoritative Node`,value:`Commercial master data`},{term:`Object URI`,value:`https://customer.example/id/customer/42`},{term:`Schema version`,value:`2.4.0`},{term:`Steward`,value:`Data Governance`}]}></ds-description-list>`},d={render:()=>n`<ds-code-block label="Canonical relationship" language="YAML">source: Customer
target: Country
cardinality: ManyToOne</ds-code-block>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{\n  render: () => html`<ds-inline\n      >${['neutral', 'accent', 'success', 'warning', 'danger', 'info'].map(tone => html`<ds-badge tone=${tone}>${tone}</ds-badge>`)}</ds-inline\n    >`\n}",...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-inline
      ><ds-status-badge tone="success">Online</ds-status-badge
      ><ds-status-badge tone="warning">Sync pending</ds-status-badge
      ><ds-status-badge tone="danger">Offline</ds-status-badge
      ><ds-status-badge>Unknown</ds-status-badge></ds-inline
    >\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-inline
      ><ds-avatar name="Roy Gerritse" size="small"></ds-avatar
      ><ds-avatar name="Roy Gerritse"></ds-avatar
      ><ds-avatar name="Finance Inzicht" size="large"></ds-avatar
    ></ds-inline>\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-grid columns="2" responsive
      ><ds-card
        ><strong slot="header">Account</strong
        ><ds-badge slot="actions" tone="success">Active</ds-badge>
        <p>Daily account · NL91 •••• 4300</p>
        <strong>€12,840.22</strong><span slot="footer">Updated a minute ago</span></ds-card
      ><ds-panel
        eyebrow="Analytics"
        heading="Spending by category"
        description="A technical panel with a stable action slot"
        ><ds-button slot="actions" variant="secondary" size="small">View details</ds-button>
        <p>
          Charts and application-specific visualizations compose inside this neutral surface.
        </p></ds-panel
      ></ds-grid
    >\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-kpi-grid columns="4"
      ><ds-metric
        label="Income"
        value="€6,200.00"
        detail="External cash received"
        tone="success"
      ></ds-metric
      ><ds-metric
        label="Expenses"
        value="€3,441.00"
        detail="External spending"
        tone="danger"
      ></ds-metric
      ><ds-metric
        label="Savings"
        value="+€2,759.00"
        detail="44.5% savings rate"
        tone="warning"
      ></ds-metric
      ><ds-metric label="Transactions" value="21" detail="August 2026" tone="accent"></ds-metric
    ></ds-kpi-grid>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="max-width:220px">
      <ds-metric
        label="Extremely descriptive metric label"
        value="€123,456,789.12"
        detail="Long supporting detail wraps without escaping the surface"
      ></ds-metric>
    </div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-description-list .items=\${[{
    term: 'Authoritative Node',
    value: 'Commercial master data'
  }, {
    term: 'Object URI',
    value: 'https://customer.example/id/customer/42'
  }, {
    term: 'Schema version',
    value: '2.4.0'
  }, {
    term: 'Steward',
    value: 'Data Governance'
  }]}></ds-description-list>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-code-block label="Canonical relationship" language="YAML">source: Customer
target: Country
cardinality: ManyToOne</ds-code-block>\`
}`,...d.parameters?.docs?.source}}},f=[`Badges`,`StatusBadges`,`Avatars`,`CardsAndPanels`,`Metrics`,`LongMetricContent`,`StructuredMetadata`,`CodeBlock`]})))()}p();export{o as Avatars,i as Badges,s as CardsAndPanels,d as CodeBlock,l as LongMetricContent,c as Metrics,a as StatusBadges,u as StructuredMetadata,f as __namedExportsOrder,r as default};