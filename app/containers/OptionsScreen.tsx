// OptionsScreen display heart containers and gold over the main game screen.

import m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import "./OptionsScreen.scss";

export interface OptionsScreenAttrs {
  type?: string;
}

type Vnode = m.Vnode<OptionsScreenAttrs, OptionsScreen>;
type VnodeDOM = m.VnodeDOM<OptionsScreenAttrs, OptionsScreen>;

export class OptionsScreen extends MithrilTsxComponent<OptionsScreenAttrs> {
  inputs: string[] = ["keyboard", "gamepad"];

  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <form name="options">
        <select>
          {this.inputs.map(() => (
            <option />
          ))}
        </select>
      </form>
    );
  }
}
export default OptionsScreen;
