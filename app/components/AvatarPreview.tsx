// AvatarPreview display heart containers and gold over the main game screen.

import m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./AvatarPreview.scss";

export interface AvatarPreviewAttrs {
  seed: string;
}

type Vnode = m.Vnode<AvatarPreviewAttrs, AvatarPreview>;
type VnodeDOM = m.VnodeDOM<AvatarPreviewAttrs, AvatarPreview>;

export class AvatarPreview extends MithrilTsxComponent<AvatarPreviewAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  view(v: Vnode) {
    return <div className={styles.avatarPreview} />;
  }
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
}
export default AvatarPreview;
