import { defineComponent } from '../core/ds-element.js';
import { DsIcon } from '../components/icon.js';
import { DsAppShell, DsSidebar, DsSidebarItem } from '../components/navigation.js';
import {
  DsBreadcrumb,
  DsBreadcrumbs,
  DsList,
  DsListItem,
  DsPagination,
} from '../components/navigation-extras.js';
defineComponent('kanonis-icon', DsIcon);
defineComponent('kanonis-app-shell', DsAppShell);
defineComponent('kanonis-sidebar', DsSidebar);
defineComponent('kanonis-sidebar-item', DsSidebarItem);
defineComponent('kanonis-breadcrumbs', DsBreadcrumbs);
defineComponent('kanonis-breadcrumb', DsBreadcrumb);
defineComponent('kanonis-pagination', DsPagination);
defineComponent('kanonis-list', DsList);
defineComponent('kanonis-list-item', DsListItem);
export {
  DsIcon,
  DsAppShell,
  DsBreadcrumb,
  DsBreadcrumbs,
  DsList,
  DsListItem,
  DsPagination,
  DsSidebar,
  DsSidebarItem,
};
