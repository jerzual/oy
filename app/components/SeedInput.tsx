import * as m from "mithril";

import { MithrilTsxComponent } from "mithril-tsx-component";

import "./SeedInput.scss";

export interface SeedInputAttributes {
  seed: string;
  onChange: (seed: string) => void;
}

type Vnode = m.Vnode<SeedInputAttributes, SeedInput>;
type VnodeDOM = m.VnodeDOM<SeedInputAttributes, SeedInput>;

export class SeedInput extends MithrilTsxComponent<SeedInputAttributes> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <div>
        <input type="text" placeholder="QWERTY42" max={8} />
        <button type="button" className="btn  btn-bloc" value="regenerate">
          regenerate
        </button>
        <button type="submit" className="btn btn-positive btn-bloc">
          Play
        </button>
      </div>
    );
  }
}
export default SeedInput;
