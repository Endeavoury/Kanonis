import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import '@endeavoury/kanonis';
import {
  DsAlert,
  DsAppShell,
  DsAvatar,
  DsBadge,
  DsButton,
  DsButtonGroup,
  DsBreadcrumb,
  DsBreadcrumbs,
  DsCard,
  DsCodeBlock,
  DsCheckbox,
  DsContainer,
  DsDataTable,
  DsDataGrid,
  DsDescriptionList,
  DsDetailSidebar,
  DsDialog,
  DsDisclosure,
  DsDropZone,
  DsDrawer,
  DsEmptyState,
  DsFilterBar,
  DsFilterBuilder,
  DsFormField,
  DsGrid,
  DsIcon,
  DsIconButton,
  DsInline,
  DsInspectorPane,
  DsInput,
  DsKpiGrid,
  DsLoadingState,
  DsList,
  DsListItem,
  DsMenu,
  DsMenuItem,
  DsMetric,
  DsPageHeader,
  DsColumnManager,
  DsBulkActions,
  DsSavedView,
  DsCombobox,
  DsValidationSummary,
  DsViewToolbar,
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
  DsWorkspace,
  DsWorkspaceHeader,
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
  DsPane,
  DsPaneContent,
  DsPaneGroup,
  DsPaneHeader,
  DsPaneStack,
  DsPaneWindow,
  DsPanel,
  DsPagination,
  DsRadio,
  DsRadioGroup,
  DsRange,
  DsSearchInput,
  DsSelect,
  DsSidebar,
  DsSidebarItem,
  DsScrollablePane,
  DsStack,
  DsStatusBadge,
  DsSwitch,
  DsTab,
  DsTabs,
  DsThemeToggle,
  DsTextarea,
  DsToast,
  DsToastRegion,
  DsTooltip,
  DsTree,
  DsTreeItem,
  DsProgress,
  DsSkeleton,
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
  type DsActivateDetail,
  type DsCheckedChangeDetail,
  type DsDisclosureChangeDetail,
  type DsDismissDetail,
  type DsFileRejectDetail,
  type DsFilesDetail,
  type DsListActivateDetail,
  type DsMenuSelectDetail,
  type DsMenuToggleDetail,
  type DsPageChangeDetail,
  type DsRowSelectDetail,
  type DsSortDetail,
  type DsTabChangeDetail,
  type DsThemeChangeDetail,
  type DsTreeActivateDetail,
  type DsToastCloseDetail,
  type DsValueChangeDetail,
} from '@endeavoury/kanonis';

const component = <ElementClass extends HTMLElement>(
  tagName: string,
  elementClass: { new (): ElementClass },
) => createComponent<ElementClass>({ tagName, elementClass, react: React });
export const Icon = component('kanonis-icon', DsIcon);
export const Button = component('kanonis-button', DsButton);
export const IconButton = component('kanonis-icon-button', DsIconButton);
export const ButtonGroup = component('kanonis-button-group', DsButtonGroup);
export const Input = createComponent({
  tagName: 'kanonis-input',
  elementClass: DsInput,
  react: React,
  events: {
    onDsInput: 'kanonis-input' as EventName<CustomEvent<DsValueChangeDetail>>,
    onDsChange: 'kanonis-change' as EventName<CustomEvent<DsValueChangeDetail>>,
  },
});
export const SearchInput = createComponent({
  tagName: 'kanonis-search-input',
  elementClass: DsSearchInput,
  react: React,
  events: {
    onDsInput: 'kanonis-input' as EventName<CustomEvent<DsValueChangeDetail>>,
    onDsChange: 'kanonis-change' as EventName<CustomEvent<DsValueChangeDetail>>,
  },
});
export const Select = createComponent({
  tagName: 'kanonis-select',
  elementClass: DsSelect,
  react: React,
  events: { onDsChange: 'kanonis-change' as EventName<CustomEvent<DsValueChangeDetail>> },
});
export const Checkbox = createComponent({
  tagName: 'kanonis-checkbox',
  elementClass: DsCheckbox,
  react: React,
  events: { onDsChange: 'kanonis-change' as EventName<CustomEvent<DsCheckedChangeDetail>> },
});
export const FormField = component('kanonis-form-field', DsFormField);
export const Textarea = createComponent({
  tagName: 'kanonis-textarea',
  elementClass: DsTextarea,
  react: React,
  events: {
    onDsInput: 'kanonis-input' as EventName<CustomEvent<DsValueChangeDetail>>,
    onDsChange: 'kanonis-change' as EventName<CustomEvent<DsValueChangeDetail>>,
  },
});
export const Switch = createComponent({
  tagName: 'kanonis-switch',
  elementClass: DsSwitch,
  react: React,
  events: { onDsChange: 'kanonis-change' as EventName<CustomEvent<DsCheckedChangeDetail>> },
});
export const Range = createComponent({
  tagName: 'kanonis-range',
  elementClass: DsRange,
  react: React,
  events: {
    onDsInput: 'kanonis-input' as EventName<CustomEvent<DsValueChangeDetail>>,
    onDsChange: 'kanonis-change' as EventName<CustomEvent<DsValueChangeDetail>>,
  },
});
export const RadioGroup = createComponent({
  tagName: 'kanonis-radio-group',
  elementClass: DsRadioGroup,
  react: React,
  events: { onDsChange: 'kanonis-change' as EventName<CustomEvent<DsValueChangeDetail>> },
});
export const Radio = component('kanonis-radio', DsRadio);
export const Badge = component('kanonis-badge', DsBadge);
export const StatusBadge = component('kanonis-status-badge', DsStatusBadge);
export const Avatar = component('kanonis-avatar', DsAvatar);
export const Card = component('kanonis-card', DsCard);
export const CodeBlock = component('kanonis-code-block', DsCodeBlock);
export const DescriptionList = component('kanonis-description-list', DsDescriptionList);
export const Panel = component('kanonis-panel', DsPanel);
export const Metric = component('kanonis-metric', DsMetric);
export const Alert = createComponent({
  tagName: 'kanonis-alert',
  elementClass: DsAlert,
  react: React,
  events: { onDsDismiss: 'kanonis-dismiss' as EventName<CustomEvent<void>> },
});
export const LoadingState = component('kanonis-loading-state', DsLoadingState);
export const EmptyState = component('kanonis-empty-state', DsEmptyState);
export const Progress = component('kanonis-progress', DsProgress);
export const Skeleton = component('kanonis-skeleton', DsSkeleton);
export const LiveRegion = component('kanonis-live-region', DsLiveRegion);
export const SegmentedControl = createComponent({
  tagName: 'kanonis-segmented-control',
  elementClass: DsSegmentedControl,
  react: React,
  events: { onDsChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>> },
});
export const Segment = component('kanonis-segment', DsSegment);
export const ActionBar = component('kanonis-action-bar', DsActionBar);
export const SplitButton = createComponent({
  tagName: 'kanonis-split-button',
  elementClass: DsSplitButton,
  react: React,
  events: {
    onDsActivate: 'kanonis-activate' as EventName<CustomEvent<void>>,
    onDsMenuToggle: 'kanonis-menu-toggle' as EventName<CustomEvent<{ open: boolean }>>,
  },
});
export const InputGroup = component('kanonis-input-group', DsInputGroup);
export const Chip = createComponent({
  tagName: 'kanonis-chip',
  elementClass: DsChip,
  react: React,
  events: {
    onDsChange: 'kanonis-change' as EventName<CustomEvent<{ value: string; selected: boolean }>>,
    onDsDismiss: 'kanonis-dismiss' as EventName<CustomEvent<{ value: string; reason: string }>>,
  },
});
export const Illustration = component('kanonis-illustration', DsIllustration);
export const BrandMark = component('kanonis-brand-mark', DsBrandMark);
export const ReorderList = createComponent({
  tagName: 'kanonis-reorder-list',
  elementClass: DsReorderList,
  react: React,
  events: {
    onDsReorder: 'kanonis-reorder' as EventName<
      CustomEvent<{ value: string; fromIndex: number; toIndex: number; values: string[] }>
    >,
  },
});
export const ReorderItem = component('kanonis-reorder-item', DsReorderItem);
export const Toast = createComponent({
  tagName: 'kanonis-toast',
  elementClass: DsToast,
  react: React,
  events: {
    onDsToastClose: 'kanonis-toast-close' as EventName<CustomEvent<DsToastCloseDetail>>,
  },
});
export const ToastRegion = component('kanonis-toast-region', DsToastRegion);
export const ThemeToggle = createComponent({
  tagName: 'kanonis-theme-toggle',
  elementClass: DsThemeToggle,
  react: React,
  events: {
    onDsThemeChange: 'kanonis-theme-change' as EventName<CustomEvent<DsThemeChangeDetail>>,
  },
});
export const Tabs = createComponent({
  tagName: 'kanonis-tabs',
  elementClass: DsTabs,
  react: React,
  events: { onDsTabChange: 'kanonis-tab-change' as EventName<CustomEvent<DsTabChangeDetail>> },
});
export const Tab = component('kanonis-tab', DsTab);
export const Disclosure = createComponent({
  tagName: 'kanonis-disclosure',
  elementClass: DsDisclosure,
  react: React,
  events: {
    onDsDisclosureChange: 'kanonis-disclosure-change' as EventName<
      CustomEvent<DsDisclosureChangeDetail>
    >,
  },
});
export const Dialog = createComponent({
  tagName: 'kanonis-dialog',
  elementClass: DsDialog,
  react: React,
  events: { onDsClose: 'kanonis-close' as EventName<CustomEvent<DsDismissDetail>> },
});
export const Drawer = createComponent({
  tagName: 'kanonis-drawer',
  elementClass: DsDrawer,
  react: React,
  events: { onDsClose: 'kanonis-close' as EventName<CustomEvent<DsDismissDetail>> },
});
export const Menu = createComponent({
  tagName: 'kanonis-menu',
  elementClass: DsMenu,
  react: React,
  events: {
    onDsMenuToggle: 'kanonis-menu-toggle' as EventName<CustomEvent<DsMenuToggleDetail>>,
  },
});
export const MenuItem = createComponent({
  tagName: 'kanonis-menu-item',
  elementClass: DsMenuItem,
  react: React,
  events: {
    onDsMenuSelect: 'kanonis-menu-select' as EventName<CustomEvent<DsMenuSelectDetail>>,
  },
});
export const Tooltip = component('kanonis-tooltip', DsTooltip);
export const DropZone = createComponent({
  tagName: 'kanonis-drop-zone',
  elementClass: DsDropZone,
  react: React,
  events: {
    onDsFiles: 'kanonis-files' as EventName<CustomEvent<DsFilesDetail>>,
    onDsFileReject: 'kanonis-file-reject' as EventName<CustomEvent<DsFileRejectDetail>>,
  },
});
export const DataTable = createComponent({
  tagName: 'kanonis-data-table',
  elementClass: DsDataTable,
  react: React,
  events: {
    onDsSort: 'kanonis-sort' as EventName<CustomEvent<DsSortDetail>>,
    onDsRowSelect: 'kanonis-row-select' as EventName<CustomEvent<DsRowSelectDetail>>,
  },
});
export const DataGrid = createComponent({
  tagName: 'kanonis-data-grid',
  elementClass: DsDataGrid,
  react: React,
  events: {
    onDsSort: 'kanonis-sort' as EventName<
      CustomEvent<{ key: string; direction: 'ascending' | 'descending' }>
    >,
    onDsRowSelect: 'kanonis-row-select' as EventName<CustomEvent<unknown>>,
  },
});
export const Stack = component('kanonis-stack', DsStack);
export const Inline = component('kanonis-inline', DsInline);
export const Grid = component('kanonis-grid', DsGrid);
export const Container = component('kanonis-container', DsContainer);
export const PageHeader = component('kanonis-page-header', DsPageHeader);
export const PaneGroup = component('kanonis-pane-group', DsPaneGroup);
export const Pane = component('kanonis-pane', DsPane);
export const ScrollablePane = component('kanonis-scrollable-pane', DsScrollablePane);
export const PaneHeader = component('kanonis-pane-header', DsPaneHeader);
export const PaneContent = component('kanonis-pane-content', DsPaneContent);
export const PaneStack = component('kanonis-pane-stack', DsPaneStack);
export const PaneWindow = component('kanonis-pane-window', DsPaneWindow);
export const Workspace = component('kanonis-workspace', DsWorkspace);
export const WorkspaceHeader = component('kanonis-workspace-header', DsWorkspaceHeader);
export const InspectorPane = component('kanonis-inspector-pane', DsInspectorPane);
export const DetailSidebar = createComponent({
  tagName: 'kanonis-detail-sidebar',
  elementClass: DsDetailSidebar,
  react: React,
  events: { onDsClose: 'kanonis-close' as EventName<CustomEvent<void>> },
});
export const AppShell = component('kanonis-app-shell', DsAppShell);
export const Sidebar = component('kanonis-sidebar', DsSidebar);
export const SidebarItem = createComponent({
  tagName: 'kanonis-sidebar-item',
  elementClass: DsSidebarItem,
  react: React,
  events: { onDsActivate: 'kanonis-activate' as EventName<CustomEvent<DsActivateDetail>> },
});
export const Breadcrumbs = component('kanonis-breadcrumbs', DsBreadcrumbs);
export const Breadcrumb = component('kanonis-breadcrumb', DsBreadcrumb);
export const Pagination = createComponent({
  tagName: 'kanonis-pagination',
  elementClass: DsPagination,
  react: React,
  events: {
    onDsPageChange: 'kanonis-page-change' as EventName<CustomEvent<DsPageChangeDetail>>,
  },
});
export const List = component('kanonis-list', DsList);
export const ListItem = createComponent({
  tagName: 'kanonis-list-item',
  elementClass: DsListItem,
  react: React,
  events: {
    onDsListActivate: 'kanonis-list-activate' as EventName<CustomEvent<DsListActivateDetail>>,
  },
});
export const FilterBar = component('kanonis-filter-bar', DsFilterBar);
export const FilterBuilder = createComponent({
  tagName: 'kanonis-filter-builder',
  elementClass: DsFilterBuilder,
  react: React,
  events: { onDsFilterChange: 'kanonis-filter-change' as EventName<CustomEvent<unknown>> },
});
export const ViewToolbar = createComponent({
  tagName: 'kanonis-view-toolbar',
  elementClass: DsViewToolbar,
  react: React,
  events: { onDsQueryChange: 'kanonis-query-change' as EventName<CustomEvent<{ query: string }>> },
});
export const ColumnManager = createComponent({
  tagName: 'kanonis-column-manager',
  elementClass: DsColumnManager,
  react: React,
  events: { onDsColumnsChange: 'kanonis-columns-change' as EventName<CustomEvent<unknown>> },
});
export const BulkActions = createComponent({
  tagName: 'kanonis-bulk-actions',
  elementClass: DsBulkActions,
  react: React,
  events: { onDsClearSelection: 'kanonis-clear-selection' as EventName<CustomEvent<void>> },
});
export const SavedView = createComponent({
  tagName: 'kanonis-saved-view',
  elementClass: DsSavedView,
  react: React,
  events: {
    onDsViewChange: 'kanonis-view-change' as EventName<CustomEvent<{ id: string }>>,
    onDsViewSave: 'kanonis-view-save' as EventName<CustomEvent<void>>,
    onDsViewDelete: 'kanonis-view-delete' as EventName<CustomEvent<{ id: string }>>,
  },
});
export const Combobox = createComponent({
  tagName: 'kanonis-combobox',
  elementClass: DsCombobox,
  react: React,
  events: {
    onDsComboboxInput: 'kanonis-combobox-input' as EventName<CustomEvent<{ value: string }>>,
    onDsChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>>,
  },
});
export const ValidationSummary = component('kanonis-validation-summary', DsValidationSummary);
export const CommandPalette = createComponent({
  tagName: 'kanonis-command-palette',
  elementClass: DsCommandPalette,
  react: React,
  events: { onDsCommandSelect: 'kanonis-command-select' as EventName<CustomEvent<{ id: string }>> },
});
export const GlobalSearch = createComponent({
  tagName: 'kanonis-global-search',
  elementClass: DsGlobalSearch,
  react: React,
  events: { onDsSearchSubmit: 'kanonis-search-submit' as EventName<CustomEvent<{ query: string }>> },
});
export const TenantSwitcher = createComponent({
  tagName: 'kanonis-tenant-switcher',
  elementClass: DsTenantSwitcher,
  react: React,
  events: { onDsTenantChange: 'kanonis-tenant-change' as EventName<CustomEvent<{ id: string }>> },
});
export const UserMenu = component('kanonis-user-menu', DsUserMenu);
export const WorkspaceTabs = createComponent({
  tagName: 'kanonis-workspace-tabs',
  elementClass: DsWorkspaceTabs,
  react: React,
  events: {
    onDsTabChange: 'kanonis-tab-change' as EventName<CustomEvent<{ id: string }>>,
    onDsTabClose: 'kanonis-tab-close' as EventName<CustomEvent<{ id: string }>>,
  },
});
export const NavigationGroup = component('kanonis-navigation-group', DsNavigationGroup);
export const ContextMenu = component('kanonis-context-menu', DsContextMenu);
export const QuickActions = component('kanonis-quick-actions', DsQuickActions);
export const RecordHeader = component('kanonis-record-header', DsRecordHeader);
export const DetailList = component('kanonis-detail-list', DsDetailList);
export const NotificationCenter = createComponent({
  tagName: 'kanonis-notification-center',
  elementClass: DsNotificationCenter,
  react: React,
  events: {
    onDsNotificationRead: 'kanonis-notification-read' as EventName<CustomEvent<{ id: string }>>,
  },
});
export const Banner = createComponent({
  tagName: 'kanonis-banner',
  elementClass: DsBanner,
  react: React,
  events: { onDsDismiss: 'kanonis-dismiss' as EventName<CustomEvent<void>> },
});
export const KpiGrid = component('kanonis-kpi-grid', DsKpiGrid);
export const FormSection = component('kanonis-form-section', DsFormSection);
export const FieldArray = createComponent({
  tagName: 'kanonis-field-array',
  elementClass: DsFieldArray,
  react: React,
  events: { onDsItemsChange: 'kanonis-items-change' as EventName<CustomEvent<unknown>> },
});
export const DatePicker = createComponent({
  tagName: 'kanonis-date-picker',
  elementClass: DsDatePicker,
  react: React,
  events: { onDsChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>> },
});
export const TimePicker = createComponent({
  tagName: 'kanonis-time-picker',
  elementClass: DsTimePicker,
  react: React,
  events: { onDsChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>> },
});
export const FileUpload = createComponent({
  tagName: 'kanonis-file-upload',
  elementClass: DsFileUpload,
  react: React,
  events: {
    onDsFiles: 'kanonis-files' as EventName<CustomEvent<unknown>>,
    onDsFileReject: 'kanonis-file-reject' as EventName<CustomEvent<unknown>>,
  },
});
export const Stepper = createComponent({
  tagName: 'kanonis-stepper',
  elementClass: DsStepper,
  react: React,
  events: { onDsStepChange: 'kanonis-step-change' as EventName<CustomEvent<{ id: string }>> },
});
export const ApprovalFlow = component('kanonis-approval-flow', DsApprovalFlow);
export const TaskList = createComponent({
  tagName: 'kanonis-task-list',
  elementClass: DsTaskList,
  react: React,
  events: { onDsTaskChange: 'kanonis-task-change' as EventName<CustomEvent<unknown>> },
});
export const Timeline = component('kanonis-timeline', DsTimeline);
export const ActivityFeed = component('kanonis-activity-feed', DsActivityFeed);
export const JobStatus = component('kanonis-job-status', DsJobStatus);
export const ChangeSummary = component('kanonis-change-summary', DsChangeSummary);
export const AuditLog = component('kanonis-audit-log', DsAuditLog);
export const PermissionMatrix = createComponent({
  tagName: 'kanonis-permission-matrix',
  elementClass: DsPermissionMatrix,
  react: React,
  events: { onDsPermissionChange: 'kanonis-permission-change' as EventName<CustomEvent<unknown>> },
});
export const RoleBadge = component('kanonis-role-badge', DsRoleBadge);
export const DiffViewer = component('kanonis-diff-viewer', DsDiffViewer);
export const CodeEditor = createComponent({
  tagName: 'kanonis-code-editor',
  elementClass: DsCodeEditor,
  react: React,
  events: { onDsInput: 'kanonis-input' as EventName<CustomEvent<{ value: string }>> },
});
export const JsonEditor = createComponent({
  tagName: 'kanonis-json-editor',
  elementClass: DsJsonEditor,
  react: React,
  events: { onDsInput: 'kanonis-input' as EventName<CustomEvent<{ value: string }>> },
});
export const MaintenanceNotice = component('kanonis-maintenance-notice', DsMaintenanceNotice);
export const HelpPanel = component('kanonis-help-panel', DsHelpPanel);
export const Tour = createComponent({
  tagName: 'kanonis-tour',
  elementClass: DsTour,
  react: React,
  events: { onDsTourChange: 'kanonis-tour-change' as EventName<CustomEvent<{ index: number }>> },
});
export const Coachmark = component('kanonis-coachmark', DsCoachmark);
export const CompareView = component('kanonis-compare-view', DsCompareView);
export const Tree = component('kanonis-tree', DsTree);
export const TreeItem = createComponent({
  tagName: 'kanonis-tree-item',
  elementClass: DsTreeItem,
  react: React,
  events: {
    onDsTreeActivate: 'kanonis-tree-activate' as EventName<CustomEvent<DsTreeActivateDetail>>,
  },
});
