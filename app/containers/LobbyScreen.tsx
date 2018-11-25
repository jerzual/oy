import HeroStatus from "../components/HeroStatus";
import * as m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import "./LobbyScreen.scss";

export interface LobbyScreenAttrs {
  type: string;
}

type Vnode = m.Vnode<LobbyScreenAttrs, LobbyScreen>;
type VnodeDOM = m.VnodeDOM<LobbyScreenAttrs, LobbyScreen>;

export class LobbyScreen extends MithrilTsxComponent<LobbyScreenAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <div>
        <h1>Archive</h1>
      </div>
    );
  }
}
export default LobbyScreen;
