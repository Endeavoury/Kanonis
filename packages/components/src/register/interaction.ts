import { defineComponent } from '../core/ds-element.js';
import { DsDisclosure, DsTab, DsTabs, DsThemeToggle } from '../components/interaction.js';

defineComponent('kanonis-theme-toggle', DsThemeToggle);
defineComponent('kanonis-tabs', DsTabs);
defineComponent('kanonis-tab', DsTab);
defineComponent('kanonis-disclosure', DsDisclosure);

export { DsDisclosure, DsTab, DsTabs, DsThemeToggle };
export type {
  DsDisclosureChangeDetail,
  DsTabChangeDetail,
  DsTheme,
  DsThemeChangeDetail,
} from '../components/interaction.js';
