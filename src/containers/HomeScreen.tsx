import { FunctionalComponent } from "preact";

import { Link } from "preact-router";

const menu = [
	{ path: "/join", title: "Play" },
	{ path: "/options", title: "Options" },
	{ path: "/credits", title: "About" },
];

export const HomeScreen: FunctionalComponent = () => {
	return (
		<nav class="flex mt-1">
			<ul class="flex flex-col">
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
