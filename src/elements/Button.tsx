// AvatarPreview display heart containers and gold over the main game screen.

import { Component, h } from "preact";
import * as React from "preact";

import "./Button.scss";

export interface ButtonAttrs {
  type: string;
  onClick?: (value: MouseEvent | KeyboardEvent) => void;
}

export class Button extends Component<ButtonAttrs, any> {
  public render(props: any) {
    return (
      <button
        class="button"
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
}
