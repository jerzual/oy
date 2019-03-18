// AvatarPreview display heart containers and gold over the main game screen.

import { Component } from "inferno";

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
