import HeroStatus from "../components/HeroStatus";
import { Component, h } from "preact";
import * as React from "preact";

import * as styles from "./GameScreen.scss";

export interface GameScreenAttrs {
  type?: string;
}

export class GameScreen extends Component<GameScreenAttrs, any> {
  public render(props: any) {
    return (
      <div className={styles.gameScreen}>
        <canvas id="game" />
      </div>
    );
  }
}
export default GameScreen;
