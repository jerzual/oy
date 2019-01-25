// AvatarPreview display heart containers and gold over the main game screen.

import m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./Button.scss";

export interface ButtonAttrs {
  type: string;
  onClick?: (value) => void;
}

type Vnode = m.Vnode<ButtonAttrs, Button>;
type VnodeDOM = m.VnodeDOM<ButtonAttrs, Button>;

export class Button extends MithrilTsxComponent<ButtonAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <button className={styles.button} 
        type={v.attrs.type}
        onClick={v.attrs.onClick}>
        {v.children}
      </button>
    );
  }
  oncreate(v: VnodeDOM) {
  }
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
}
export default Button;
