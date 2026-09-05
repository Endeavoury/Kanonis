import { readFile } from 'node:fs/promises';

export const registry = 'https://npm.pkg.github.com';

export const releasePackages = [
  ['@endeavoury/kanonis-tokens', 'packages/tokens/package.json'],
  ['@endeavoury/kanonis-styles', 'packages/styles/package.json'],
  ['@endeavoury/kanonis', 'packages/components/package.json'],
  ['@endeavoury/kanonis-react', 'packages/react/package.json'],
  ['@endeavoury/kanonis-angular', 'packages/angular/package.json'],
];

export async function loadReleasePackages() {
  return Promise.all(
    releasePackages.map(async ([expectedName, manifestPath]) => {
      const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
      return { expectedName, manifestPath, manifest };
    }),
  );
}
