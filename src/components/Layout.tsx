import { ComponentChildren, FunctionComponent } from "preact";

export interface LayoutAttributes {
	children: ComponentChildren;
}

export const Layout: FunctionComponent<LayoutAttributes> = (props) => {
	return (
		<main>
			<nav class="fixed w-full text-center">
				<h1 class="my-4">0Y</h1>
			</nav>
			<canvas
				class="w-full h-full"
				width="320"
				height="240"
				style={{ imageRendering: "pixelated" }}
			/>
			<section class="absolute top-0 right-0 left-0 bottom-0">
				{props.children}
			</section>
		</main>
	);
};
