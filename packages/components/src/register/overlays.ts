import {
  KanonisDialog,
  KanonisDrawer,
  KanonisMenu,
  KanonisMenuItem,
  KanonisTooltip,
} from '../components/overlays/index.js';
import { defineComponent } from '../core/kanonis-element.js';


defineComponent('kanonis-dialog', KanonisDialog);
defineComponent('kanonis-drawer', KanonisDrawer);
defineComponent('kanonis-menu', KanonisMenu);
defineComponent('kanonis-menu-item', KanonisMenuItem);
defineComponent('kanonis-tooltip', KanonisTooltip);

export { KanonisDialog,KanonisDrawer,KanonisMenu,KanonisMenuItem,KanonisTooltip };
