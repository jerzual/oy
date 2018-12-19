import m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import SeedInput from "../components/SeedInput";
import AvatarPreview from "../components/AvatarPreview";

import * as styles from "./JoinScreen.scss";

export interface JoinAttributes {
  seed?: string;
}

type Vnode = m.Vnode<JoinAttributes, JoinScreen>;
type VnodeDOM = m.VnodeDOM<JoinAttributes, JoinScreen>;

export class JoinScreen extends MithrilTsxComponent<JoinAttributes> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <div className={styles.joinScreen}>
        <AvatarPreview seed={v.attrs.seed} />
        <SeedInput seed={v.attrs.seed} onChange={(value: string) => {}} />
      </div>
    );
  }
}
export default JoinScreen;
