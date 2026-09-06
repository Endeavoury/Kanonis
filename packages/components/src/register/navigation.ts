import { KanonisIcon } from '../components/icon/index.js';
import {
  KanonisBreadcrumb,
  KanonisBreadcrumbs,
  KanonisList,
  KanonisListItem,
  KanonisPagination,
} from '../components/navigation-extras/index.js';
import {
  KanonisAppShell,
  KanonisSidebar,
  KanonisSidebarItem,
} from '../components/navigation/index.js';
import { defineComponent } from '../core/kanonis-element.js';

defineComponent('kanonis-icon', KanonisIcon);
defineComponent('kanonis-app-shell', KanonisAppShell);
defineComponent('kanonis-sidebar', KanonisSidebar);
defineComponent('kanonis-sidebar-item', KanonisSidebarItem);
defineComponent('kanonis-breadcrumbs', KanonisBreadcrumbs);
defineComponent('kanonis-breadcrumb', KanonisBreadcrumb);
defineComponent('kanonis-pagination', KanonisPagination);
defineComponent('kanonis-list', KanonisList);
defineComponent('kanonis-list-item', KanonisListItem);
export {
KanonisAppShell,
KanonisBreadcrumb,
KanonisBreadcrumbs,KanonisIcon,KanonisList,
KanonisListItem,
KanonisPagination,
KanonisSidebar,
KanonisSidebarItem
};
