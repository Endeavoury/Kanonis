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
} from '../enterprise-p1/index.js';


import '../command-palette/register.js';
import '../global-search/register.js';
import '../tenant-switcher/register.js';
import '../user-menu/register.js';
import '../workspace-tabs/register.js';
import '../navigation-group/register.js';
import '../context-menu/register.js';
import '../quick-actions/register.js';
import '../record-header/register.js';
import '../detail-list/register.js';
import '../notification-center/register.js';
import '../banner/register.js';

export type {
KanonisCommand,
KanonisDetailItem,
KanonisNotification,
KanonisTenant,
KanonisWorkspaceTab
} from '../enterprise-p1/index.js';
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
