import HeroStatus from "../components/HeroStatus";
import { Component } from "inferno";

import "./LobbyScreen.scss";

export interface LobbyScreenAttrs {
  type?: string;
}

export class LobbyScreen extends Component<LobbyScreenAttrs, any> {
  public render(props: any) {
    return (
      <div>
        <h1>Archive</h1>
      </div>
    );
  }
}
export default LobbyScreen;
