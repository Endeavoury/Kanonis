import { glob, readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const outputPath = 'docs/component-status.json';
const accessibilityTests = await readFile('tests/accessibility.test.ts', 'utf8');
const behaviorTests = await readFile('tests/components.test.ts', 'utf8');
const visualTests = await readFile('tests/visual-regression.spec.ts', 'utf8');
const storySources = [];
for await (const storyPath of glob('storybook/stories/**/*.stories.ts'))
  storySources.push({ path: storyPath, source: await readFile(storyPath, 'utf8') });
const entries = new Map();
const dedicatedGuides = new Map([
  ['kanonis-workspace', 'docs/patterns/desktop-pane-workspace.md'],
  ['kanonis-workspace-header', 'docs/patterns/desktop-pane-workspace.md'],
  ['kanonis-pane-window', 'docs/patterns/desktop-pane-workspace.md'],
  ['kanonis-pane-stack', 'docs/patterns/desktop-pane-workspace.md'],
  ['kanonis-data-table', 'docs/components/data-table.md'],
  ['kanonis-data-grid', 'docs/components/data-table.md'],
  ['kanonis-action-bar', 'docs/components/maturity-additions.md'],
  ['kanonis-brand-mark', 'docs/components/maturity-additions.md'],
  ['kanonis-chip', 'docs/components/maturity-additions.md'],
  ['kanonis-illustration', 'docs/components/maturity-additions.md'],
  ['kanonis-input-group', 'docs/components/maturity-additions.md'],
  ['kanonis-live-region', 'docs/components/maturity-additions.md'],
  ['kanonis-reorder-item', 'docs/components/maturity-additions.md'],
  ['kanonis-reorder-list', 'docs/components/maturity-additions.md'],
  ['kanonis-segment', 'docs/components/maturity-additions.md'],
  ['kanonis-segmented-control', 'docs/components/maturity-additions.md'],
  ['kanonis-split-button', 'docs/components/maturity-additions.md'],
]);
const visualMatrixTags = new Set([
  'kanonis-action-bar',
  'kanonis-button',
  'kanonis-chip',
  'kanonis-data-table',
  'kanonis-input',
  'kanonis-input-group',
  'kanonis-menu-item',
  'kanonis-segment',
  'kanonis-segmented-control',
  'kanonis-split-button',
]);

for await (const path of glob('packages/components/src/register/*.ts')) {
  const source = await readFile(path, 'utf8');
  const family = basename(path, '.ts');
  for (const match of source.matchAll(/defineComponent\('([^']+)'/g)) {
    const tag = match[1];
    const accessibilityReview = accessibilityTests.includes(`<${tag}`)
      ? 'automated-composition'
      : 'pending-component-matrix';
    const stories = storySources
      .filter((story) => story.source.includes(`<${tag}`))
      .map((story) => story.path)
      .sort();
    const behaviorReview = behaviorTests.includes(`'${tag}'`)
      ? 'automated'
      : 'pending-component-matrix';
    const visualReview =
      visualMatrixTags.has(tag) && visualTests.includes('toHaveScreenshot')
        ? 'automated-preference-matrix'
        : 'pending-component-matrix';
    const guide = dedicatedGuides.get(tag) ?? null;
    const readiness = {
      productUseCase:
        family.startsWith('enterprise') || family === 'enhancements'
          ? 'validation-required'
          : 'shared-catalog',
      documentation: guide ? 'complete-template' : 'catalog-and-story-only',
      behavior: behaviorReview,
      accessibility: accessibilityReview,
      visualPreferences: visualReview,
    };
    const ready = Object.values(readiness).every((value) =>
      [
        'shared-catalog',
        'complete-template',
        'automated',
        'automated-composition',
        'automated-preference-matrix',
      ].includes(value),
    );
    entries.set(tag, {
      tag,
      family,
      status: ready ? 'ready' : 'experimental',
      owner: 'Kanonis design system',
      adoption: {
        state: readiness.productUseCase,
        evidence: stories,
      },
      accessibilityReview,
      behaviorReview,
      visualReview,
      documentation: {
        catalog: 'docs/component-catalog.md',
        guide,
        stories,
      },
      stateCoverage: {
        default: stories.length ? 'storybook' : 'missing',
        interaction: behaviorReview,
        semantics: accessibilityReview,
        preferences: visualReview,
      },
      readiness,
      stability: ready ? 'Semver protected' : 'Breaking changes allowed before beta',
    });
  }
}

const components = [...entries.values()].sort((left, right) => left.tag.localeCompare(right.tag));
const generated = `${JSON.stringify(
  {
    schemaVersion: 1,
    statuses: ['experimental', 'ready', 'deprecated'],
    generatedFrom: 'packages/components/src/register/*.ts',
    components,
  },
  null,
  2,
)}\n`;

if (process.argv.includes('--check')) {
  const current = await readFile(outputPath, 'utf8').catch(() => '');
  if (current !== generated)
    throw new Error('Component status manifest is stale. Run npm run components:manifest.');
  console.log(`Component status manifest covers ${components.length} registered elements.`);
} else {
  await writeFile(outputPath, generated);
  console.log(`Generated status metadata for ${components.length} registered elements.`);
}
