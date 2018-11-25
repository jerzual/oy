// ControllerSelect display heart containers and gold over the main game screen.

import * as m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./ControllerSelect.scss";

export interface ControllerSelectAttrs {
}

type Vnode = m.Vnode<ControllerSelectAttrs, ControllerSelect>;
type VnodeDOM = m.VnodeDOM<ControllerSelectAttrs, ControllerSelect>;

export class ControllerSelect extends MithrilTsxComponent<
  ControllerSelectAttrs
> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  view(v: Vnode) {
    return <div />;
  }
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
}
export default ControllerSelect;
