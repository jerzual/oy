import { Component, h } from "preact";
import * as React from "preact";

import * as styles from "./Input.scss";

export interface InputAttrs {
  key: string;
  type: string;
  placeholder?: string;
  max?: number;
  onChange?: (value: Event) => void;
}

export class Input extends Component<InputAttrs, any> {
  public render(props: any) {
    return (
      <label id={props.key}>
        <input
          className={styles.textField}
          onChange={e => props.onChange(e)}
        />
      </label>
    );
  }
}
export default Input;
