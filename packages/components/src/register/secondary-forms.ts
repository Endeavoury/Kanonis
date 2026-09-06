import {
  KanonisRadio,
  KanonisRadioGroup,
  KanonisRange,
  KanonisSwitch,
  KanonisTextarea,
} from '../components/secondary-forms/index.js';
import { defineComponent } from '../core/kanonis-element.js';


defineComponent('kanonis-textarea', KanonisTextarea);
defineComponent('kanonis-switch', KanonisSwitch);
defineComponent('kanonis-range', KanonisRange);
defineComponent('kanonis-radio-group', KanonisRadioGroup);
defineComponent('kanonis-radio', KanonisRadio);

export { KanonisRadio,KanonisRadioGroup,KanonisRange,KanonisSwitch,KanonisTextarea };
