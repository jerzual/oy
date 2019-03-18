// HeroStatus display heart containers and gold over the main game screen.

import { Component } from "inferno";

import * as styles from "./HeroStatus.scss";

export interface HeroStatusAttrs {
  gold?: number;
  life?: number;
  score?: number;
}

export class HeroStatus extends Component<HeroStatusAttrs, any> {
  public render(props: any) {
    return <div />;
  }
}
export default HeroStatus;
