import * as m from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component';

import * as styles from './HomeScreen.scss';

export interface HomeScreenAttrs {
  type: string;
}

type Vnode = m.Vnode<HomeScreenAttrs, HomeScreen>;
type VnodeDOM = m.VnodeDOM<HomeScreenAttrs, HomeScreen>;

export class HomeScreen extends MithrilTsxComponent<HomeScreenAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  view(v: Vnode) {
    return (
      <main>
        <h1>OY</h1>
        <img class={styles.mainImage}/>
        <nav>
          <ul>
            <li>
              <a href="/join">Play</a>
              </li>
              </ul>
        </nav>
      </main>
    );
  }
}
export default HomeScreen;
