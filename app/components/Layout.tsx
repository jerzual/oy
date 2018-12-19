import m from "mithril";

import { MithrilTsxComponent } from "mithril-tsx-component";

import * as styles from "./Layout.scss";

export interface LayoutAttributes {
  title: string;
}

type Vnode = m.Vnode<LayoutAttributes, Layout>;
type VnodeDOM = m.VnodeDOM<LayoutAttributes, Layout>;

export class Layout extends MithrilTsxComponent<LayoutAttributes> {
  oninit(v: Vnode) {
    console.log(`oninit`);
  }
  onbeforeupdate(v: Vnode, o: VnodeDOM) {
    console.log(`onbeforeupdate`);
  }
  oncreate(v: VnodeDOM) {
    console.log(`oncreate`);
  }
  onupdate(v: VnodeDOM) {
    console.log(`onupdate`);
  }
  onbeforeremove(v: VnodeDOM) {
    console.log(`onbeforeremove`);
  }
  onremove(v: VnodeDOM) {
    console.log(`onremove`);
  }
  view(v: Vnode) {
    return (
      <main>
        <h1>0Y</h1>
        <canvas className={styles.mainZone} width="320" height="240" />
        <section className={styles.routeOutlet}>{v.children}</section>
      </main>
    );
  }
}

export default Layout;
