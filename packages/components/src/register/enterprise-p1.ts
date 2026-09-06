import {
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
} from '../components/enterprise-p1/index.js';
import { defineComponent } from '../core/kanonis-element.js';


defineComponent('kanonis-command-palette', KanonisCommandPalette);
defineComponent('kanonis-global-search', KanonisGlobalSearch);
defineComponent('kanonis-tenant-switcher', KanonisTenantSwitcher);
defineComponent('kanonis-user-menu', KanonisUserMenu);
defineComponent('kanonis-workspace-tabs', KanonisWorkspaceTabs);
defineComponent('kanonis-navigation-group', KanonisNavigationGroup);
defineComponent('kanonis-context-menu', KanonisContextMenu);
defineComponent('kanonis-quick-actions', KanonisQuickActions);
defineComponent('kanonis-record-header', KanonisRecordHeader);
defineComponent('kanonis-detail-list', KanonisDetailList);
defineComponent('kanonis-notification-center', KanonisNotificationCenter);
defineComponent('kanonis-banner', KanonisBanner);

export type {
KanonisCommand,
KanonisDetailItem,
KanonisNotification,
KanonisTenant,
KanonisWorkspaceTab
} from '../components/enterprise-p1/index.js';
export {
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
KanonisWorkspaceTabs
};
