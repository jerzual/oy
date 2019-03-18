import { Component } from "inferno";

import * as styles from "./HomeScreen.scss";
import { Link } from "inferno-router";

export interface HomeScreenAttrs {}

export class HomeScreen extends Component<HomeScreenAttrs, any> {
  private menu: any[];
  public componentWillMount() {
    this.menu = [
      { path: "/join", title: "Play" },
      { path: "/options", title: "Options" },
      { path: "/credits", title: "About" },
    ];
  }
  public render(props: any) {
    return (
      <nav className={styles.mainMenu}>
        <ul className={styles.menuList}>
          {this.menu.map(entry => (
            <li className={styles.menuEntry}>
              <Link href={entry.path} oncreate={m.route.link} tabindex={0}>
                {entry.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default HomeScreen;
