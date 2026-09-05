import { defineComponent } from '../core/ds-element.js';
import { DsCheckbox, DsFormField, DsInput, DsSearchInput, DsSelect } from '../components/forms.js';
import {
  DsRadio,
  DsRadioGroup,
  DsRange,
  DsSwitch,
  DsTextarea,
} from '../components/secondary-forms.js';
defineComponent('kanonis-input', DsInput);
defineComponent('kanonis-search-input', DsSearchInput);
defineComponent('kanonis-select', DsSelect);
defineComponent('kanonis-checkbox', DsCheckbox);
defineComponent('kanonis-form-field', DsFormField);
defineComponent('kanonis-textarea', DsTextarea);
defineComponent('kanonis-switch', DsSwitch);
defineComponent('kanonis-range', DsRange);
defineComponent('kanonis-radio-group', DsRadioGroup);
defineComponent('kanonis-radio', DsRadio);
export {
  DsCheckbox,
  DsFormField,
  DsInput,
  DsRadio,
  DsRadioGroup,
  DsRange,
  DsSearchInput,
  DsSelect,
  DsSwitch,
  DsTextarea,
};
