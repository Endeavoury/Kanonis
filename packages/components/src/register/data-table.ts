import { defineComponent } from '../core/kanonis-element.js';
import { KanonisDataTable } from '../components/data-table.js';
defineComponent('kanonis-data-table', KanonisDataTable);
export { KanonisDataTable };
export type { KanonisTableColumn, KanonisSortDetail, KanonisRowSelectDetail } from '../components/data-table.js';
