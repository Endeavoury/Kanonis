import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Foundation/Themes & Accessibility`,tags:[`autodocs`]},i={render:()=>n`<div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px"
    >
      ${[`light`,`dark`].map(e=>n`<section
            data-ds-theme=${e}
            style="padding:20px;border:1px solid var(--ds-color-border-default);border-radius:10px;background:var(--ds-color-bg-canvas);color:var(--ds-color-text-primary)"
          >
            <h2>${e}</h2>
            <ds-panel heading="Surface hierarchy"
              ><ds-inline
                ><ds-button>Primary</ds-button><ds-button variant="secondary">Secondary</ds-button
                ><ds-status-badge tone="success">Online</ds-status-badge></ds-inline
              ></ds-panel
            >
          </section>`)}
    </div>`},a={render:()=>n`<ds-panel
      heading="Accessibility defaults"
      description="WCAG-oriented focus, semantics, motion, and contrast are part of the shared foundation."
      ><ul>
        <li>Visible two-pixel focus rings with contrast-aware semantic color.</li>
        <li>Minimum 40px default controls and larger mobile navigation targets.</li>
        <li>Native controls and ElementInternals for form semantics.</li>
        <li>Reduced-motion token override and non-motion loading fallback.</li>
        <li>Errors are text plus color; status dots always retain labels.</li>
      </ul>
      <ds-inline
        ><ds-button>Tab to inspect focus</ds-button
        ><ds-input
          label="Labeled field"
          helpText="Labels and descriptions remain programmatic"
        ></ds-input></ds-inline
    ></ds-panel>`},o={render:()=>n`<div
    style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:var(--ds-space-4)"
  >
    ${[{brand:`default`,contrast:`standard`},{brand:`finance`,contrast:`standard`},{brand:`ontology`,contrast:`standard`},{brand:`default`,contrast:`more`}].map(({brand:e,contrast:t})=>n`<section
        data-ds-theme="light"
        data-ds-brand=${e}
        data-ds-contrast=${t}
        style="padding:var(--ds-space-5);border:1px solid var(--ds-color-border-default);border-radius:var(--ds-shape-surface);background:var(--ds-color-bg-canvas);color:var(--ds-color-text-primary)"
      >
        <ds-brand-mark name=${e==="default"?`Kanosis`:e}></ds-brand-mark>
        <p>${e} · ${t}</p>
        <ds-button>Primary action</ds-button>
      </section>`)}
  </div>`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px"
    >
      \${['light', 'dark'].map(theme => html\`<section
            data-ds-theme=\${theme}
            style="padding:20px;border:1px solid var(--ds-color-border-default);border-radius:10px;background:var(--ds-color-bg-canvas);color:var(--ds-color-text-primary)"
          >
            <h2>\${theme}</h2>
            <ds-panel heading="Surface hierarchy"
              ><ds-inline
                ><ds-button>Primary</ds-button><ds-button variant="secondary">Secondary</ds-button
                ><ds-status-badge tone="success">Online</ds-status-badge></ds-inline
              ></ds-panel
            >
          </section>\`)}
    </div>\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-panel
      heading="Accessibility defaults"
      description="WCAG-oriented focus, semantics, motion, and contrast are part of the shared foundation."
      ><ul>
        <li>Visible two-pixel focus rings with contrast-aware semantic color.</li>
        <li>Minimum 40px default controls and larger mobile navigation targets.</li>
        <li>Native controls and ElementInternals for form semantics.</li>
        <li>Reduced-motion token override and non-motion loading fallback.</li>
        <li>Errors are text plus color; status dots always retain labels.</li>
      </ul>
      <ds-inline
        ><ds-button>Tab to inspect focus</ds-button
        ><ds-input
          label="Labeled field"
          helpText="Labels and descriptions remain programmatic"
        ></ds-input></ds-inline
    ></ds-panel>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div
    style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:var(--ds-space-4)"
  >
    \${[{
    brand: 'default',
    contrast: 'standard'
  }, {
    brand: 'finance',
    contrast: 'standard'
  }, {
    brand: 'ontology',
    contrast: 'standard'
  }, {
    brand: 'default',
    contrast: 'more'
  }].map(({
    brand,
    contrast
  }) => html\`<section
        data-ds-theme="light"
        data-ds-brand=\${brand}
        data-ds-contrast=\${contrast}
        style="padding:var(--ds-space-5);border:1px solid var(--ds-color-border-default);border-radius:var(--ds-shape-surface);background:var(--ds-color-bg-canvas);color:var(--ds-color-text-primary)"
      >
        <ds-brand-mark name=\${brand === 'default' ? 'Kanosis' : brand}></ds-brand-mark>
        <p>\${brand} · \${contrast}</p>
        <ds-button>Primary action</ds-button>
      </section>\`)}
  </div>\`
}`,...o.parameters?.docs?.source}}},s=[`ThemeComparison`,`AccessibilityFoundation`,`ContrastAndBrandMatrix`]})))()}c();export{a as AccessibilityFoundation,o as ContrastAndBrandMatrix,i as ThemeComparison,s as __namedExportsOrder,r as default};