import {
  KanonisButton,
  KanonisButtonGroup,
  KanonisIconButton,
} from '../components/button/index.js';
import { KanonisIcon } from '../components/icon/index.js';
import { defineComponent } from '../core/kanonis-element.js';

defineComponent('kanonis-icon', KanonisIcon);
defineComponent('kanonis-button', KanonisButton);
defineComponent('kanonis-icon-button', KanonisIconButton);
defineComponent('kanonis-button-group', KanonisButtonGroup);
export { KanonisButton,KanonisButtonGroup,KanonisIcon,KanonisIconButton };
