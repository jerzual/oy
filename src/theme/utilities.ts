import { defineUtility } from "@pandacss/dev";

/**
 * Clip-path polygon cutting stair-stepped "pixel" corners.
 *
 * @param size  size of one pixel step (e.g. "4px")
 * @param depth number of steps per corner (1 = single notch, 2 = rounded pixel corner)
 */
export function pixelCornersPolygon(size: string, depth: number): string {
	const at = (n: number) => (n === 0 ? "0" : `calc(${size} * ${n})`);
	const fromEnd = (n: number) => (n === 0 ? "100%" : `calc(100% - ${size} * ${n})`);

	const topLeft: string[] = [];
	const topRight: string[] = [];
	const bottomRight: string[] = [];
	const bottomLeft: string[] = [];
	for (let i = 0; i < depth; i++) {
		// walk each corner as a staircase: (x, y) → (x + 1, y) → (x + 1, y - 1)…
		topLeft.push(`${at(i)} ${at(depth - i)}`, `${at(i + 1)} ${at(depth - i)}`);
		topRight.push(`${fromEnd(depth - i)} ${at(i)}`, `${fromEnd(depth - i)} ${at(i + 1)}`);
		bottomRight.push(
			`${fromEnd(i)} ${fromEnd(depth - i)}`,
			`${fromEnd(i + 1)} ${fromEnd(depth - i)}`,
		);
		bottomLeft.push(`${at(depth - i)} ${fromEnd(i)}`, `${at(depth - i)} ${fromEnd(i + 1)}`);
	}
	// the staircases above end on the "outer" side, close each corner on the axis
	return `polygon(${[
		...topLeft,
		`${at(depth)} 0`,
		...topRight,
		`100% ${at(depth)}`,
		...bottomRight,
		`${fromEnd(depth)} 100%`,
		...bottomLeft,
		`0 ${fromEnd(depth)}`,
	].join(", ")})`;
}

export const pixelCorners = defineUtility({
	className: "pxc",
	values: { none: "none", sm: "sm", md: "md", lg: "lg" },
	transform(value: string) {
		switch (value) {
			case "sm":
				return { clipPath: pixelCornersPolygon("4px", 1) };
			case "md":
				return { clipPath: pixelCornersPolygon("4px", 2) };
			case "lg":
				return { clipPath: pixelCornersPolygon("8px", 2) };
			default:
				return { clipPath: "none" };
		}
	},
});
