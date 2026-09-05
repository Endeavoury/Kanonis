import { defineComponent } from '../core/kanonis-element.js';
import {
  KanonisAvatar,
  KanonisBadge,
  KanonisCard,
  KanonisCodeBlock,
  KanonisDescriptionList,
  KanonisMetric,
  KanonisPanel,
  KanonisStatusBadge,
} from '../components/display.js';
defineComponent('kanonis-badge', KanonisBadge);
defineComponent('kanonis-status-badge', KanonisStatusBadge);
defineComponent('kanonis-avatar', KanonisAvatar);
defineComponent('kanonis-card', KanonisCard);
defineComponent('kanonis-code-block', KanonisCodeBlock);
defineComponent('kanonis-description-list', KanonisDescriptionList);
defineComponent('kanonis-panel', KanonisPanel);
defineComponent('kanonis-metric', KanonisMetric);
export { KanonisAvatar, KanonisBadge, KanonisCard, KanonisCodeBlock, KanonisDescriptionList, KanonisMetric, KanonisPanel, KanonisStatusBadge };
