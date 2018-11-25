import HeroStatus from "../components/HeroStatus";
import * as m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import "./ArchiveScreen.scss";

export interface ArchiveScreenAttrs {
  type: string;
}

type Vnode = m.Vnode<ArchiveScreenAttrs, ArchiveScreen>;
type VnodeDOM = m.VnodeDOM<ArchiveScreenAttrs, ArchiveScreen>;

export class ArchiveScreen extends MithrilTsxComponent<ArchiveScreenAttrs> {
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
export default ArchiveScreen;
