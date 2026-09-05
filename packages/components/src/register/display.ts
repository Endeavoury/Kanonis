import { defineComponent } from '../core/ds-element.js';
import {
  DsAvatar,
  DsBadge,
  DsCard,
  DsCodeBlock,
  DsDescriptionList,
  DsMetric,
  DsPanel,
  DsStatusBadge,
} from '../components/display.js';
defineComponent('kanonis-badge', DsBadge);
defineComponent('kanonis-status-badge', DsStatusBadge);
defineComponent('kanonis-avatar', DsAvatar);
defineComponent('kanonis-card', DsCard);
defineComponent('kanonis-code-block', DsCodeBlock);
defineComponent('kanonis-description-list', DsDescriptionList);
defineComponent('kanonis-panel', DsPanel);
defineComponent('kanonis-metric', DsMetric);
export { DsAvatar, DsBadge, DsCard, DsCodeBlock, DsDescriptionList, DsMetric, DsPanel, DsStatusBadge };
