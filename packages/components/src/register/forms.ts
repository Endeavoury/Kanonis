import {
  KanonisCheckbox,
  KanonisFormField,
  KanonisInput,
  KanonisSearchInput,
  KanonisSelect,
} from '../components/forms/index.js';
import {
  KanonisRadio,
  KanonisRadioGroup,
  KanonisRange,
  KanonisSwitch,
  KanonisTextarea,
} from '../components/secondary-forms/index.js';
import { defineComponent } from '../core/kanonis-element.js';

defineComponent('kanonis-input', KanonisInput);
defineComponent('kanonis-search-input', KanonisSearchInput);
defineComponent('kanonis-select', KanonisSelect);
defineComponent('kanonis-checkbox', KanonisCheckbox);
defineComponent('kanonis-form-field', KanonisFormField);
defineComponent('kanonis-textarea', KanonisTextarea);
defineComponent('kanonis-switch', KanonisSwitch);
defineComponent('kanonis-range', KanonisRange);
defineComponent('kanonis-radio-group', KanonisRadioGroup);
defineComponent('kanonis-radio', KanonisRadio);
export {
KanonisCheckbox,
KanonisFormField,
KanonisInput,
KanonisRadio,
KanonisRadioGroup,
KanonisRange,
KanonisSearchInput,
KanonisSelect,
KanonisSwitch,
KanonisTextarea
};
