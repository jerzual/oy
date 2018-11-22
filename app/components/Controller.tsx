// HeroStatus display heart containers and gold over the main game screen.

import * as m from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component';

import './HeroStatus.scss';

export interface IHeroStatusCompAttrs {
  gold: number;
  life: number;
}

type Vnode = m.Vnode<IHeroStatusCompAttrs, HeroStatus>;
type VnodeDOM = m.VnodeDOM<IHeroStatusCompAttrs, HeroStatus>;

export class HeroStatus extends MithrilTsxComponent<IHeroStatusCompAttrs> {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  view(v: Vnode) {
    return <div />;
  }
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
}
export default HeroStatus;
