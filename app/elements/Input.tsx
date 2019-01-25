import m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./Input.scss";

export interface InputAttrs {
  key: string;
  type: string;
  placeholder?: string;
  max?: number
  onChange?: (value) => void;
}

type Vnode = m.Vnode<InputAttrs, Input>;
type VnodeDOM = m.VnodeDOM<InputAttrs, Input>;

export class Input extends MithrilTsxComponent<InputAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <label for={v.attrs.key}>
        <input className={styles.textField} 
        oninput={(e) => v.attrs.onChange(e.target.value)} />
      </label>
    );
  }
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
}
export default Input;
