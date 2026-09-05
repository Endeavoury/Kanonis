import type { KanonisButton, KanonisButtonGroup, KanonisIconButton } from './components/button.js';
import type { KanonisIcon } from './components/icon.js';
import type {
  KanonisCheckbox,
  KanonisFormField,
  KanonisInput,
  KanonisSearchInput,
  KanonisSelect,
} from './components/forms.js';
import type {
  KanonisRadio,
  KanonisRadioGroup,
  KanonisRange,
  KanonisSwitch,
  KanonisTextarea,
} from './components/secondary-forms.js';
import type {
  KanonisAvatar,
  KanonisBadge,
  KanonisCard,
  KanonisCodeBlock,
  KanonisDescriptionList,
  KanonisMetric,
  KanonisPanel,
  KanonisStatusBadge,
} from './components/display.js';
import type {
  KanonisAlert,
  KanonisEmptyState,
  KanonisLoadingState,
  KanonisProgress,
  KanonisSkeleton,
  KanonisToast,
  KanonisToastRegion,
} from './components/feedback.js';
import type { KanonisDisclosure, KanonisTab, KanonisTabs, KanonisThemeToggle } from './components/interaction.js';
import type { KanonisDialog, KanonisDrawer, KanonisMenu, KanonisMenuItem, KanonisTooltip } from './components/overlays.js';
import type { KanonisDropZone } from './components/upload.js';
import type { KanonisDataTable } from './components/data-table.js';
import type {
  KanonisContainer,
  KanonisDetailSidebar,
  KanonisGrid,
  KanonisInline,
  KanonisInspectorPane,
  KanonisPane,
  KanonisPaneContent,
  KanonisPaneGroup,
  KanonisPaneStack,
  KanonisPaneHeader,
  KanonisPaneWindow,
  KanonisPageHeader,
  KanonisScrollablePane,
  KanonisStack,
  KanonisWorkspace,
  KanonisWorkspaceHeader,
} from './components/layout.js';
import type { KanonisAppShell, KanonisSidebar, KanonisSidebarItem } from './components/navigation.js';
import type {
  KanonisBulkActions,
  KanonisColumnManager,
  KanonisCombobox,
  KanonisDataGrid,
  KanonisFilterBuilder,
  KanonisSavedView,
  KanonisValidationSummary,
  KanonisViewToolbar,
} from './components/enterprise.js';
import type {
  KanonisBanner,
  KanonisCommandPalette,
  KanonisContextMenu,
  KanonisDetailList,
  KanonisGlobalSearch,
  KanonisNavigationGroup,
  KanonisNotificationCenter,
  KanonisQuickActions,
  KanonisRecordHeader,
  KanonisTenantSwitcher,
  KanonisUserMenu,
  KanonisWorkspaceTabs,
} from './components/enterprise-p1.js';
import type {
  KanonisActivityFeed,
  KanonisApprovalFlow,
  KanonisChangeSummary,
  KanonisDatePicker,
  KanonisFieldArray,
  KanonisFileUpload,
  KanonisFormSection,
  KanonisJobStatus,
  KanonisStepper,
  KanonisTaskList,
  KanonisTimePicker,
  KanonisTimeline,
} from './components/enterprise-p2.js';
import type {
  KanonisAuditLog,
  KanonisPermissionMatrix,
  KanonisRoleBadge,
  KanonisDiffViewer,
  KanonisCodeEditor,
  KanonisJsonEditor,
  KanonisMaintenanceNotice,
  KanonisHelpPanel,
  KanonisTour,
  KanonisCoachmark,
  KanonisCompareView,
} from './components/enterprise-p3.js';
import type {
  KanonisBreadcrumb,
  KanonisBreadcrumbs,
  KanonisList,
  KanonisListItem,
  KanonisPagination,
} from './components/navigation-extras.js';
import type { KanonisFilterBar, KanonisKpiGrid } from './components/patterns.js';
import type { KanonisTree, KanonisTreeItem } from './components/tree.js';
import type {
  KanonisActionBar,
  KanonisBrandMark,
  KanonisChip,
  KanonisIllustration,
  KanonisInputGroup,
  KanonisLiveRegion,
  KanonisReorderItem,
  KanonisReorderList,
  KanonisSegment,
  KanonisSegmentedControl,
  KanonisSplitButton,
} from './components/enhancements.js';

declare global {
  interface HTMLElementTagNameMap {
    'kanonis-icon': KanonisIcon;
    'kanonis-button': KanonisButton;
    'kanonis-icon-button': KanonisIconButton;
    'kanonis-button-group': KanonisButtonGroup;
    'kanonis-input': KanonisInput;
    'kanonis-search-input': KanonisSearchInput;
    'kanonis-select': KanonisSelect;
    'kanonis-checkbox': KanonisCheckbox;
    'kanonis-form-field': KanonisFormField;
    'kanonis-textarea': KanonisTextarea;
    'kanonis-switch': KanonisSwitch;
    'kanonis-range': KanonisRange;
    'kanonis-radio-group': KanonisRadioGroup;
    'kanonis-radio': KanonisRadio;
    'kanonis-badge': KanonisBadge;
    'kanonis-status-badge': KanonisStatusBadge;
    'kanonis-avatar': KanonisAvatar;
    'kanonis-card': KanonisCard;
    'kanonis-code-block': KanonisCodeBlock;
    'kanonis-description-list': KanonisDescriptionList;
    'kanonis-panel': KanonisPanel;
    'kanonis-metric': KanonisMetric;
    'kanonis-alert': KanonisAlert;
    'kanonis-loading-state': KanonisLoadingState;
    'kanonis-empty-state': KanonisEmptyState;
    'kanonis-progress': KanonisProgress;
    'kanonis-skeleton': KanonisSkeleton;
    'kanonis-toast': KanonisToast;
    'kanonis-toast-region': KanonisToastRegion;
    'kanonis-theme-toggle': KanonisThemeToggle;
    'kanonis-tabs': KanonisTabs;
    'kanonis-tab': KanonisTab;
    'kanonis-disclosure': KanonisDisclosure;
    'kanonis-dialog': KanonisDialog;
    'kanonis-drawer': KanonisDrawer;
    'kanonis-menu': KanonisMenu;
    'kanonis-menu-item': KanonisMenuItem;
    'kanonis-tooltip': KanonisTooltip;
    'kanonis-drop-zone': KanonisDropZone;
    'kanonis-data-table': KanonisDataTable;
    'kanonis-stack': KanonisStack;
    'kanonis-inline': KanonisInline;
    'kanonis-grid': KanonisGrid;
    'kanonis-container': KanonisContainer;
    'kanonis-page-header': KanonisPageHeader;
    'kanonis-detail-sidebar': KanonisDetailSidebar;
    'kanonis-pane-group': KanonisPaneGroup;
    'kanonis-pane': KanonisPane;
    'kanonis-scrollable-pane': KanonisScrollablePane;
    'kanonis-pane-header': KanonisPaneHeader;
    'kanonis-pane-content': KanonisPaneContent;
    'kanonis-workspace': KanonisWorkspace;
    'kanonis-workspace-header': KanonisWorkspaceHeader;
    'kanonis-pane-window': KanonisPaneWindow;
    'kanonis-pane-stack': KanonisPaneStack;
    'kanonis-inspector-pane': KanonisInspectorPane;
    'kanonis-app-shell': KanonisAppShell;
    'kanonis-sidebar': KanonisSidebar;
    'kanonis-sidebar-item': KanonisSidebarItem;
    'kanonis-breadcrumbs': KanonisBreadcrumbs;
    'kanonis-breadcrumb': KanonisBreadcrumb;
    'kanonis-pagination': KanonisPagination;
    'kanonis-list': KanonisList;
    'kanonis-list-item': KanonisListItem;
    'kanonis-filter-bar': KanonisFilterBar;
    'kanonis-kpi-grid': KanonisKpiGrid;
    'kanonis-tree': KanonisTree;
    'kanonis-tree-item': KanonisTreeItem;
    'kanonis-data-grid': KanonisDataGrid;
    'kanonis-filter-builder': KanonisFilterBuilder;
    'kanonis-view-toolbar': KanonisViewToolbar;
    'kanonis-column-manager': KanonisColumnManager;
    'kanonis-bulk-actions': KanonisBulkActions;
    'kanonis-saved-view': KanonisSavedView;
    'kanonis-combobox': KanonisCombobox;
    'kanonis-validation-summary': KanonisValidationSummary;
    'kanonis-command-palette': KanonisCommandPalette;
    'kanonis-global-search': KanonisGlobalSearch;
    'kanonis-tenant-switcher': KanonisTenantSwitcher;
    'kanonis-user-menu': KanonisUserMenu;
    'kanonis-workspace-tabs': KanonisWorkspaceTabs;
    'kanonis-navigation-group': KanonisNavigationGroup;
    'kanonis-context-menu': KanonisContextMenu;
    'kanonis-quick-actions': KanonisQuickActions;
    'kanonis-record-header': KanonisRecordHeader;
    'kanonis-detail-list': KanonisDetailList;
    'kanonis-notification-center': KanonisNotificationCenter;
    'kanonis-banner': KanonisBanner;
    'kanonis-form-section': KanonisFormSection;
    'kanonis-field-array': KanonisFieldArray;
    'kanonis-date-picker': KanonisDatePicker;
    'kanonis-time-picker': KanonisTimePicker;
    'kanonis-file-upload': KanonisFileUpload;
    'kanonis-stepper': KanonisStepper;
    'kanonis-approval-flow': KanonisApprovalFlow;
    'kanonis-task-list': KanonisTaskList;
    'kanonis-timeline': KanonisTimeline;
    'kanonis-activity-feed': KanonisActivityFeed;
    'kanonis-job-status': KanonisJobStatus;
    'kanonis-change-summary': KanonisChangeSummary;
    'kanonis-audit-log': KanonisAuditLog;
    'kanonis-permission-matrix': KanonisPermissionMatrix;
    'kanonis-role-badge': KanonisRoleBadge;
    'kanonis-diff-viewer': KanonisDiffViewer;
    'kanonis-code-editor': KanonisCodeEditor;
    'kanonis-json-editor': KanonisJsonEditor;
    'kanonis-maintenance-notice': KanonisMaintenanceNotice;
    'kanonis-help-panel': KanonisHelpPanel;
    'kanonis-tour': KanonisTour;
    'kanonis-coachmark': KanonisCoachmark;
    'kanonis-compare-view': KanonisCompareView;
    'kanonis-live-region': KanonisLiveRegion;
    'kanonis-segmented-control': KanonisSegmentedControl;
    'kanonis-segment': KanonisSegment;
    'kanonis-action-bar': KanonisActionBar;
    'kanonis-split-button': KanonisSplitButton;
    'kanonis-input-group': KanonisInputGroup;
    'kanonis-chip': KanonisChip;
    'kanonis-illustration': KanonisIllustration;
    'kanonis-brand-mark': KanonisBrandMark;
    'kanonis-reorder-list': KanonisReorderList;
    'kanonis-reorder-item': KanonisReorderItem;
  }
}

export {};
