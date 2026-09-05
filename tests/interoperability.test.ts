import { describe, expect, it, vi } from 'vitest';
import type { KanonisDataTable } from '@endeavoury/kanonis/classes';

describe('framework-neutral custom element contract', () => {
  it('supports attributes, properties, slots, events, and inherited themes', async () => {
    document.documentElement.dataset.kanonisTheme = 'dark';
    const button = document.createElement('kanonis-button');
    button.setAttribute('variant', 'primary');
    const icon = document.createElement('kanonis-icon');
    icon.slot = 'prefix';
    icon.setAttribute('name', 'plus');
    button.append(icon, 'Add account');
    document.body.append(button);
    await button.updateComplete;
    expect(button.variant).toBe('primary');
    expect(button.querySelector('[slot=prefix]')).toBe(icon);
    expect(document.documentElement.dataset.kanonisTheme).toBe('dark');

    const table = document.createElement('kanonis-data-table') as KanonisDataTable;
    table.columns = [{ key: 'name', label: 'Name' }];
    table.rows = [{ id: '1', name: 'Current' }];
    table.selectable = true;
    const event = vi.fn();
    table.addEventListener('kanonis-row-select', event);
    document.body.append(table);
    await table.updateComplete;
    table.shadowRoot!.querySelector<HTMLTableRowElement>('tbody tr')!.click();
    expect(event).toHaveBeenCalledOnce();
    expect(event.mock.calls[0][0].composed).toBe(true);
  });
});
