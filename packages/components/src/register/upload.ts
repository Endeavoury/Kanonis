import { defineComponent } from '../core/kanonis-element.js';
import { KanonisDropZone } from '../components/upload/upload.js';

defineComponent('kanonis-drop-zone', KanonisDropZone);

export { KanonisDropZone };
export type { KanonisFileRejectDetail, KanonisFilesDetail } from '../components/upload/upload.js';
