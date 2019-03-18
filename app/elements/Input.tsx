import { Component } from "inferno";

import * as styles from "./Input.scss";

export interface InputAttrs {
  key: string;
  type: string;
  placeholder?: string;
  max?: number;
  onChange?: (value) => void;
}

export class Input extends Component<InputAttrs, any> {
  public render(props: any) {
    return (
      <label for={props.key}>
        <input
          className={styles.textField}
          onchange={e => props.onChange(e.target.value)}
        />
      </label>
    );
  }
}
export default Input;
