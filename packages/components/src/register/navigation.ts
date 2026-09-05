import { defineComponent } from '../core/kanonis-element.js';
import { KanonisIcon } from '../components/icon/icon.js';
import { KanonisAppShell, KanonisSidebar, KanonisSidebarItem } from '../components/navigation/navigation.js';
import {
  KanonisBreadcrumb,
  KanonisBreadcrumbs,
  KanonisList,
  KanonisListItem,
  KanonisPagination,
} from '../components/navigation-extras/navigation-extras.js';
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
  KanonisIcon,
  KanonisAppShell,
  KanonisBreadcrumb,
  KanonisBreadcrumbs,
  KanonisList,
  KanonisListItem,
  KanonisPagination,
  KanonisSidebar,
  KanonisSidebarItem,
};
