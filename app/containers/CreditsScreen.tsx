import { Component, h } from "preact";
import * as React from "preact";

import * as styles from "./CreditsScreen.scss";

export interface CreditsScreenAttrs {
  type?: string;
}

export class CreditsScreen extends Component<CreditsScreenAttrs, any> {
  public render(props: any) {
    return (
      <div id="credits" className={styles.creditsScreen}>
        <h2>Credits</h2>
        <ul>
          <li>Code and design by jibhaine</li>
          <li>Tiles and character sprites by thisisellian</li>
          <li>
            Contain code from these open-source projects :
            <ul>
              <li />
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default CreditsScreen;
