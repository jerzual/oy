// HeroStatus display heart containers and gold over the main game screen.

import m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./HeroStatus.scss";

export interface HeroStatusAttrs {
  gold?: number;
  life?: number;
  score?: number;
}

type Vnode = m.Vnode<HeroStatusAttrs, HeroStatus>;
type VnodeDOM = m.VnodeDOM<HeroStatusAttrs, HeroStatus>;

export class HeroStatus extends MithrilTsxComponent<HeroStatusAttrs> {
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
export default HeroStatus;
