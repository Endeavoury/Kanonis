import { defineComponent } from '../core/ds-element.js';
import {
  DsActionBar,
  DsBrandMark,
  DsChip,
  DsIllustration,
  DsInputGroup,
  DsLiveRegion,
  DsReorderItem,
  DsReorderList,
  DsSegment,
  DsSegmentedControl,
  DsSplitButton,
} from '../components/enhancements.js';

defineComponent('kanonis-live-region', DsLiveRegion);
defineComponent('kanonis-segmented-control', DsSegmentedControl);
defineComponent('kanonis-segment', DsSegment);
defineComponent('kanonis-action-bar', DsActionBar);
defineComponent('kanonis-split-button', DsSplitButton);
defineComponent('kanonis-input-group', DsInputGroup);
defineComponent('kanonis-chip', DsChip);
defineComponent('kanonis-illustration', DsIllustration);
defineComponent('kanonis-brand-mark', DsBrandMark);
defineComponent('kanonis-reorder-list', DsReorderList);
defineComponent('kanonis-reorder-item', DsReorderItem);

export {
  DsActionBar,
  DsBrandMark,
  DsChip,
  DsIllustration,
  DsInputGroup,
  DsLiveRegion,
  DsReorderItem,
  DsReorderList,
  DsSegment,
  DsSegmentedControl,
  DsSplitButton,
};
export type {
  DsDismissValueDetail,
  DsReorderDetail,
  DsValueDetail,
} from '../components/enhancements.js';
