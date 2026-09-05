import { defineComponent } from '../core/ds-element.js';
import { DsDataTable } from '../components/data-table.js';
defineComponent('kanonis-data-table', DsDataTable);
export { DsDataTable };
export type { DsTableColumn, DsSortDetail, DsRowSelectDetail } from '../components/data-table.js';
