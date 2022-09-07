// HeroStatus display heart containers and gold over the main game screen.

import { Component, h } from "preact";
import * as React from "preact";

import "./HeroStatus.scss";

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
