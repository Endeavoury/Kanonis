import {
  KanonisActionBar,
  KanonisBrandMark,
  KanonisChip,
  KanonisIllustration,
  KanonisInputGroup,
  KanonisLiveRegion,
  KanonisReorderItem,
  KanonisReorderList,
  KanonisSegment,
  KanonisSegmentedControl,
  KanonisSplitButton,
} from '../components/enhancements/index.js';
import { defineComponent } from '../core/kanonis-element.js';


defineComponent('kanonis-live-region', KanonisLiveRegion);
defineComponent('kanonis-segmented-control', KanonisSegmentedControl);
defineComponent('kanonis-segment', KanonisSegment);
defineComponent('kanonis-action-bar', KanonisActionBar);
defineComponent('kanonis-split-button', KanonisSplitButton);
defineComponent('kanonis-input-group', KanonisInputGroup);
defineComponent('kanonis-chip', KanonisChip);
defineComponent('kanonis-illustration', KanonisIllustration);
defineComponent('kanonis-brand-mark', KanonisBrandMark);
defineComponent('kanonis-reorder-list', KanonisReorderList);
defineComponent('kanonis-reorder-item', KanonisReorderItem);

export type {
KanonisDismissValueDetail,
KanonisReorderDetail,
KanonisValueDetail
} from '../components/enhancements/index.js';
export {
KanonisActionBar,
KanonisBrandMark,
KanonisChip,
KanonisIllustration,
KanonisInputGroup,
KanonisLiveRegion,
KanonisReorderItem,
KanonisReorderList,
KanonisSegment,
KanonisSegmentedControl,
KanonisSplitButton
};
