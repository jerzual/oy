import {HeroStatus} from "../components/HeroStatus";
import { Component, h } from "preact";
import * as React from "preact";

import "./GameScreen.scss";

export interface GameScreenAttrs {
  type?: string;
}

export class GameScreen extends Component<GameScreenAttrs, any> {
  public render(props: any) {
    return (
      <div class="gameScreen">
        <canvas id="game" />
      </div>
    );
  }
}
