import type { DsButton, DsButtonGroup, DsIconButton } from './components/button.js';
import type { DsIcon } from './components/icon.js';
import type {
  DsCheckbox,
  DsFormField,
  DsInput,
  DsSearchInput,
  DsSelect,
} from './components/forms.js';
import type {
  DsRadio,
  DsRadioGroup,
  DsRange,
  DsSwitch,
  DsTextarea,
} from './components/secondary-forms.js';
import type {
  DsAvatar,
  DsBadge,
  DsCard,
  DsCodeBlock,
  DsDescriptionList,
  DsMetric,
  DsPanel,
  DsStatusBadge,
} from './components/display.js';
import type {
  DsAlert,
  DsEmptyState,
  DsLoadingState,
  DsProgress,
  DsSkeleton,
  DsToast,
  DsToastRegion,
} from './components/feedback.js';
import type { DsDisclosure, DsTab, DsTabs, DsThemeToggle } from './components/interaction.js';
import type { DsDialog, DsDrawer, DsMenu, DsMenuItem, DsTooltip } from './components/overlays.js';
import type { DsDropZone } from './components/upload.js';
import type { DsDataTable } from './components/data-table.js';
import type {
  DsContainer,
  DsDetailSidebar,
  DsGrid,
  DsInline,
  DsInspectorPane,
  DsPane,
  DsPaneContent,
  DsPaneGroup,
  DsPaneStack,
  DsPaneHeader,
  DsPaneWindow,
  DsPageHeader,
  DsScrollablePane,
  DsStack,
  DsWorkspace,
  DsWorkspaceHeader,
} from './components/layout.js';
import type { DsAppShell, DsSidebar, DsSidebarItem } from './components/navigation.js';
import type {
  DsBulkActions,
  DsColumnManager,
  DsCombobox,
  DsDataGrid,
  DsFilterBuilder,
  DsSavedView,
  DsValidationSummary,
  DsViewToolbar,
} from './components/enterprise.js';
import type {
  DsBanner,
  DsCommandPalette,
  DsContextMenu,
  DsDetailList,
  DsGlobalSearch,
  DsNavigationGroup,
  DsNotificationCenter,
  DsQuickActions,
  DsRecordHeader,
  DsTenantSwitcher,
  DsUserMenu,
  DsWorkspaceTabs,
} from './components/enterprise-p1.js';
import type {
  DsActivityFeed,
  DsApprovalFlow,
  DsChangeSummary,
  DsDatePicker,
  DsFieldArray,
  DsFileUpload,
  DsFormSection,
  DsJobStatus,
  DsStepper,
  DsTaskList,
  DsTimePicker,
  DsTimeline,
} from './components/enterprise-p2.js';
import type {
  DsAuditLog,
  DsPermissionMatrix,
  DsRoleBadge,
  DsDiffViewer,
  DsCodeEditor,
  DsJsonEditor,
  DsMaintenanceNotice,
  DsHelpPanel,
  DsTour,
  DsCoachmark,
  DsCompareView,
} from './components/enterprise-p3.js';
import type {
  DsBreadcrumb,
  DsBreadcrumbs,
  DsList,
  DsListItem,
  DsPagination,
} from './components/navigation-extras.js';
import type { DsFilterBar, DsKpiGrid } from './components/patterns.js';
import type { DsTree, DsTreeItem } from './components/tree.js';
import type {
  DsActionBar,
  DsBrandMark,
  DsChip,
  DsIllustration,
  DsInputGroup,
  DsLiveRegion,
  DsReorderItem,
  DsReorderList,
  DsSegment,
  DsSegmentedControl,
  DsSplitButton,
} from './components/enhancements.js';

declare global {
  interface HTMLElementTagNameMap {
    'kanonis-icon': DsIcon;
    'kanonis-button': DsButton;
    'kanonis-icon-button': DsIconButton;
    'kanonis-button-group': DsButtonGroup;
    'kanonis-input': DsInput;
    'kanonis-search-input': DsSearchInput;
    'kanonis-select': DsSelect;
    'kanonis-checkbox': DsCheckbox;
    'kanonis-form-field': DsFormField;
    'kanonis-textarea': DsTextarea;
    'kanonis-switch': DsSwitch;
    'kanonis-range': DsRange;
    'kanonis-radio-group': DsRadioGroup;
    'kanonis-radio': DsRadio;
    'kanonis-badge': DsBadge;
    'kanonis-status-badge': DsStatusBadge;
    'kanonis-avatar': DsAvatar;
    'kanonis-card': DsCard;
    'kanonis-code-block': DsCodeBlock;
    'kanonis-description-list': DsDescriptionList;
    'kanonis-panel': DsPanel;
    'kanonis-metric': DsMetric;
    'kanonis-alert': DsAlert;
    'kanonis-loading-state': DsLoadingState;
    'kanonis-empty-state': DsEmptyState;
    'kanonis-progress': DsProgress;
    'kanonis-skeleton': DsSkeleton;
    'kanonis-toast': DsToast;
    'kanonis-toast-region': DsToastRegion;
    'kanonis-theme-toggle': DsThemeToggle;
    'kanonis-tabs': DsTabs;
    'kanonis-tab': DsTab;
    'kanonis-disclosure': DsDisclosure;
    'kanonis-dialog': DsDialog;
    'kanonis-drawer': DsDrawer;
    'kanonis-menu': DsMenu;
    'kanonis-menu-item': DsMenuItem;
    'kanonis-tooltip': DsTooltip;
    'kanonis-drop-zone': DsDropZone;
    'kanonis-data-table': DsDataTable;
    'kanonis-stack': DsStack;
    'kanonis-inline': DsInline;
    'kanonis-grid': DsGrid;
    'kanonis-container': DsContainer;
    'kanonis-page-header': DsPageHeader;
    'kanonis-detail-sidebar': DsDetailSidebar;
    'kanonis-pane-group': DsPaneGroup;
    'kanonis-pane': DsPane;
    'kanonis-scrollable-pane': DsScrollablePane;
    'kanonis-pane-header': DsPaneHeader;
    'kanonis-pane-content': DsPaneContent;
    'kanonis-workspace': DsWorkspace;
    'kanonis-workspace-header': DsWorkspaceHeader;
    'kanonis-pane-window': DsPaneWindow;
    'kanonis-pane-stack': DsPaneStack;
    'kanonis-inspector-pane': DsInspectorPane;
    'kanonis-app-shell': DsAppShell;
    'kanonis-sidebar': DsSidebar;
    'kanonis-sidebar-item': DsSidebarItem;
    'kanonis-breadcrumbs': DsBreadcrumbs;
    'kanonis-breadcrumb': DsBreadcrumb;
    'kanonis-pagination': DsPagination;
    'kanonis-list': DsList;
    'kanonis-list-item': DsListItem;
    'kanonis-filter-bar': DsFilterBar;
    'kanonis-kpi-grid': DsKpiGrid;
    'kanonis-tree': DsTree;
    'kanonis-tree-item': DsTreeItem;
    'kanonis-data-grid': DsDataGrid;
    'kanonis-filter-builder': DsFilterBuilder;
    'kanonis-view-toolbar': DsViewToolbar;
    'kanonis-column-manager': DsColumnManager;
    'kanonis-bulk-actions': DsBulkActions;
    'kanonis-saved-view': DsSavedView;
    'kanonis-combobox': DsCombobox;
    'kanonis-validation-summary': DsValidationSummary;
    'kanonis-command-palette': DsCommandPalette;
    'kanonis-global-search': DsGlobalSearch;
    'kanonis-tenant-switcher': DsTenantSwitcher;
    'kanonis-user-menu': DsUserMenu;
    'kanonis-workspace-tabs': DsWorkspaceTabs;
    'kanonis-navigation-group': DsNavigationGroup;
    'kanonis-context-menu': DsContextMenu;
    'kanonis-quick-actions': DsQuickActions;
    'kanonis-record-header': DsRecordHeader;
    'kanonis-detail-list': DsDetailList;
    'kanonis-notification-center': DsNotificationCenter;
    'kanonis-banner': DsBanner;
    'kanonis-form-section': DsFormSection;
    'kanonis-field-array': DsFieldArray;
    'kanonis-date-picker': DsDatePicker;
    'kanonis-time-picker': DsTimePicker;
    'kanonis-file-upload': DsFileUpload;
    'kanonis-stepper': DsStepper;
    'kanonis-approval-flow': DsApprovalFlow;
    'kanonis-task-list': DsTaskList;
    'kanonis-timeline': DsTimeline;
    'kanonis-activity-feed': DsActivityFeed;
    'kanonis-job-status': DsJobStatus;
    'kanonis-change-summary': DsChangeSummary;
    'kanonis-audit-log': DsAuditLog;
    'kanonis-permission-matrix': DsPermissionMatrix;
    'kanonis-role-badge': DsRoleBadge;
    'kanonis-diff-viewer': DsDiffViewer;
    'kanonis-code-editor': DsCodeEditor;
    'kanonis-json-editor': DsJsonEditor;
    'kanonis-maintenance-notice': DsMaintenanceNotice;
    'kanonis-help-panel': DsHelpPanel;
    'kanonis-tour': DsTour;
    'kanonis-coachmark': DsCoachmark;
    'kanonis-compare-view': DsCompareView;
    'kanonis-live-region': DsLiveRegion;
    'kanonis-segmented-control': DsSegmentedControl;
    'kanonis-segment': DsSegment;
    'kanonis-action-bar': DsActionBar;
    'kanonis-split-button': DsSplitButton;
    'kanonis-input-group': DsInputGroup;
    'kanonis-chip': DsChip;
    'kanonis-illustration': DsIllustration;
    'kanonis-brand-mark': DsBrandMark;
    'kanonis-reorder-list': DsReorderList;
    'kanonis-reorder-item': DsReorderItem;
  }
}

export {};
