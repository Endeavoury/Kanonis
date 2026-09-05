import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";import{a as r,i,o as a,t as o}from"./product-fixtures-DjvLfdX-.js";var s,c,l,u;function d(){return(d=e((()=>{t(),o(),s={title:`Patterns/Product/Dashboard`,parameters:{layout:`fullscreen`},tags:[`autodocs`]},c={globals:{theme:`dark`},render:()=>n`${a}
      <div class="product">
        <ds-app-shell
          >${r()}${i(`Overview`)}<ds-page-header
            eyebrow="Financial overview"
            heading="Your finances, clearly mapped."
            description="Based on 2,634 imported transactions · Updated just now"
            ><ds-button-group slot="actions"
              ><ds-button size="small" variant="secondary">This month</ds-button
              ><ds-button size="small" variant="ghost">3 months</ds-button
              ><ds-button size="small" variant="ghost">This year</ds-button></ds-button-group
            ></ds-page-header
          >
          <div class="content">
            <ds-kpi-grid columns="4"
              ><ds-metric
                label="Current balance"
                value="€24,839.32"
                detail="Across 8 active accounts"
                tone="accent"
              ></ds-metric
              ><ds-metric
                label="Income"
                value="€6,200.00"
                detail="Cash inflow"
                tone="success"
              ></ds-metric
              ><ds-metric
                label="Expenses"
                value="€3,441.00"
                detail="€111 average per day"
                tone="danger"
              ></ds-metric
              ><ds-metric
                label="Savings"
                value="+€2,759.00"
                detail="44.5% savings rate"
                tone="warning"
              ></ds-metric
            ></ds-kpi-grid>
            <div class="split">
              <ds-panel eyebrow="Cash flow" heading="Income vs expenses"
                ><div class="chart">
                  ${[65,72,68,81,73,88,78,92,82,75,90,86].map((e,t)=>n`<div class="chart-group"><i class="bar" style=${`height:${e}%`}></i><i class="bar out" style=${`height:${35+t%4*9}%`}></i></div>`)}
                </div></ds-panel
              ><ds-panel eyebrow="Spending" heading="By category"
                ><div class="category-list">
                  ${[[`Housing`,`€1,650`,`72%`],[`Food`,`€958`,`42%`],[`Transport`,`€254`,`18%`],[`Utilities`,`€188`,`14%`],[`Shopping`,`€174`,`12%`]].map(e=>n`<div class="category">
                        <div><strong>${e[0]}</strong><i style=${`width:${e[2]}`}></i></div>
                        <b>${e[1]}</b>
                      </div>`)}
                </div></ds-panel
              >
            </div>
            <ds-alert tone="info" heading="Data availability"
              >Some forecasts require more transaction history. Current calculations use imported
              CAMT records only.</ds-alert
            >
          </div></ds-app-shell
        >
      </div>`},l={...c,parameters:{...c.parameters,viewport:{defaultViewport:`mobile`}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: () => html\`\${productStyles}
      <div class="product">
        <ds-app-shell
          >\${productSidebar()}\${productHeader('Overview')}<ds-page-header
            eyebrow="Financial overview"
            heading="Your finances, clearly mapped."
            description="Based on 2,634 imported transactions · Updated just now"
            ><ds-button-group slot="actions"
              ><ds-button size="small" variant="secondary">This month</ds-button
              ><ds-button size="small" variant="ghost">3 months</ds-button
              ><ds-button size="small" variant="ghost">This year</ds-button></ds-button-group
            ></ds-page-header
          >
          <div class="content">
            <ds-kpi-grid columns="4"
              ><ds-metric
                label="Current balance"
                value="€24,839.32"
                detail="Across 8 active accounts"
                tone="accent"
              ></ds-metric
              ><ds-metric
                label="Income"
                value="€6,200.00"
                detail="Cash inflow"
                tone="success"
              ></ds-metric
              ><ds-metric
                label="Expenses"
                value="€3,441.00"
                detail="€111 average per day"
                tone="danger"
              ></ds-metric
              ><ds-metric
                label="Savings"
                value="+€2,759.00"
                detail="44.5% savings rate"
                tone="warning"
              ></ds-metric
            ></ds-kpi-grid>
            <div class="split">
              <ds-panel eyebrow="Cash flow" heading="Income vs expenses"
                ><div class="chart">
                  \${[65, 72, 68, 81, 73, 88, 78, 92, 82, 75, 90, 86].map((height, index) => html\`<div class="chart-group"><i class="bar" style=\${\`height:\${height}%\`}></i><i class="bar out" style=\${\`height:\${35 + index % 4 * 9}%\`}></i></div>\`)}
                </div></ds-panel
              ><ds-panel eyebrow="Spending" heading="By category"
                ><div class="category-list">
                  \${[['Housing', '€1,650', '72%'], ['Food', '€958', '42%'], ['Transport', '€254', '18%'], ['Utilities', '€188', '14%'], ['Shopping', '€174', '12%']].map(row => html\`<div class="category">
                        <div><strong>\${row[0]}</strong><i style=\${\`width:\${row[2]}\`}></i></div>
                        <b>\${row[1]}</b>
                      </div>\`)}
                </div></ds-panel
              >
            </div>
            <ds-alert tone="info" heading="Data availability"
              >Some forecasts require more transaction history. Current calculations use imported
              CAMT records only.</ds-alert
            >
          </div></ds-app-shell
        >
      </div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  parameters: {
    ...Desktop.parameters,
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Desktop`,`Mobile`]})))()}d();export{c as Desktop,l as Mobile,u as __namedExportsOrder,s as default};