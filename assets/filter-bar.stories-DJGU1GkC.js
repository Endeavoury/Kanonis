import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r=[{label:`All accounts`,value:``},{label:`Daily account`,value:`daily`},{label:`Savings`,value:`savings`}],i={title:`Patterns/Filter Bar`,tags:[`autodocs`]},a={render:()=>n`<ds-filter-bar columns="4"
      ><ds-select label="Account" .options=${r}></ds-select
      ><ds-select
        label="Category"
        .options=${[{label:`All categories`,value:``},{label:`Food`,value:`food`},{label:`Housing`,value:`housing`}]}
      ></ds-select
      ><ds-input type="date" label="From"></ds-input><ds-input type="date" label="To"></ds-input
      ><ds-search-input label="Search" placeholder="Counterparty or reference"></ds-search-input
      ><ds-button slot="actions" variant="secondary">Clear</ds-button
      ><ds-button slot="actions">Apply filters</ds-button></ds-filter-bar
    >`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-filter-bar columns="4"
      ><ds-select label="Account" .options=\${options}></ds-select
      ><ds-select
        label="Category"
        .options=\${[{
    label: 'All categories',
    value: ''
  }, {
    label: 'Food',
    value: 'food'
  }, {
    label: 'Housing',
    value: 'housing'
  }]}
      ></ds-select
      ><ds-input type="date" label="From"></ds-input><ds-input type="date" label="To"></ds-input
      ><ds-search-input label="Search" placeholder="Counterparty or reference"></ds-search-input
      ><ds-button slot="actions" variant="secondary">Clear</ds-button
      ><ds-button slot="actions">Apply filters</ds-button></ds-filter-bar
    >\`
}`,...a.parameters?.docs?.source}}},o=[`LedgerFilters`]})))()}s();export{a as LedgerFilters,o as __namedExportsOrder,i as default};