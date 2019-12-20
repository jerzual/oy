// AvatarPreview display heart containers and gold over the main game screen.

import { Component, h } from "preact";
import * as React from "preact";

import * as styles from "./AvatarPreview.scss";

export interface AvatarPreviewAttrs {
  seed: string;
}

export class AvatarPreview extends Component<AvatarPreviewAttrs, any> {
  public render(props: any) {
    return <div className={styles.avatarPreview} />;
  }
}
export default AvatarPreview;
