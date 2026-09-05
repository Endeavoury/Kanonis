import { defineComponent } from '../core/ds-element.js';
import {
  DsContainer,
  DsDetailSidebar,
  DsGrid,
  DsInline,
  DsInspectorPane,
  DsPane,
  DsPaneContent,
  DsPaneGroup,
  DsPaneHeader,
  DsPageHeader,
  DsScrollablePane,
  DsStack,
  DsPaneStack,
  DsPaneWindow,
  DsWorkspace,
  DsWorkspaceHeader,
} from '../components/layout.js';
defineComponent('kanonis-workspace', DsWorkspace);
defineComponent('kanonis-workspace-header', DsWorkspaceHeader);
defineComponent('kanonis-pane-window', DsPaneWindow);
defineComponent('kanonis-pane-stack', DsPaneStack);
defineComponent('kanonis-stack', DsStack);
defineComponent('kanonis-inline', DsInline);
defineComponent('kanonis-grid', DsGrid);
defineComponent('kanonis-container', DsContainer);
defineComponent('kanonis-page-header', DsPageHeader);
defineComponent('kanonis-detail-sidebar', DsDetailSidebar);
defineComponent('kanonis-pane-group', DsPaneGroup);
defineComponent('kanonis-pane', DsPane);
defineComponent('kanonis-scrollable-pane', DsScrollablePane);
defineComponent('kanonis-pane-header', DsPaneHeader);
defineComponent('kanonis-pane-content', DsPaneContent);
defineComponent('kanonis-inspector-pane', DsInspectorPane);
export {
  DsContainer,
  DsDetailSidebar,
  DsGrid,
  DsInline,
  DsInspectorPane,
  DsPane,
  DsPaneContent,
  DsPaneGroup,
  DsPaneHeader,
  DsPageHeader,
  DsScrollablePane,
  DsStack,
  DsPaneStack,
  DsPaneWindow,
  DsWorkspace,
  DsWorkspaceHeader,
};
