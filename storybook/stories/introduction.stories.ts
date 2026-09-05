import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const installCode = `npm config set @endeavoury:registry https://npm.pkg.github.com
npm install @endeavoury/kanosis @endeavoury/kanosis-styles`;

const reactInstallCode = 'npm install @endeavoury/kanosis-react react';
const angularInstallCode = 'npm install @endeavoury/kanosis-angular @angular/core';

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
    html`<style>
        .intro {
          max-width: 980px;
          margin: auto;
          padding: clamp(32px, 6vw, 64px) 24px 80px;
        }
        .eyebrow {
          color: var(--ds-color-accent-primary);
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
        .intro h1 {
          max-width: 720px;
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          line-height: 1.05;
          margin: 12px 0 20px;
        }
        .lede,
        .section-copy {
          max-width: 720px;
          color: var(--ds-color-text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }
        .section {
          margin-top: 48px;
        }
        .section h2 {
          margin: 0 0 8px;
          font-size: 1.5rem;
        }
        .section h3 {
          margin: 0 0 6px;
          font-size: 1.1rem;
        }
        .code {
          overflow: auto;
          margin: 16px 0 12px;
          padding: 18px 20px;
          border: 1px solid var(--ds-color-border-subtle);
          border-radius: 12px;
          background: var(--ds-color-bg-surface);
          color: var(--ds-color-text-primary);
          font:
            0.875rem/1.6 ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;
          tab-size: 2;
        }
        .frameworks {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }
        .framework {
          min-width: 0;
          padding: 20px;
          border: 1px solid var(--ds-color-border-subtle);
          border-radius: 14px;
          background: var(--ds-color-bg-surface);
        }
        .framework .code {
          margin-bottom: 0;
          padding: 14px;
          font-size: 0.78rem;
        }
      </style>
      <main class="intro">
        <p class="eyebrow">Cross-framework Web Components</p>
        <h1>A restrained interface system for technical products.</h1>
        <p class="lede">
          Kanosis gives teams one accessible, token-driven UI language across Vanilla, React, and
          Angular. Components are implemented once as native Web Components and documented here with
          real, runnable examples.
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
        <section class="section" aria-labelledby="install-heading">
          <h2 id="install-heading">Install once, use everywhere</h2>
          <p class="section-copy">
            Install the core runtime and shared stylesheet in every consumer. GitHub Packages
            requires a token with <code>read:packages</code> and this scope mapping in your project
            or user <code>.npmrc</code>.
          </p>
          <pre class="code"><code>${installCode}</code></pre>
          <p class="section-copy">
            Add the framework adapter only when you want typed component props and events. The
            visual implementation remains the same native element in every framework.
          </p>
        </section>
        <section class="section" aria-labelledby="usage-heading">
          <h2 id="usage-heading">Choose your integration</h2>
          <p class="section-copy">
            Import the registration entry point before rendering a <code>ds-*</code> element. The
            global stylesheet installs tokens, themes, typography, and accessible defaults.
          </p>
          <div class="frameworks">
            <article class="framework">
              <h3>Vanilla</h3>
              <p class="section-copy">Use the custom elements directly in HTML or TypeScript.</p>
              <pre class="code"><code>${vanillaCode}</code></pre>
            </article>
            <article class="framework">
              <h3>React</h3>
              <p class="section-copy">
                Install the typed adapters and render them like React components.
              </p>
              <pre class="code"><code>${reactInstallCode}

${reactCode}</code></pre>
            </article>
            <article class="framework">
              <h3>Angular</h3>
              <p class="section-copy">
                Register once and opt into Angular's custom-element schema.
              </p>
              <pre class="code"><code>${angularInstallCode}

${angularCode}</code></pre>
            </article>
          </div>
        </section>
        <section class="section" aria-labelledby="principles-heading">
          <h2 id="principles-heading">How to work with Kanosis</h2>
          <p class="section-copy">
            Start with semantic components and compose them into layouts documented in the Patterns
            section. Prefer design tokens over one-off values, keep content in the light DOM, and
            use the component's documented attributes, properties, slots, and events as its public
            contract.
          </p>
          <p class="section-copy">
            Browse Foundation for tokens and accessibility preferences, Components for individual
            elements, and Patterns/Product for complete workflows such as dashboards, ledgers, and
            the Data Table.
          </p>
        </section>
      </main>`,
};
