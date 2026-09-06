import {
  KanonisAuditLog,
  KanonisCoachmark,
  KanonisCodeEditor,
  KanonisCompareView,
  KanonisDiffViewer,
  KanonisHelpPanel,
  KanonisJsonEditor,
  KanonisMaintenanceNotice,
  KanonisPermissionMatrix,
  KanonisRoleBadge,
  KanonisTour,
} from '../components/enterprise-p3/index.js';
import { defineComponent } from '../core/kanonis-element.js';

defineComponent('kanonis-audit-log', KanonisAuditLog);
defineComponent('kanonis-permission-matrix', KanonisPermissionMatrix);
defineComponent('kanonis-role-badge', KanonisRoleBadge);
defineComponent('kanonis-diff-viewer', KanonisDiffViewer);
defineComponent('kanonis-code-editor', KanonisCodeEditor);
defineComponent('kanonis-json-editor', KanonisJsonEditor);
defineComponent('kanonis-maintenance-notice', KanonisMaintenanceNotice);
defineComponent('kanonis-help-panel', KanonisHelpPanel);
defineComponent('kanonis-tour', KanonisTour);
defineComponent('kanonis-coachmark', KanonisCoachmark);
defineComponent('kanonis-compare-view', KanonisCompareView);
export type {
KanonisAuditEntry,
KanonisDiffLine,
KanonisPermission,
KanonisPermissionRole,
KanonisTourStep
} from '../components/enterprise-p3/index.js';
export {
KanonisAuditLog,KanonisCoachmark,KanonisCodeEditor,KanonisCompareView,KanonisDiffViewer,KanonisHelpPanel,KanonisJsonEditor,
KanonisMaintenanceNotice,KanonisPermissionMatrix,
KanonisRoleBadge,KanonisTour
};
