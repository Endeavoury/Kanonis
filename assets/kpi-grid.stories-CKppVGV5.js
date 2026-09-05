import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Patterns/KPI Grid`,tags:[`autodocs`]},i={render:()=>n`<ds-kpi-grid columns="6"
      ><ds-metric
        label="Income"
        value="€6,200"
        tone="success"
        detail="External cash received"
      ></ds-metric
      ><ds-metric
        label="Expenses"
        value="€3,441"
        tone="danger"
        detail="External spending"
      ></ds-metric
      ><ds-metric
        label="Savings"
        value="+€2,759"
        tone="warning"
        detail="Incoming minus outgoing"
      ></ds-metric
      ><ds-metric label="Transfers" value="€1,250" detail="Own accounts"></ds-metric
      ><ds-metric label="Transactions" value="21" tone="accent" detail="August 2026"></ds-metric
      ><ds-metric label="Savings rate" value="44.5%" tone="info" detail="Monthly rhythm"></ds-metric
    ></ds-kpi-grid>`},a={parameters:{viewport:{defaultViewport:`mobile`}},render:()=>n`<ds-kpi-grid columns="6"
      >${Array.from({length:6},(e,t)=>n`<ds-metric label=${`Long metric label ${t+1}`} value=${t%2?`-€12,345.67`:`€123,456.78`} tone=${t%2?`danger`:`success`} detail="Supporting information"></ds-metric>`)}</ds-kpi-grid
    >`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-kpi-grid columns="6"
      ><ds-metric
        label="Income"
        value="€6,200"
        tone="success"
        detail="External cash received"
      ></ds-metric
      ><ds-metric
        label="Expenses"
        value="€3,441"
        tone="danger"
        detail="External spending"
      ></ds-metric
      ><ds-metric
        label="Savings"
        value="+€2,759"
        tone="warning"
        detail="Incoming minus outgoing"
      ></ds-metric
      ><ds-metric label="Transfers" value="€1,250" detail="Own accounts"></ds-metric
      ><ds-metric label="Transactions" value="21" tone="accent" detail="August 2026"></ds-metric
      ><ds-metric label="Savings rate" value="44.5%" tone="info" detail="Monthly rhythm"></ds-metric
    ></ds-kpi-grid>\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  },
  render: () => html\`<ds-kpi-grid columns="6"
      >\${Array.from({
    length: 6
  }, (_, i) => html\`<ds-metric label=\${\`Long metric label \${i + 1}\`} value=\${i % 2 ? '-€12,345.67' : '€123,456.78'} tone=\${i % 2 ? 'danger' : 'success'} detail="Supporting information"></ds-metric>\`)}</ds-kpi-grid
    >\`
}`,...a.parameters?.docs?.source}}},o=[`SixMetricBudgetStrip`,`ResponsiveStress`]})))()}s();export{a as ResponsiveStress,i as SixMetricBudgetStrip,o as __namedExportsOrder,r as default};