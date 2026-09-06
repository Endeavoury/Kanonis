import { KanonisDropZone } from '../components/upload/index.js';
import { defineComponent } from '../core/kanonis-element.js';


defineComponent('kanonis-drop-zone', KanonisDropZone);

export type { KanonisFileRejectDetail,KanonisFilesDetail } from '../components/upload/index.js';
export { KanonisDropZone };
