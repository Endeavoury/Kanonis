import { defineComponent } from '../core/kanonis-element.js';
import {
  KanonisAuditLog,
  KanonisPermissionMatrix,
  KanonisRoleBadge,
  KanonisDiffViewer,
  KanonisCodeEditor,
  KanonisJsonEditor,
  KanonisMaintenanceNotice,
  KanonisHelpPanel,
  KanonisTour,
  KanonisCoachmark,
  KanonisCompareView,
} from '../components/enterprise-p3.js';
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
export {
  KanonisAuditLog,
  KanonisPermissionMatrix,
  KanonisRoleBadge,
  KanonisDiffViewer,
  KanonisCodeEditor,
  KanonisJsonEditor,
  KanonisMaintenanceNotice,
  KanonisHelpPanel,
  KanonisTour,
  KanonisCoachmark,
  KanonisCompareView,
};
export type {
  KanonisAuditEntry,
  KanonisDiffLine,
  KanonisPermission,
  KanonisPermissionRole,
  KanonisTourStep,
} from '../components/enterprise-p3.js';
