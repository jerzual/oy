// AvatarPreview display heart containers and gold over the main game screen.

import { Component } from "inferno";

import * as styles from "./Button.scss";

export interface ButtonAttrs {
  type: string;
  onClick?: (value) => void;
}

export class Button extends Component<ButtonAttrs, any> {
  public render(props: any) {
    return (
      <button
        className={styles.button}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
}
export default Button;
