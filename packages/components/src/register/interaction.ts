import { defineComponent } from '../core/kanonis-element.js';
import { KanonisDisclosure, KanonisTab, KanonisTabs, KanonisThemeToggle } from '../components/interaction.js';

defineComponent('kanonis-theme-toggle', KanonisThemeToggle);
defineComponent('kanonis-tabs', KanonisTabs);
defineComponent('kanonis-tab', KanonisTab);
defineComponent('kanonis-disclosure', KanonisDisclosure);

export { KanonisDisclosure, KanonisTab, KanonisTabs, KanonisThemeToggle };
export type {
  KanonisDisclosureChangeDetail,
  KanonisTabChangeDetail,
  KanonisTheme,
  KanonisThemeChangeDetail,
} from '../components/interaction.js';
