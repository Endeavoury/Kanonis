import {
  KanonisDisclosure,
  KanonisTab,
  KanonisTabs,
  KanonisThemeToggle,
} from '../components/interaction/index.js';
import { defineComponent } from '../core/kanonis-element.js';


defineComponent('kanonis-theme-toggle', KanonisThemeToggle);
defineComponent('kanonis-tabs', KanonisTabs);
defineComponent('kanonis-tab', KanonisTab);
defineComponent('kanonis-disclosure', KanonisDisclosure);

export type {
KanonisDisclosureChangeDetail,
KanonisTabChangeDetail,
KanonisTheme,
KanonisThemeChangeDetail
} from '../components/interaction/index.js';
export { KanonisDisclosure,KanonisTab,KanonisTabs,KanonisThemeToggle };
