import HeroStatus from "../components/HeroStatus";
import * as m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./GameScreen.scss";

export interface GameScreenAttrs {
  type: string;
}

type Vnode = m.Vnode<GameScreenAttrs, GameScreen>;
type VnodeDOM = m.VnodeDOM<GameScreenAttrs, GameScreen>;

export class GameScreen extends MithrilTsxComponent<GameScreenAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <div className={styles.gameScreen}>
        <canvas id="game" />
      </div>
    );
  }
}
export default GameScreen;
