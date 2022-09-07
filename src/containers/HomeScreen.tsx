import { Component, h } from "preact";
import * as React from "preact";

import "./HomeScreen.scss";
import { Link } from "preact-router";

export interface HomeScreenAttrs {}

export class HomeScreen extends Component<HomeScreenAttrs, any> {
  private menu!: any[];
  public componentWillMount() {
    this.menu = [
      { path: "/join", title: "Play" },
      { path: "/options", title: "Options" },
      { path: "/credits", title: "About" },
    ];
  }
  public render(props: any) {
    return (
      <nav class="mainMenu">
        <ul class="menuList">
          {this.menu.map(entry => (
            <li class="menuEntry">
              <Link href={entry.path} tabIndex={0}>
                {entry.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
