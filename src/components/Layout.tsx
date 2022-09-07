import { Component, h } from "preact";
import * as React from "preact";

import * as styles from "./Layout.scss";

export interface LayoutAttributes {
  title: string;
}

export class Layout extends Component<LayoutAttributes, any> {
  public componentWillMount(): void {
    console.log("componentWillMount");
  }
  public render(props: any) {
    return (
      <main className={styles.mainZone}>
        <nav className={styles.menuItems}>
          <h1>0Y</h1>
        </nav>
        <canvas className={styles.gameView} width="320" height="240" />
        <section className={styles.routeOutlet}>{props.children}</section>
      </main>
    );
  }
}

export default Layout;
