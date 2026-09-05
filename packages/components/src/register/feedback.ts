import { defineComponent } from '../core/kanonis-element.js';
import {
  KanonisAlert,
  KanonisEmptyState,
  KanonisLoadingState,
  KanonisProgress,
  KanonisSkeleton,
  KanonisToast,
  KanonisToastRegion,
} from '../components/feedback.js';
defineComponent('kanonis-alert', KanonisAlert);
defineComponent('kanonis-empty-state', KanonisEmptyState);
defineComponent('kanonis-loading-state', KanonisLoadingState);
defineComponent('kanonis-progress', KanonisProgress);
defineComponent('kanonis-skeleton', KanonisSkeleton);
defineComponent('kanonis-toast', KanonisToast);
defineComponent('kanonis-toast-region', KanonisToastRegion);
export { KanonisAlert, KanonisEmptyState, KanonisLoadingState, KanonisProgress, KanonisSkeleton, KanonisToast, KanonisToastRegion };
