import { defineComponent } from '../core/kanonis-element.js';
import {
  KanonisBulkActions,
  KanonisColumnManager,
  KanonisCombobox,
  KanonisDataGrid,
  KanonisFilterBuilder,
  KanonisSavedView,
  KanonisValidationSummary,
  KanonisViewToolbar,
} from '../components/enterprise/enterprise.js';

defineComponent('kanonis-data-grid', KanonisDataGrid);
defineComponent('kanonis-filter-builder', KanonisFilterBuilder);
defineComponent('kanonis-view-toolbar', KanonisViewToolbar);
defineComponent('kanonis-column-manager', KanonisColumnManager);
defineComponent('kanonis-bulk-actions', KanonisBulkActions);
defineComponent('kanonis-saved-view', KanonisSavedView);
defineComponent('kanonis-combobox', KanonisCombobox);
defineComponent('kanonis-validation-summary', KanonisValidationSummary);

export {
  KanonisBulkActions,
  KanonisColumnManager,
  KanonisCombobox,
  KanonisDataGrid,
  KanonisFilterBuilder,
  KanonisSavedView,
  KanonisValidationSummary,
  KanonisViewToolbar,
};
export type {
  KanonisColumnOption,
  KanonisComboOption,
  KanonisFilterField,
  KanonisFilterRule,
  KanonisSavedViewOption,
  KanonisValidationError,
} from '../components/enterprise/enterprise.js';
