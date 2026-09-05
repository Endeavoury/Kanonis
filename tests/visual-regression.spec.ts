import { expect, test } from '@playwright/test';

const cases = [
  {
    name: 'actions-light-compact',
    story: 'components-maturity-additions--action-composition',
    width: 390,
    height: 844,
    globals: 'theme:light;contrast:standard;brand:default;direction:ltr',
  },
  {
    name: 'actions-dark-expanded',
    story: 'components-maturity-additions--action-composition',
    width: 900,
    height: 800,
    globals: 'theme:dark;contrast:standard;brand:default;direction:ltr',
  },
  {
    name: 'actions-high-contrast',
    story: 'components-maturity-additions--action-composition',
    width: 768,
    height: 900,
    globals: 'theme:light;contrast:more;brand:default;direction:ltr',
    forcedColors: true,
  },
  {
    name: 'actions-rtl',
    story: 'components-maturity-additions--action-composition',
    width: 768,
    height: 900,
    globals: 'theme:light;contrast:standard;brand:ontology;direction:rtl',
  },
  {
    name: 'list-detail-finance-wide',
    story: 'patterns-adaptive-layouts--list-detail',
    width: 1100,
    height: 800,
    globals: 'theme:light;contrast:standard;brand:finance;direction:ltr',
  },
  {
    name: 'supporting-pane-dark',
    story: 'patterns-adaptive-layouts--supporting-pane',
    width: 900,
    height: 800,
    globals: 'theme:dark;contrast:more;brand:ontology;direction:ltr',
    textSpacing: true,
  },
  {
    name: 'data-table-zoom-reflow',
    story: 'components-data-table--long-content-and-overflow',
    width: 390,
    height: 844,
    globals: 'theme:light;contrast:more;brand:finance;direction:ltr',
    zoom: 2,
  },
] as const;

for (const entry of cases) {
  test(entry.name, async ({ page }) => {
    await page.setViewportSize({ width: entry.width, height: entry.height });
    if ('forcedColors' in entry && entry.forcedColors)
      await page.emulateMedia({ forcedColors: 'active' });
    await page.goto(
      `/iframe.html?id=${entry.story}&viewMode=story&globals=${encodeURIComponent(entry.globals)}`,
    );
    await page.locator('#storybook-root [data-kanonis-theme]').waitFor();
    await page.evaluate(() => document.fonts.ready);
    if ('zoom' in entry && entry.zoom)
      await page.locator('#storybook-root').evaluate((element, zoom) => {
        (element as HTMLElement).style.zoom = String(zoom);
      }, entry.zoom);
    if ('textSpacing' in entry && entry.textSpacing)
      await page.addStyleTag({
        content:
          '*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-block-end:2em!important}',
      });
    await expect(page.locator('#storybook-root')).toHaveScreenshot(`${entry.name}.png`);
  });
}

for (const width of [390, 1100]) {
  test(`sidebar keyboard collapse and restore at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/iframe.html?id=composites-navigation--collapsible-sidebar&viewMode=story');
    const toggle = page.locator('kanonis-app-shell .sidebar-toggle');
    await expect(toggle).toBeVisible();
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
    await page.screenshot({ path: testInfo.outputPath('sidebar-expanded.png') });
    const sidebar = await page.locator('kanonis-sidebar').boundingBox();
    const content = await page.locator('kanonis-app-shell .workspace').boundingBox();
    if (width > 768) {
      expect(sidebar!.width).toBeCloseTo(244, 0);
      expect(content!.width).toBeGreaterThan(width / 2);
      expect(content!.x).toBeGreaterThanOrEqual(sidebar!.x + sidebar!.width);
    } else {
      expect(sidebar!.height).toBeLessThan(120);
      expect(content!.width).toBeGreaterThan(width - 2);
    }

    await page.keyboard.press('Space');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toHaveCount(0);
    await expect(toggle).toBeFocused();
    const workspace = await page.locator('kanonis-app-shell .workspace').boundingBox();
    expect(workspace!.width).toBeGreaterThan(width - 2);
  });
}

for (const [story, width] of [
  ['composites-layout--desktop-workspace', 1920],
  ['composites-layout--desktop-workspace-stacks', 1440],
  ['composites-layout--desktop-workspace-four-pane-grid', 3440],
] as const) {
  test(`desktop pane workspace fits at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`/iframe.html?id=${story}&viewMode=story`);
    const workspace = page.locator('kanonis-workspace');
    const window = page.locator('kanonis-pane-window');
    await expect(workspace).toBeVisible();
    await expect(window).toBeVisible();
    const viewport = await page.evaluate(() => ({ width: innerWidth, height: innerHeight }));
    const bounds = await window.boundingBox();
    expect(bounds!.y).toBeGreaterThan(0);
    expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(viewport.height);
    expect(await window.evaluate((element) => element.scrollWidth >= element.clientWidth)).toBe(
      true,
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      viewport.width,
    );
  });
}
