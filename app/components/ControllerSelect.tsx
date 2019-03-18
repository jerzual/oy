// ControllerSelect display heart containers and gold over the main game screen.

import { Component } from "inferno";

import * as styles from "./ControllerSelect.scss";

export interface ControllerSelectAttrs {}

export class ControllerSelect extends Component<ControllerSelectAttrs, any> {
  public render(props: any) {
    return (
      <form>
        <label>
          <select>
            <option />
          </select>
        </label>
      </form>
    );
  }
}
export default ControllerSelect;
