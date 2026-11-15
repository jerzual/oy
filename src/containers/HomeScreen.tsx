import type { FC } from "react";

import { Link } from "react-router";
import { css } from "../../styled-system/css";

const menu = [
	{ path: "/join", title: "Play" },
	{ path: "/options", title: "Options" },
	{ path: "/credits", title: "About" },
];

export const HomeScreen: FC = () => {
	return (
		<nav className={css({ display: "flex", mt: 1 })}>
			<ul className={css({ display: "flex", flexDir: "column" })}>
				{menu.map((entry) => (
					<li className="menuEntry" key={entry.path}>
						<Link to={entry.path} tabIndex={0}>
							{entry.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
