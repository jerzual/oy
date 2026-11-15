import type { FC } from "react";

import { Link } from "react-router";
import { css } from "../../styled-system/css";
import { button } from "../../styled-system/recipes";

const menu = [
	{ path: "/join", title: "Play" },
	{ path: "/options", title: "Options" },
	{ path: "/credits", title: "About" },
];

export const HomeScreen: FC = () => {
	return (
		<nav className={css({ display: "flex", flexDir: "column" })}>
			<ul className={css({ display: "flex", flexDir: "column", gap: "3" })}>
				{menu.map((entry) => (
					<li className="menuEntry" key={entry.path}>
						<Link
							to={entry.path}
							className={button({ variant: "secondary", size: "lg", fullWidth: true })}
						>
							{entry.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
