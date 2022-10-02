import { Component, h } from "preact";
import * as React from "preact";

import "./Layout.scss";

export interface LayoutAttributes {
	children: React.ComponentChildren;
}

export class Layout extends Component<LayoutAttributes, any> {
	public componentWillMount(): void {
		console.log("componentWillMount");
	}
	public render(props: any) {
		return (
			<main class="mainZone">
				<nav class="menuItems">
					<h1>0Y</h1>
				</nav>
				<canvas class="gameView" width="320" height="240" />
				<section class="routeOutlet">{props.children}</section>
			</main>
		);
	}
}
