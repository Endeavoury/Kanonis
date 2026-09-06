import { mediaCompact } from '@endeavoury/kanonis-styles';
import { css, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { KanonisDialog } from '../dialog/dialog.js';


export class KanonisDrawer extends KanonisDialog {
  static override styles: CSSResultGroup = [
    KanonisDialog.styles,
    css`
      dialog {
        width: min(92vw, var(--kanonis-drawer-width, 26rem));
        height: 100dvh;
        max-height: 100dvh;
        margin: 0 0 0 auto;
        border-radius: var(--kanonis-radius-xl) 0 0 var(--kanonis-radius-xl);
      }
      :host([position='start']) dialog {
        margin: 0 auto 0 0;
        border-radius: 0 var(--kanonis-radius-xl) var(--kanonis-radius-xl) 0;
      }
      .frame {
        height: 100%;
      }
      @media ${mediaCompact} {
        dialog {
          width: min(94vw, var(--kanonis-drawer-width, 26rem));
          height: 100dvh;
          max-height: 100dvh;
        }
      }
    `,
  ];

  @property({ reflect: true }) position: 'start' | 'end' = 'end';
}
