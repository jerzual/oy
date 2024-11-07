import { FunctionalComponent } from "preact";

import { Link } from "preact-router";
import { css } from "../../styled-system/css";

const menu = [
	{ path: "/join", title: "Play" },
	{ path: "/options", title: "Options" },
	{ path: "/credits", title: "About" },
];

export const HomeScreen: FunctionalComponent = () => {
	return (
		<nav class={css({ display: "flex", mt: 1 })}>
			<ul class={css({ display: "flex", flexDir: "column" })}>
				{menu.map((entry) => (
					<li class="menuEntry" key={entry.path}>
						<Link href={entry.path} tabIndex={0}>
							{entry.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
