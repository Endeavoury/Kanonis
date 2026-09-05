import { defineComponent } from '../core/kanonis-element.js';
import {
  KanonisActivityFeed,
  KanonisApprovalFlow,
  KanonisChangeSummary,
  KanonisDatePicker,
  KanonisFieldArray,
  KanonisFileUpload,
  KanonisFormSection,
  KanonisJobStatus,
  KanonisStepper,
  KanonisTaskList,
  KanonisTimePicker,
  KanonisTimeline,
} from '../components/enterprise-p2/enterprise-p2.js';
defineComponent('kanonis-form-section', KanonisFormSection);
defineComponent('kanonis-field-array', KanonisFieldArray);
defineComponent('kanonis-date-picker', KanonisDatePicker);
defineComponent('kanonis-time-picker', KanonisTimePicker);
defineComponent('kanonis-file-upload', KanonisFileUpload);
defineComponent('kanonis-stepper', KanonisStepper);
defineComponent('kanonis-approval-flow', KanonisApprovalFlow);
defineComponent('kanonis-task-list', KanonisTaskList);
defineComponent('kanonis-timeline', KanonisTimeline);
defineComponent('kanonis-activity-feed', KanonisActivityFeed);
defineComponent('kanonis-job-status', KanonisJobStatus);
defineComponent('kanonis-change-summary', KanonisChangeSummary);
export {
  KanonisActivityFeed,
  KanonisApprovalFlow,
  KanonisChangeSummary,
  KanonisDatePicker,
  KanonisFieldArray,
  KanonisFileUpload,
  KanonisFormSection,
  KanonisJobStatus,
  KanonisStepper,
  KanonisTaskList,
  KanonisTimePicker,
  KanonisTimeline,
};
export type {
  KanonisActivityItem,
  KanonisChangeItem,
  KanonisFieldItem,
  KanonisStep,
  KanonisTask,
  KanonisTimelineItem,
} from '../components/enterprise-p2/enterprise-p2.js';
