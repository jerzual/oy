import * as m from 'mithril';

import { MithrilTsxComponent } from 'mithril-tsx-component';

import "./SeedInput.scss";

export interface ISeedInputCompAttrs {
  seed: string;
  onRegenerate: () => void;
  onChange: () => void;
  onSubmit: () => void;
}

type Vnode = m.Vnode<ISeedInputCompAttrs, SeedInput>;
type VnodeDOM = m.VnodeDOM<ISeedInputCompAttrs, SeedInput>;

export class SeedInput extends MithrilTsxComponent<ISeedInputCompAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
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
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
}
export default SeedInput;
