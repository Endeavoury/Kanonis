import { defineComponent } from '../core/ds-element.js';
import {
  DsAuditLog,
  DsPermissionMatrix,
  DsRoleBadge,
  DsDiffViewer,
  DsCodeEditor,
  DsJsonEditor,
  DsMaintenanceNotice,
  DsHelpPanel,
  DsTour,
  DsCoachmark,
  DsCompareView,
} from '../components/enterprise-p3.js';
defineComponent('kanonis-audit-log', DsAuditLog);
defineComponent('kanonis-permission-matrix', DsPermissionMatrix);
defineComponent('kanonis-role-badge', DsRoleBadge);
defineComponent('kanonis-diff-viewer', DsDiffViewer);
defineComponent('kanonis-code-editor', DsCodeEditor);
defineComponent('kanonis-json-editor', DsJsonEditor);
defineComponent('kanonis-maintenance-notice', DsMaintenanceNotice);
defineComponent('kanonis-help-panel', DsHelpPanel);
defineComponent('kanonis-tour', DsTour);
defineComponent('kanonis-coachmark', DsCoachmark);
defineComponent('kanonis-compare-view', DsCompareView);
export {
  DsAuditLog,
  DsPermissionMatrix,
  DsRoleBadge,
  DsDiffViewer,
  DsCodeEditor,
  DsJsonEditor,
  DsMaintenanceNotice,
  DsHelpPanel,
  DsTour,
  DsCoachmark,
  DsCompareView,
};
export type {
  DsAuditEntry,
  DsDiffLine,
  DsPermission,
  DsPermissionRole,
  DsTourStep,
} from '../components/enterprise-p3.js';
