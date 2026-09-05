import { defineComponent } from '../core/ds-element.js';
import {
  DsBulkActions,
  DsColumnManager,
  DsCombobox,
  DsDataGrid,
  DsFilterBuilder,
  DsSavedView,
  DsValidationSummary,
  DsViewToolbar,
} from '../components/enterprise.js';

defineComponent('kanonis-data-grid', DsDataGrid);
defineComponent('kanonis-filter-builder', DsFilterBuilder);
defineComponent('kanonis-view-toolbar', DsViewToolbar);
defineComponent('kanonis-column-manager', DsColumnManager);
defineComponent('kanonis-bulk-actions', DsBulkActions);
defineComponent('kanonis-saved-view', DsSavedView);
defineComponent('kanonis-combobox', DsCombobox);
defineComponent('kanonis-validation-summary', DsValidationSummary);

export {
  DsBulkActions,
  DsColumnManager,
  DsCombobox,
  DsDataGrid,
  DsFilterBuilder,
  DsSavedView,
  DsValidationSummary,
  DsViewToolbar,
};
export type {
  DsColumnOption,
  DsComboOption,
  DsFilterField,
  DsFilterRule,
  DsSavedViewOption,
  DsValidationError,
} from '../components/enterprise.js';
