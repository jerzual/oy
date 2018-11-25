import * as m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./CreditsScreen.scss";

export interface CreditsScreenAttrs {
  type: string;
}

type Vnode = m.Vnode<CreditsScreenAttrs, CreditsScreen>;
type VnodeDOM = m.VnodeDOM<CreditsScreenAttrs, CreditsScreen>;

export class CreditsScreen extends MithrilTsxComponent<CreditsScreenAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <div id="credits" className={styles.creditsScreen}>
        <h2>Credits</h2>
        <ul>
          <li>Code and design by jibhaine</li>
          <li>Tiles and character sprites by thisisellian</li>
          <li>
            Contain code from these open-source projects :
            <ul>
              <li />
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default CreditsScreen;
