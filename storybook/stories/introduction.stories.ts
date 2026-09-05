import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const installCode = `npm config set @endeavoury:registry https://npm.pkg.github.com
npm install @endeavoury/kanosis @endeavoury/kanosis-styles`;

const vanillaCode = `import '@endeavoury/kanosis';
import '@endeavoury/kanosis/styles.css';

document.querySelector('#app')!.innerHTML =
  '<ds-button tone="accent">Save changes</ds-button>';`;

const reactCode = `import { DsButton } from '@endeavoury/kanosis-react';
import '@endeavoury/kanosis/styles.css';

export function SaveButton() {
  return <DsButton tone="accent">Save changes</DsButton>;
}`;

const angularCode = `import { Component } from '@angular/core';
import { DESIGN_SYSTEM_SCHEMAS, registerDesignSystem } from '@endeavoury/kanosis-angular';

registerDesignSystem();

@Component({
  selector: 'app-save',
  standalone: true,
  schemas: [...DESIGN_SYSTEM_SCHEMAS],
  template: '<ds-button tone="accent">Save changes</ds-button>',
})
export class SaveComponent {}`;

const meta: Meta = {
  title: 'Introduction/Kanosis',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
export const Welcome: StoryObj = {
  render: () =>
    html`<div style="max-width:980px;margin:auto;padding:48px 24px">
      <p
        style="color:var(--ds-color-accent-primary);font-weight:650;letter-spacing:.12em;text-transform:uppercase"
      >
        Cross-framework Web Components
      </p>
      <h1 style="max-width:720px;font-size:clamp(32px,5vw,58px);line-height:1.05;margin:12px 0">
        A restrained interface system for technical products.
      </h1>
      <p style="max-width:700px;color:var(--ds-color-text-secondary);font-size:16px">
        One Lit implementation, centralized semantic tokens, shared Shadow DOM foundations, and
        native contracts for Vanilla, React, and Angular.
      </p>
      <div style="margin-top:32px">
        <ds-kpi-grid columns="3"
          ><ds-metric
            label="Source of truth"
            value="Web Components"
            tone="accent"
            detail="Standards-native"
          ></ds-metric
          ><ds-metric
            label="Themes"
            value="Light · Dark"
            tone="success"
            detail="System aware"
          ></ds-metric
          ><ds-metric
            label="Initial release"
            value="P0"
            tone="warning"
            detail="Current workflows"
          ></ds-metric
        ></ds-kpi-grid>
      </div>
      <div style="margin-top:24px">
        <ds-alert heading="Independent by design"
          >This Storybook uses mock data and has no runtime dependency on the Finance Inzicht
          application or APIs.</ds-alert
        >
      </div>
      <section style="margin-top:48px">
        <h2>Install the packages</h2>
        <p style="max-width:700px;color:var(--ds-color-text-secondary)">
          Kanosis is distributed as native Web Components. Install the core package and shared
          styles, then add the small adapter package for your framework when you want typed props
          and events.
        </p>
        <pre
          style="overflow:auto;padding:20px;border:1px solid var(--ds-color-border-subtle);border-radius:12px;background:var(--ds-color-bg-surface)"
        ><code>${installCode}</code></pre>
        <p style="color:var(--ds-color-text-secondary)">
          GitHub Packages requires a token with <code>read:packages</code> and the scope mapping
          above in your project or user <code>.npmrc</code>.
        </p>
      </section>
      <section style="margin-top:40px;display:grid;gap:24px">
        <div>
          <h2>Vanilla</h2>
          <p style="color:var(--ds-color-text-secondary)">
            Import the registration entry point and use the custom elements directly.
          </p>
          <pre
            style="overflow:auto;padding:20px;border:1px solid var(--ds-color-border-subtle);border-radius:12px;background:var(--ds-color-bg-surface)"
          ><code>${vanillaCode}</code></pre>
        </div>
        <div>
          <h2>React</h2>
          <p style="color:var(--ds-color-text-secondary)">
            Use the typed adapters from <code>@endeavoury/kanosis-react</code>.
          </p>
          <pre
            style="overflow:auto;padding:20px;border:1px solid var(--ds-color-border-subtle);border-radius:12px;background:var(--ds-color-bg-surface)"
          ><code>${reactCode}</code></pre>
        </div>
        <div>
          <h2>Angular</h2>
          <p style="color:var(--ds-color-text-secondary)">
            Register the elements once and opt into Angular's custom-element schema.
          </p>
          <pre
            style="overflow:auto;padding:20px;border:1px solid var(--ds-color-border-subtle);border-radius:12px;background:var(--ds-color-bg-surface)"
          ><code>${angularCode}</code></pre>
        </div>
      </section>
    </div>`,
};
