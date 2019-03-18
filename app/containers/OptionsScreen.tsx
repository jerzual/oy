// OptionsScreen display heart containers and gold over the main game screen.

import { Component } from "inferno";

import "./OptionsScreen.scss";

export interface OptionsScreenAttrs {
  type?: string;
}

type Vnode = m.Vnode<OptionsScreenAttrs, OptionsScreen>;
type VnodeDOM = m.VnodeDOM<OptionsScreenAttrs, OptionsScreen>;

export class OptionsScreen extends Component<OptionsScreenAttrs, any> {
  inputs: string[] = ["keyboard", "gamepad", "touch"];

  public render(props: any) {
    return (
      <form name="options">
        <select>
          {this.inputs.map(input => (
            <option name={input} />
          ))}
        </select>
      </form>
    );
  }
}
export default OptionsScreen;
