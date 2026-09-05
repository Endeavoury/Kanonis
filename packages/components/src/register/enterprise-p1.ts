import { defineComponent } from '../core/ds-element.js';
import {
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
} from '../components/enterprise-p1.js';

defineComponent('kanonis-command-palette', DsCommandPalette);
defineComponent('kanonis-global-search', DsGlobalSearch);
defineComponent('kanonis-tenant-switcher', DsTenantSwitcher);
defineComponent('kanonis-user-menu', DsUserMenu);
defineComponent('kanonis-workspace-tabs', DsWorkspaceTabs);
defineComponent('kanonis-navigation-group', DsNavigationGroup);
defineComponent('kanonis-context-menu', DsContextMenu);
defineComponent('kanonis-quick-actions', DsQuickActions);
defineComponent('kanonis-record-header', DsRecordHeader);
defineComponent('kanonis-detail-list', DsDetailList);
defineComponent('kanonis-notification-center', DsNotificationCenter);
defineComponent('kanonis-banner', DsBanner);

export {
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
};
export type {
  DsCommand,
  DsDetailItem,
  DsNotification,
  DsTenant,
  DsWorkspaceTab,
} from '../components/enterprise-p1.js';
