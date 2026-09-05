import { defineComponent } from '../core/ds-element.js';
import {
  DsAlert,
  DsEmptyState,
  DsLoadingState,
  DsProgress,
  DsSkeleton,
  DsToast,
  DsToastRegion,
} from '../components/feedback.js';
defineComponent('kanonis-alert', DsAlert);
defineComponent('kanonis-empty-state', DsEmptyState);
defineComponent('kanonis-loading-state', DsLoadingState);
defineComponent('kanonis-progress', DsProgress);
defineComponent('kanonis-skeleton', DsSkeleton);
defineComponent('kanonis-toast', DsToast);
defineComponent('kanonis-toast-region', DsToastRegion);
export { DsAlert, DsEmptyState, DsLoadingState, DsProgress, DsSkeleton, DsToast, DsToastRegion };
