import { defineComponent } from '../core/ds-element.js';
import { DsDialog, DsDrawer, DsMenu, DsMenuItem, DsTooltip } from '../components/overlays.js';

defineComponent('kanonis-dialog', DsDialog);
defineComponent('kanonis-drawer', DsDrawer);
defineComponent('kanonis-menu', DsMenu);
defineComponent('kanonis-menu-item', DsMenuItem);
defineComponent('kanonis-tooltip', DsTooltip);

export { DsDialog, DsDrawer, DsMenu, DsMenuItem, DsTooltip };
