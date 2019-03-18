import { Component } from "inferno";

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
      <main>
        <h1>0Y</h1>
        <canvas className={styles.mainZone} width="320" height="240" />
        <section className={styles.routeOutlet}>{props.children}</section>
      </main>
    );
  }
}

export default Layout;
