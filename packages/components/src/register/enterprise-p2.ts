import { defineComponent } from '../core/ds-element.js';
import {
  DsActivityFeed,
  DsApprovalFlow,
  DsChangeSummary,
  DsDatePicker,
  DsFieldArray,
  DsFileUpload,
  DsFormSection,
  DsJobStatus,
  DsStepper,
  DsTaskList,
  DsTimePicker,
  DsTimeline,
} from '../components/enterprise-p2.js';
defineComponent('kanonis-form-section', DsFormSection);
defineComponent('kanonis-field-array', DsFieldArray);
defineComponent('kanonis-date-picker', DsDatePicker);
defineComponent('kanonis-time-picker', DsTimePicker);
defineComponent('kanonis-file-upload', DsFileUpload);
defineComponent('kanonis-stepper', DsStepper);
defineComponent('kanonis-approval-flow', DsApprovalFlow);
defineComponent('kanonis-task-list', DsTaskList);
defineComponent('kanonis-timeline', DsTimeline);
defineComponent('kanonis-activity-feed', DsActivityFeed);
defineComponent('kanonis-job-status', DsJobStatus);
defineComponent('kanonis-change-summary', DsChangeSummary);
export {
  DsActivityFeed,
  DsApprovalFlow,
  DsChangeSummary,
  DsDatePicker,
  DsFieldArray,
  DsFileUpload,
  DsFormSection,
  DsJobStatus,
  DsStepper,
  DsTaskList,
  DsTimePicker,
  DsTimeline,
};
export type {
  DsActivityItem,
  DsChangeItem,
  DsFieldItem,
  DsStep,
  DsTask,
  DsTimelineItem,
} from '../components/enterprise-p2.js';
