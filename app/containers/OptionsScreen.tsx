// OptionsScreen display heart containers and gold over the main game screen.

import * as m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import "./OptionsScreen.scss";

export interface OptionsScreenAttrs {
  type: string;
}

type Vnode = m.Vnode<OptionsScreenAttrs, OptionsScreen>;
type VnodeDOM = m.VnodeDOM<OptionsScreenAttrs, OptionsScreen>;

export class OptionsScreen extends MithrilTsxComponent<OptionsScreenAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return <div />;
  }
}
export default OptionsScreen;
