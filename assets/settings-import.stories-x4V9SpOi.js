import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";import{a as r,i,o as a,t as o}from"./product-fixtures-DjvLfdX-.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),o(),s=[{label:`Current account`,value:`current`},{label:`Savings account`,value:`savings`},{label:`Investment account`,value:`investment`}],c={title:`Patterns/Product/Settings & Import`,parameters:{layout:`fullscreen`},tags:[`autodocs`]},l={globals:{theme:`dark`},render:()=>n`${a}
      <div class="product">
        <ds-app-shell
          >${r()}${i(`Accounts`)}<ds-page-header
            eyebrow="Account settings"
            heading="Name and organize accounts"
            description="Custom names and account types are stored separately from bank source data."
          ></ds-page-header>
          <div class="content settings">
            ${[[`Daily account`,`NL91 •••• 4300`,`€12,840.22`,`current`],[`Rainy day fund`,`NL38 •••• 9308`,`€9,200.00`,`savings`]].map(e=>n`<ds-card
                  ><ds-inline slot="header" justify="between"
                    ><ds-inline
                      ><ds-icon name="wallet"></ds-icon>
                      <div>
                        <strong>${e[0]}</strong
                        ><small style="display:block;color:var(--ds-color-text-muted)"
                          >${e[1]}</small
                        >
                      </div></ds-inline
                    ><strong>${e[2]}</strong></ds-inline
                  ><ds-stack
                    ><ds-input label="Custom account name" value=${e[0]}></ds-input
                    ><ds-select
                      label="Account type"
                      value=${e[3]}
                      .options=${s}
                    ></ds-select
                    ><ds-button>Save account</ds-button></ds-stack
                  ></ds-card
                >`)}
          </div></ds-app-shell
        >
      </div>`},u={globals:{theme:`dark`},render:()=>n`${a}
      <div class="product">
        <ds-app-shell
          >${r()}${i(`Upload CAMT`)}<ds-page-header
            eyebrow="Data ingestion"
            heading="Import bank statements"
            description="Upload one CAMT XML file or a ZIP archive."
          ></ds-page-header>
          <div class="content">
            <ds-panel heading="New import"
              ><label class="drop"
                ><div>
                  <ds-icon
                    name="upload"
                    style="font-size:32px;color:var(--ds-color-accent-primary)"
                  ></ds-icon>
                  <h3>Choose or drop an XML / ZIP file</h3>
                  <p style="color:var(--ds-color-text-muted)">Maximum ZIP size 2 GiB</p>
                  <ds-button variant="secondary">Choose file</ds-button>
                </div></label
              ></ds-panel
            ><ds-alert tone="success" heading="Import queued"
              >The statement is ready for background processing.</ds-alert
            >
          </div></ds-app-shell
        >
      </div>`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: () => html\`\${productStyles}
      <div class="product">
        <ds-app-shell
          >\${productSidebar()}\${productHeader('Accounts')}<ds-page-header
            eyebrow="Account settings"
            heading="Name and organize accounts"
            description="Custom names and account types are stored separately from bank source data."
          ></ds-page-header>
          <div class="content settings">
            \${[['Daily account', 'NL91 •••• 4300', '€12,840.22', 'current'], ['Rainy day fund', 'NL38 •••• 9308', '€9,200.00', 'savings']].map(account => html\`<ds-card
                  ><ds-inline slot="header" justify="between"
                    ><ds-inline
                      ><ds-icon name="wallet"></ds-icon>
                      <div>
                        <strong>\${account[0]}</strong
                        ><small style="display:block;color:var(--ds-color-text-muted)"
                          >\${account[1]}</small
                        >
                      </div></ds-inline
                    ><strong>\${account[2]}</strong></ds-inline
                  ><ds-stack
                    ><ds-input label="Custom account name" value=\${account[0]}></ds-input
                    ><ds-select
                      label="Account type"
                      value=\${account[3]}
                      .options=\${types}
                    ></ds-select
                    ><ds-button>Save account</ds-button></ds-stack
                  ></ds-card
                >\`)}
          </div></ds-app-shell
        >
      </div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: () => html\`\${productStyles}
      <div class="product">
        <ds-app-shell
          >\${productSidebar()}\${productHeader('Upload CAMT')}<ds-page-header
            eyebrow="Data ingestion"
            heading="Import bank statements"
            description="Upload one CAMT XML file or a ZIP archive."
          ></ds-page-header>
          <div class="content">
            <ds-panel heading="New import"
              ><label class="drop"
                ><div>
                  <ds-icon
                    name="upload"
                    style="font-size:32px;color:var(--ds-color-accent-primary)"
                  ></ds-icon>
                  <h3>Choose or drop an XML / ZIP file</h3>
                  <p style="color:var(--ds-color-text-muted)">Maximum ZIP size 2 GiB</p>
                  <ds-button variant="secondary">Choose file</ds-button>
                </div></label
              ></ds-panel
            ><ds-alert tone="success" heading="Import queued"
              >The statement is ready for background processing.</ds-alert
            >
          </div></ds-app-shell
        >
      </div>\`
}`,...u.parameters?.docs?.source}}},d=[`AccountSettings`,`ImportWorkflow`]})))()}f();export{l as AccountSettings,u as ImportWorkflow,d as __namedExportsOrder,c as default};