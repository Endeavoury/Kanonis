import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CiWg_R4b.js";var r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r=[{id:`1`,date:`2026-08-23`,counterparty:`Spaghetteria`,category:`Food · Restaurants`,status:`Manual`,amount:-69,balance:12840.22},{id:`2`,date:`2026-08-22`,counterparty:`Albert Heijn`,category:`Food · Groceries`,status:`Automatic`,amount:-153,balance:12909.22},{id:`3`,date:`2026-08-19`,counterparty:`Travel Fund`,category:`Financial · Savings`,status:`Manual`,amount:250,balance:13062.22}],i=[{key:`date`,label:`Booking date`,sortable:!0,width:`130px`},{key:`counterparty`,label:`Description`,sortable:!0,rowHeader:!0},{key:`category`,label:`Category`},{key:`status`,label:`Source`},{key:`amount`,label:`Amount`,align:`end`,numeric:!0,sortable:!0,format:e=>new Intl.NumberFormat(`en-NL`,{style:`currency`,currency:`EUR`}).format(Number(e))},{key:`balance`,label:`Balance after`,align:`end`,numeric:!0,format:e=>new Intl.NumberFormat(`en-NL`,{style:`currency`,currency:`EUR`}).format(Number(e))}],a={title:`Components/Data/Data Table`,tags:[`autodocs`],argTypes:{density:{control:`select`,options:[`compact`,`comfortable`]},busy:{control:`boolean`},selectable:{control:`boolean`}}},o={args:{density:`comfortable`,busy:!1,selectable:!0},render:e=>n`<ds-data-table
      caption="Ledger entries"
      density=${e.density}
      ?busy=${e.busy}
      ?selectable=${e.selectable}
      .columns=${i}
      .rows=${r}
    ></ds-data-table>`},s={render:()=>n`<ds-data-table
      density="compact"
      .columns=${i}
      .rows=${[...r,...r.map((e,t)=>({...e,id:`copy-${t}`,date:`2026-08-${18-t}`}))]}
    ></ds-data-table>`},c={render:()=>n`<ds-stack
      ><ds-data-table
        emptyMessage="No ledger entries match these filters"
        .columns=${i}
        .rows=${[]}
      ></ds-data-table
      ><ds-data-table busy .columns=${i} .rows=${r}></ds-data-table
    ></ds-stack>`},l={render:()=>n`<div style="max-width:520px">
      <ds-data-table
        .columns=${i}
        .rows=${[{...r[0],counterparty:`A very long international counterparty name that should remain contained in the horizontally scrollable table`,category:`Shopping · Household Items and related supplies`}]}
      ></ds-data-table>
    </div>`},u={render:()=>n`<ds-data-table
      caption="Ledger entries"
      description="Review bookings and select a row to inspect its details."
      selectable
      page-size="2"
      .columns=${i}
      .rows=${r}
    ></ds-data-table>`},d={render:()=>n`<ds-data-table
      caption="Ledger entries"
      description="Links remain independently accessible within selectable rows."
      selectable
      .columns=${[...i,{key:`id`,label:`Actions`,format:(e,t)=>n`<a href=${`#entry-${t.id}`} aria-label=${`View ${t.counterparty} entry`}
            >View entry</a
          >`}]}
      .rows=${r}
    ></ds-data-table>`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'comfortable',
    busy: false,
    selectable: true
  },
  render: args => html\`<ds-data-table
      caption="Ledger entries"
      density=\${args['density']}
      ?busy=\${args['busy']}
      ?selectable=\${args['selectable']}
      .columns=\${columns}
      .rows=\${rows}
    ></ds-data-table>\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-data-table
      density="compact"
      .columns=\${columns}
      .rows=\${[...rows, ...rows.map((row, index) => ({
    ...row,
    id: \`copy-\${index}\`,
    date: \`2026-08-\${18 - index}\`
  }))]}
    ></ds-data-table>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-stack
      ><ds-data-table
        emptyMessage="No ledger entries match these filters"
        .columns=\${columns}
        .rows=\${[]}
      ></ds-data-table
      ><ds-data-table busy .columns=\${columns} .rows=\${rows}></ds-data-table
    ></ds-stack>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="max-width:520px">
      <ds-data-table
        .columns=\${columns}
        .rows=\${[{
    ...rows[0],
    counterparty: 'A very long international counterparty name that should remain contained in the horizontally scrollable table',
    category: 'Shopping · Household Items and related supplies'
  }]}
      ></ds-data-table>
    </div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-data-table
      caption="Ledger entries"
      description="Review bookings and select a row to inspect its details."
      selectable
      page-size="2"
      .columns=\${columns}
      .rows=\${rows}
    ></ds-data-table>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ds-data-table
      caption="Ledger entries"
      description="Links remain independently accessible within selectable rows."
      selectable
      .columns=\${[...columns, {
    key: 'id',
    label: 'Actions',
    format: (_value: unknown, row: Record<string, unknown>) => html\`<a href=\${\`#entry-\${row['id']}\`} aria-label=\${\`View \${row['counterparty']} entry\`}
            >View entry</a
          >\`
  }]}
      .rows=\${rows}
    ></ds-data-table>\`
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`CompactDenseData`,`EmptyAndLoading`,`LongContentAndOverflow`,`Pagination`,`InlineActions`]})))()}p();export{s as CompactDenseData,c as EmptyAndLoading,d as InlineActions,l as LongContentAndOverflow,u as Pagination,o as Playground,f as __namedExportsOrder,a as default};