import m from "mithril";

import { MithrilTsxComponent } from "mithril-tsx-component";

import "./SeedInput.scss";
import { Input, Button } from "../elements";

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
      <div className="formGroup">
        <Input key="seed" type="text" placeholder="QWERTY42" max={8} />
        <Button type="button">
          regenerate
        </Button>
        <Button type="submit">
          Play
        </Button>
      </div>
    );
  }
}
export default SeedInput;
