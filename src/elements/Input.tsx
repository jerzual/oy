import { Component, h } from "preact";
import * as React from "preact";

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
      <label>
        <input id={props.key}
          className={styles.textField}
          onchange={e => props.onChange(e.target.value)}
        />
      </label>
    );
  }
}
export default Input;
