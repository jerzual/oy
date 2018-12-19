import m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./HomeScreen.scss";

export interface HomeScreenAttrs {}

type Vnode = m.Vnode<HomeScreenAttrs, HomeScreen>;
type VnodeDOM = m.VnodeDOM<HomeScreenAttrs, HomeScreen>;

export class HomeScreen extends MithrilTsxComponent<HomeScreenAttrs> {
  private menu: any[];
  oninit(v: Vnode) {
    this.menu = [
      { path: "/join", title: "Play" },
      { path: "/options", title: "Options" },
      { path: "/credits", title: "About" },
    ];
  }
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <nav className={styles.mainMenu}>
        <ul className={styles.menuList}>
          {this.menu.map(entry => (
            <li>
              <a href={entry.path} oncreate={m.route.link} tabindex={0}>
                {entry.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default HomeScreen;
