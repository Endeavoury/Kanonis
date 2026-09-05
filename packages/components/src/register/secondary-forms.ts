import { defineComponent } from '../core/ds-element.js';
import {
  DsRadio,
  DsRadioGroup,
  DsRange,
  DsSwitch,
  DsTextarea,
} from '../components/secondary-forms.js';

defineComponent('kanonis-textarea', DsTextarea);
defineComponent('kanonis-switch', DsSwitch);
defineComponent('kanonis-range', DsRange);
defineComponent('kanonis-radio-group', DsRadioGroup);
defineComponent('kanonis-radio', DsRadio);

export { DsRadio, DsRadioGroup, DsRange, DsSwitch, DsTextarea };
