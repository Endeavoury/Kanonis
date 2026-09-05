import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import '@endeavoury/kanonis';
import {
  KanonisAlert,
  KanonisAppShell,
  KanonisAvatar,
  KanonisBadge,
  KanonisButton,
  KanonisButtonGroup,
  KanonisBreadcrumb,
  KanonisBreadcrumbs,
  KanonisCard,
  KanonisCodeBlock,
  KanonisCheckbox,
  KanonisContainer,
  KanonisDataTable,
  KanonisDataGrid,
  KanonisDescriptionList,
  KanonisDetailSidebar,
  KanonisDialog,
  KanonisDisclosure,
  KanonisDropZone,
  KanonisDrawer,
  KanonisEmptyState,
  KanonisFilterBar,
  KanonisFilterBuilder,
  KanonisFormField,
  KanonisGrid,
  KanonisIcon,
  KanonisIconButton,
  KanonisInline,
  KanonisInspectorPane,
  KanonisInput,
  KanonisKpiGrid,
  KanonisLoadingState,
  KanonisList,
  KanonisListItem,
  KanonisMenu,
  KanonisMenuItem,
  KanonisMetric,
  KanonisPageHeader,
  KanonisColumnManager,
  KanonisBulkActions,
  KanonisSavedView,
  KanonisCombobox,
  KanonisValidationSummary,
  KanonisViewToolbar,
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
  KanonisWorkspace,
  KanonisWorkspaceHeader,
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
  KanonisPane,
  KanonisPaneContent,
  KanonisPaneGroup,
  KanonisPaneHeader,
  KanonisPaneStack,
  KanonisPaneWindow,
  KanonisPanel,
  KanonisPagination,
  KanonisRadio,
  KanonisRadioGroup,
  KanonisRange,
  KanonisSearchInput,
  KanonisSelect,
  KanonisSidebar,
  KanonisSidebarItem,
  KanonisScrollablePane,
  KanonisStack,
  KanonisStatusBadge,
  KanonisSwitch,
  KanonisTab,
  KanonisTabs,
  KanonisThemeToggle,
  KanonisTextarea,
  KanonisToast,
  KanonisToastRegion,
  KanonisTooltip,
  KanonisTree,
  KanonisTreeItem,
  KanonisProgress,
  KanonisSkeleton,
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
  type KanonisActivateDetail,
  type KanonisCheckedChangeDetail,
  type KanonisDisclosureChangeDetail,
  type KanonisDismissDetail,
  type KanonisFileRejectDetail,
  type KanonisFilesDetail,
  type KanonisListActivateDetail,
  type KanonisMenuSelectDetail,
  type KanonisMenuToggleDetail,
  type KanonisPageChangeDetail,
  type KanonisRowSelectDetail,
  type KanonisSortDetail,
  type KanonisTabChangeDetail,
  type KanonisThemeChangeDetail,
  type KanonisTreeActivateDetail,
  type KanonisToastCloseDetail,
  type KanonisValueChangeDetail,
} from '@endeavoury/kanonis';

const component = <ElementClass extends HTMLElement>(
  tagName: string,
  elementClass: { new (): ElementClass },
) => createComponent<ElementClass>({ tagName, elementClass, react: React });
export const Icon = component('kanonis-icon', KanonisIcon);
export const Button = component('kanonis-button', KanonisButton);
export const IconButton = component('kanonis-icon-button', KanonisIconButton);
export const ButtonGroup = component('kanonis-button-group', KanonisButtonGroup);
export const Input = createComponent({
  tagName: 'kanonis-input',
  elementClass: KanonisInput,
  react: React,
  events: {
    onKanonisInput: 'kanonis-input' as EventName<CustomEvent<KanonisValueChangeDetail>>,
    onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisValueChangeDetail>>,
  },
});
export const SearchInput = createComponent({
  tagName: 'kanonis-search-input',
  elementClass: KanonisSearchInput,
  react: React,
  events: {
    onKanonisInput: 'kanonis-input' as EventName<CustomEvent<KanonisValueChangeDetail>>,
    onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisValueChangeDetail>>,
  },
});
export const Select = createComponent({
  tagName: 'kanonis-select',
  elementClass: KanonisSelect,
  react: React,
  events: { onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisValueChangeDetail>> },
});
export const Checkbox = createComponent({
  tagName: 'kanonis-checkbox',
  elementClass: KanonisCheckbox,
  react: React,
  events: { onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisCheckedChangeDetail>> },
});
export const FormField = component('kanonis-form-field', KanonisFormField);
export const Textarea = createComponent({
  tagName: 'kanonis-textarea',
  elementClass: KanonisTextarea,
  react: React,
  events: {
    onKanonisInput: 'kanonis-input' as EventName<CustomEvent<KanonisValueChangeDetail>>,
    onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisValueChangeDetail>>,
  },
});
export const Switch = createComponent({
  tagName: 'kanonis-switch',
  elementClass: KanonisSwitch,
  react: React,
  events: { onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisCheckedChangeDetail>> },
});
export const Range = createComponent({
  tagName: 'kanonis-range',
  elementClass: KanonisRange,
  react: React,
  events: {
    onKanonisInput: 'kanonis-input' as EventName<CustomEvent<KanonisValueChangeDetail>>,
    onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisValueChangeDetail>>,
  },
});
export const RadioGroup = createComponent({
  tagName: 'kanonis-radio-group',
  elementClass: KanonisRadioGroup,
  react: React,
  events: { onKanonisChange: 'kanonis-change' as EventName<CustomEvent<KanonisValueChangeDetail>> },
});
export const Radio = component('kanonis-radio', KanonisRadio);
export const Badge = component('kanonis-badge', KanonisBadge);
export const StatusBadge = component('kanonis-status-badge', KanonisStatusBadge);
export const Avatar = component('kanonis-avatar', KanonisAvatar);
export const Card = component('kanonis-card', KanonisCard);
export const CodeBlock = component('kanonis-code-block', KanonisCodeBlock);
export const DescriptionList = component('kanonis-description-list', KanonisDescriptionList);
export const Panel = component('kanonis-panel', KanonisPanel);
export const Metric = component('kanonis-metric', KanonisMetric);
export const Alert = createComponent({
  tagName: 'kanonis-alert',
  elementClass: KanonisAlert,
  react: React,
  events: { onKanonisDismiss: 'kanonis-dismiss' as EventName<CustomEvent<void>> },
});
export const LoadingState = component('kanonis-loading-state', KanonisLoadingState);
export const EmptyState = component('kanonis-empty-state', KanonisEmptyState);
export const Progress = component('kanonis-progress', KanonisProgress);
export const Skeleton = component('kanonis-skeleton', KanonisSkeleton);
export const LiveRegion = component('kanonis-live-region', KanonisLiveRegion);
export const SegmentedControl = createComponent({
  tagName: 'kanonis-segmented-control',
  elementClass: KanonisSegmentedControl,
  react: React,
  events: { onKanonisChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>> },
});
export const Segment = component('kanonis-segment', KanonisSegment);
export const ActionBar = component('kanonis-action-bar', KanonisActionBar);
export const SplitButton = createComponent({
  tagName: 'kanonis-split-button',
  elementClass: KanonisSplitButton,
  react: React,
  events: {
    onKanonisActivate: 'kanonis-activate' as EventName<CustomEvent<void>>,
    onKanonisMenuToggle: 'kanonis-menu-toggle' as EventName<CustomEvent<{ open: boolean }>>,
  },
});
export const InputGroup = component('kanonis-input-group', KanonisInputGroup);
export const Chip = createComponent({
  tagName: 'kanonis-chip',
  elementClass: KanonisChip,
  react: React,
  events: {
    onKanonisChange: 'kanonis-change' as EventName<CustomEvent<{ value: string; selected: boolean }>>,
    onKanonisDismiss: 'kanonis-dismiss' as EventName<CustomEvent<{ value: string; reason: string }>>,
  },
});
export const Illustration = component('kanonis-illustration', KanonisIllustration);
export const BrandMark = component('kanonis-brand-mark', KanonisBrandMark);
export const ReorderList = createComponent({
  tagName: 'kanonis-reorder-list',
  elementClass: KanonisReorderList,
  react: React,
  events: {
    onKanonisReorder: 'kanonis-reorder' as EventName<
      CustomEvent<{ value: string; fromIndex: number; toIndex: number; values: string[] }>
    >,
  },
});
export const ReorderItem = component('kanonis-reorder-item', KanonisReorderItem);
export const Toast = createComponent({
  tagName: 'kanonis-toast',
  elementClass: KanonisToast,
  react: React,
  events: {
    onKanonisToastClose: 'kanonis-toast-close' as EventName<CustomEvent<KanonisToastCloseDetail>>,
  },
});
export const ToastRegion = component('kanonis-toast-region', KanonisToastRegion);
export const ThemeToggle = createComponent({
  tagName: 'kanonis-theme-toggle',
  elementClass: KanonisThemeToggle,
  react: React,
  events: {
    onKanonisThemeChange: 'kanonis-theme-change' as EventName<CustomEvent<KanonisThemeChangeDetail>>,
  },
});
export const Tabs = createComponent({
  tagName: 'kanonis-tabs',
  elementClass: KanonisTabs,
  react: React,
  events: { onKanonisTabChange: 'kanonis-tab-change' as EventName<CustomEvent<KanonisTabChangeDetail>> },
});
export const Tab = component('kanonis-tab', KanonisTab);
export const Disclosure = createComponent({
  tagName: 'kanonis-disclosure',
  elementClass: KanonisDisclosure,
  react: React,
  events: {
    onKanonisDisclosureChange: 'kanonis-disclosure-change' as EventName<
      CustomEvent<KanonisDisclosureChangeDetail>
    >,
  },
});
export const Dialog = createComponent({
  tagName: 'kanonis-dialog',
  elementClass: KanonisDialog,
  react: React,
  events: { onKanonisClose: 'kanonis-close' as EventName<CustomEvent<KanonisDismissDetail>> },
});
export const Drawer = createComponent({
  tagName: 'kanonis-drawer',
  elementClass: KanonisDrawer,
  react: React,
  events: { onKanonisClose: 'kanonis-close' as EventName<CustomEvent<KanonisDismissDetail>> },
});
export const Menu = createComponent({
  tagName: 'kanonis-menu',
  elementClass: KanonisMenu,
  react: React,
  events: {
    onKanonisMenuToggle: 'kanonis-menu-toggle' as EventName<CustomEvent<KanonisMenuToggleDetail>>,
  },
});
export const MenuItem = createComponent({
  tagName: 'kanonis-menu-item',
  elementClass: KanonisMenuItem,
  react: React,
  events: {
    onKanonisMenuSelect: 'kanonis-menu-select' as EventName<CustomEvent<KanonisMenuSelectDetail>>,
  },
});
export const Tooltip = component('kanonis-tooltip', KanonisTooltip);
export const DropZone = createComponent({
  tagName: 'kanonis-drop-zone',
  elementClass: KanonisDropZone,
  react: React,
  events: {
    onKanonisFiles: 'kanonis-files' as EventName<CustomEvent<KanonisFilesDetail>>,
    onKanonisFileReject: 'kanonis-file-reject' as EventName<CustomEvent<KanonisFileRejectDetail>>,
  },
});
export const DataTable = createComponent({
  tagName: 'kanonis-data-table',
  elementClass: KanonisDataTable,
  react: React,
  events: {
    onKanonisSort: 'kanonis-sort' as EventName<CustomEvent<KanonisSortDetail>>,
    onKanonisRowSelect: 'kanonis-row-select' as EventName<CustomEvent<KanonisRowSelectDetail>>,
  },
});
export const DataGrid = createComponent({
  tagName: 'kanonis-data-grid',
  elementClass: KanonisDataGrid,
  react: React,
  events: {
    onKanonisSort: 'kanonis-sort' as EventName<
      CustomEvent<{ key: string; direction: 'ascending' | 'descending' }>
    >,
    onKanonisRowSelect: 'kanonis-row-select' as EventName<CustomEvent<unknown>>,
  },
});
export const Stack = component('kanonis-stack', KanonisStack);
export const Inline = component('kanonis-inline', KanonisInline);
export const Grid = component('kanonis-grid', KanonisGrid);
export const Container = component('kanonis-container', KanonisContainer);
export const PageHeader = component('kanonis-page-header', KanonisPageHeader);
export const PaneGroup = component('kanonis-pane-group', KanonisPaneGroup);
export const Pane = component('kanonis-pane', KanonisPane);
export const ScrollablePane = component('kanonis-scrollable-pane', KanonisScrollablePane);
export const PaneHeader = component('kanonis-pane-header', KanonisPaneHeader);
export const PaneContent = component('kanonis-pane-content', KanonisPaneContent);
export const PaneStack = component('kanonis-pane-stack', KanonisPaneStack);
export const PaneWindow = component('kanonis-pane-window', KanonisPaneWindow);
export const Workspace = component('kanonis-workspace', KanonisWorkspace);
export const WorkspaceHeader = component('kanonis-workspace-header', KanonisWorkspaceHeader);
export const InspectorPane = component('kanonis-inspector-pane', KanonisInspectorPane);
export const DetailSidebar = createComponent({
  tagName: 'kanonis-detail-sidebar',
  elementClass: KanonisDetailSidebar,
  react: React,
  events: { onKanonisClose: 'kanonis-close' as EventName<CustomEvent<void>> },
});
export const AppShell = component('kanonis-app-shell', KanonisAppShell);
export const Sidebar = component('kanonis-sidebar', KanonisSidebar);
export const SidebarItem = createComponent({
  tagName: 'kanonis-sidebar-item',
  elementClass: KanonisSidebarItem,
  react: React,
  events: { onKanonisActivate: 'kanonis-activate' as EventName<CustomEvent<KanonisActivateDetail>> },
});
export const Breadcrumbs = component('kanonis-breadcrumbs', KanonisBreadcrumbs);
export const Breadcrumb = component('kanonis-breadcrumb', KanonisBreadcrumb);
export const Pagination = createComponent({
  tagName: 'kanonis-pagination',
  elementClass: KanonisPagination,
  react: React,
  events: {
    onKanonisPageChange: 'kanonis-page-change' as EventName<CustomEvent<KanonisPageChangeDetail>>,
  },
});
export const List = component('kanonis-list', KanonisList);
export const ListItem = createComponent({
  tagName: 'kanonis-list-item',
  elementClass: KanonisListItem,
  react: React,
  events: {
    onKanonisListActivate: 'kanonis-list-activate' as EventName<CustomEvent<KanonisListActivateDetail>>,
  },
});
export const FilterBar = component('kanonis-filter-bar', KanonisFilterBar);
export const FilterBuilder = createComponent({
  tagName: 'kanonis-filter-builder',
  elementClass: KanonisFilterBuilder,
  react: React,
  events: { onKanonisFilterChange: 'kanonis-filter-change' as EventName<CustomEvent<unknown>> },
});
export const ViewToolbar = createComponent({
  tagName: 'kanonis-view-toolbar',
  elementClass: KanonisViewToolbar,
  react: React,
  events: { onKanonisQueryChange: 'kanonis-query-change' as EventName<CustomEvent<{ query: string }>> },
});
export const ColumnManager = createComponent({
  tagName: 'kanonis-column-manager',
  elementClass: KanonisColumnManager,
  react: React,
  events: { onKanonisColumnsChange: 'kanonis-columns-change' as EventName<CustomEvent<unknown>> },
});
export const BulkActions = createComponent({
  tagName: 'kanonis-bulk-actions',
  elementClass: KanonisBulkActions,
  react: React,
  events: { onKanonisClearSelection: 'kanonis-clear-selection' as EventName<CustomEvent<void>> },
});
export const SavedView = createComponent({
  tagName: 'kanonis-saved-view',
  elementClass: KanonisSavedView,
  react: React,
  events: {
    onKanonisViewChange: 'kanonis-view-change' as EventName<CustomEvent<{ id: string }>>,
    onKanonisViewSave: 'kanonis-view-save' as EventName<CustomEvent<void>>,
    onKanonisViewDelete: 'kanonis-view-delete' as EventName<CustomEvent<{ id: string }>>,
  },
});
export const Combobox = createComponent({
  tagName: 'kanonis-combobox',
  elementClass: KanonisCombobox,
  react: React,
  events: {
    onKanonisComboboxInput: 'kanonis-combobox-input' as EventName<CustomEvent<{ value: string }>>,
    onKanonisChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>>,
  },
});
export const ValidationSummary = component('kanonis-validation-summary', KanonisValidationSummary);
export const CommandPalette = createComponent({
  tagName: 'kanonis-command-palette',
  elementClass: KanonisCommandPalette,
  react: React,
  events: { onKanonisCommandSelect: 'kanonis-command-select' as EventName<CustomEvent<{ id: string }>> },
});
export const GlobalSearch = createComponent({
  tagName: 'kanonis-global-search',
  elementClass: KanonisGlobalSearch,
  react: React,
  events: { onKanonisSearchSubmit: 'kanonis-search-submit' as EventName<CustomEvent<{ query: string }>> },
});
export const TenantSwitcher = createComponent({
  tagName: 'kanonis-tenant-switcher',
  elementClass: KanonisTenantSwitcher,
  react: React,
  events: { onKanonisTenantChange: 'kanonis-tenant-change' as EventName<CustomEvent<{ id: string }>> },
});
export const UserMenu = component('kanonis-user-menu', KanonisUserMenu);
export const WorkspaceTabs = createComponent({
  tagName: 'kanonis-workspace-tabs',
  elementClass: KanonisWorkspaceTabs,
  react: React,
  events: {
    onKanonisTabChange: 'kanonis-tab-change' as EventName<CustomEvent<{ id: string }>>,
    onKanonisTabClose: 'kanonis-tab-close' as EventName<CustomEvent<{ id: string }>>,
  },
});
export const NavigationGroup = component('kanonis-navigation-group', KanonisNavigationGroup);
export const ContextMenu = component('kanonis-context-menu', KanonisContextMenu);
export const QuickActions = component('kanonis-quick-actions', KanonisQuickActions);
export const RecordHeader = component('kanonis-record-header', KanonisRecordHeader);
export const DetailList = component('kanonis-detail-list', KanonisDetailList);
export const NotificationCenter = createComponent({
  tagName: 'kanonis-notification-center',
  elementClass: KanonisNotificationCenter,
  react: React,
  events: {
    onKanonisNotificationRead: 'kanonis-notification-read' as EventName<CustomEvent<{ id: string }>>,
  },
});
export const Banner = createComponent({
  tagName: 'kanonis-banner',
  elementClass: KanonisBanner,
  react: React,
  events: { onKanonisDismiss: 'kanonis-dismiss' as EventName<CustomEvent<void>> },
});
export const KpiGrid = component('kanonis-kpi-grid', KanonisKpiGrid);
export const FormSection = component('kanonis-form-section', KanonisFormSection);
export const FieldArray = createComponent({
  tagName: 'kanonis-field-array',
  elementClass: KanonisFieldArray,
  react: React,
  events: { onKanonisItemsChange: 'kanonis-items-change' as EventName<CustomEvent<unknown>> },
});
export const DatePicker = createComponent({
  tagName: 'kanonis-date-picker',
  elementClass: KanonisDatePicker,
  react: React,
  events: { onKanonisChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>> },
});
export const TimePicker = createComponent({
  tagName: 'kanonis-time-picker',
  elementClass: KanonisTimePicker,
  react: React,
  events: { onKanonisChange: 'kanonis-change' as EventName<CustomEvent<{ value: string }>> },
});
export const FileUpload = createComponent({
  tagName: 'kanonis-file-upload',
  elementClass: KanonisFileUpload,
  react: React,
  events: {
    onKanonisFiles: 'kanonis-files' as EventName<CustomEvent<unknown>>,
    onKanonisFileReject: 'kanonis-file-reject' as EventName<CustomEvent<unknown>>,
  },
});
export const Stepper = createComponent({
  tagName: 'kanonis-stepper',
  elementClass: KanonisStepper,
  react: React,
  events: { onKanonisStepChange: 'kanonis-step-change' as EventName<CustomEvent<{ id: string }>> },
});
export const ApprovalFlow = component('kanonis-approval-flow', KanonisApprovalFlow);
export const TaskList = createComponent({
  tagName: 'kanonis-task-list',
  elementClass: KanonisTaskList,
  react: React,
  events: { onKanonisTaskChange: 'kanonis-task-change' as EventName<CustomEvent<unknown>> },
});
export const Timeline = component('kanonis-timeline', KanonisTimeline);
export const ActivityFeed = component('kanonis-activity-feed', KanonisActivityFeed);
export const JobStatus = component('kanonis-job-status', KanonisJobStatus);
export const ChangeSummary = component('kanonis-change-summary', KanonisChangeSummary);
export const AuditLog = component('kanonis-audit-log', KanonisAuditLog);
export const PermissionMatrix = createComponent({
  tagName: 'kanonis-permission-matrix',
  elementClass: KanonisPermissionMatrix,
  react: React,
  events: { onKanonisPermissionChange: 'kanonis-permission-change' as EventName<CustomEvent<unknown>> },
});
export const RoleBadge = component('kanonis-role-badge', KanonisRoleBadge);
export const DiffViewer = component('kanonis-diff-viewer', KanonisDiffViewer);
export const CodeEditor = createComponent({
  tagName: 'kanonis-code-editor',
  elementClass: KanonisCodeEditor,
  react: React,
  events: { onKanonisInput: 'kanonis-input' as EventName<CustomEvent<{ value: string }>> },
});
export const JsonEditor = createComponent({
  tagName: 'kanonis-json-editor',
  elementClass: KanonisJsonEditor,
  react: React,
  events: { onKanonisInput: 'kanonis-input' as EventName<CustomEvent<{ value: string }>> },
});
export const MaintenanceNotice = component('kanonis-maintenance-notice', KanonisMaintenanceNotice);
export const HelpPanel = component('kanonis-help-panel', KanonisHelpPanel);
export const Tour = createComponent({
  tagName: 'kanonis-tour',
  elementClass: KanonisTour,
  react: React,
  events: { onKanonisTourChange: 'kanonis-tour-change' as EventName<CustomEvent<{ index: number }>> },
});
export const Coachmark = component('kanonis-coachmark', KanonisCoachmark);
export const CompareView = component('kanonis-compare-view', KanonisCompareView);
export const Tree = component('kanonis-tree', KanonisTree);
export const TreeItem = createComponent({
  tagName: 'kanonis-tree-item',
  elementClass: KanonisTreeItem,
  react: React,
  events: {
    onKanonisTreeActivate: 'kanonis-tree-activate' as EventName<CustomEvent<KanonisTreeActivateDetail>>,
  },
});
