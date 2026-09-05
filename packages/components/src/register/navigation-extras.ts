import { defineComponent } from '../core/kanonis-element.js';
import {
  KanonisBreadcrumb,
  KanonisBreadcrumbs,
  KanonisList,
  KanonisListItem,
  KanonisPagination,
} from '../components/navigation-extras/navigation-extras.js';

defineComponent('kanonis-breadcrumbs', KanonisBreadcrumbs);
defineComponent('kanonis-breadcrumb', KanonisBreadcrumb);
defineComponent('kanonis-pagination', KanonisPagination);
defineComponent('kanonis-list', KanonisList);
defineComponent('kanonis-list-item', KanonisListItem);

export { KanonisBreadcrumb, KanonisBreadcrumbs, KanonisList, KanonisListItem, KanonisPagination };
