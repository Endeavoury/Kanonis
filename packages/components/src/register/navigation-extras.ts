import { defineComponent } from '../core/ds-element.js';
import {
  DsBreadcrumb,
  DsBreadcrumbs,
  DsList,
  DsListItem,
  DsPagination,
} from '../components/navigation-extras.js';

defineComponent('kanonis-breadcrumbs', DsBreadcrumbs);
defineComponent('kanonis-breadcrumb', DsBreadcrumb);
defineComponent('kanonis-pagination', DsPagination);
defineComponent('kanonis-list', DsList);
defineComponent('kanonis-list-item', DsListItem);

export { DsBreadcrumb, DsBreadcrumbs, DsList, DsListItem, DsPagination };
