import type { FC, ReactNode } from "react";
import { css } from "../../styled-system/css";

export interface LayoutAttributes {
	children: ReactNode;
}

export const Layout: FC<LayoutAttributes> = (props) => {
	return (
		<main>
			<nav className={css({ position: "fixed", w: "full", textAlign: "center" })}>
				<h1 className={css({ my: 4 })}>0Y</h1>
			</nav>
			<canvas
				className={css({ w: "full", h: "full" })}
				width="320"
				height="240"
				style={{ imageRendering: "pixelated" }}
			/>
			<section className={css({ position: "absolute", inset: 0 })}>{props.children}</section>
		</main>
	);
};
