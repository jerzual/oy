import { ComponentChildren, FunctionComponent } from "preact";
import { css } from "../../styled-system/css";

export interface LayoutAttributes {
	children: ComponentChildren;
}

export const Layout: FunctionComponent<LayoutAttributes> = (props) => {
	return (
		<main>
			<nav class={css({ position: "fixed", w: "full", textAlign: "center" })}>
				<h1 class={css({ my: 4 })}>0Y</h1>
			</nav>
			<canvas
				class={css({ w: "full", h: "full" })}
				width="320"
				height="240"
				style={{ imageRendering: "pixelated" }}
			/>
			<section class={css({ position: "absolute", inset: 0 })}>{props.children}</section>
		</main>
	);
};
