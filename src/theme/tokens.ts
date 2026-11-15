import { defineTokens } from "@pandacss/dev";
import { flavorEntries } from "@catppuccin/palette";

/**
 * Raw catppuccin colors, one group per flavor:
 * `latte.mauve`, `frappe.base`, `macchiato.text`, `mocha.crust`…
 *
 * Don't use them directly in components, prefer the semantic tokens
 * (see semantic-tokens.ts) so that flavor switching works.
 */
const colors = Object.fromEntries(
	flavorEntries.map(([flavorName, flavor]) => [
		flavorName,
		Object.fromEntries(
			flavor.colorEntries.map(([colorName, color]) => [colorName, { value: color.hex }]),
		),
	]),
);

/** 4px pixel grid: `1` = 4px, `2` = 8px, `4` = 16px… expressed in rem to respect user zoom. */
const steps = [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];
const spacing = Object.fromEntries(
	steps.map((step) => [String(step), { value: step === 0 ? "0" : `${step * 0.25}rem` }]),
);

/** Pixel fonts render crisp only at multiples of their native grid (8px for Press Start 2P). */
const pixelFont = '"Press Start 2P", "Silkscreen", ui-monospace, monospace';

export const tokens = defineTokens({
	colors: {
		...colors,
		transparent: { value: "transparent" },
		current: { value: "currentColor" },
	},
	fonts: {
		pixel: { value: pixelFont },
		body: { value: pixelFont },
		mono: { value: "ui-monospace, SFMono-Regular, Menlo, monospace" },
	},
	fontSizes: {
		xs: { value: "0.5rem" }, // 8px
		sm: { value: "0.75rem" }, // 12px
		md: { value: "1rem" }, // 16px
		lg: { value: "1.5rem" }, // 24px
		xl: { value: "2rem" }, // 32px
		"2xl": { value: "3rem" }, // 48px
		"3xl": { value: "4rem" }, // 64px
	},
	fontWeights: {
		// pixel fonts have a single weight, faux-bold looks blurry
		normal: { value: "400" },
	},
	lineHeights: {
		none: { value: "1" },
		tight: { value: "1.25" },
		normal: { value: "1.5" },
		loose: { value: "2" },
	},
	letterSpacings: {
		tight: { value: "-0.05em" },
		normal: { value: "0" },
		wide: { value: "0.1em" },
	},
	spacing,
	sizes: {
		...spacing,
		full: { value: "100%" },
		min: { value: "min-content" },
		max: { value: "max-content" },
		fit: { value: "fit-content" },
		xs: { value: "20rem" },
		sm: { value: "24rem" },
		md: { value: "32rem" },
		lg: { value: "48rem" },
		xl: { value: "64rem" },
	},
	// brutalist: hard edges only. Use the `pixelCorners` utility for notched corners.
	radii: {
		none: { value: "0" },
	},
	durations: {
		instant: { value: "0ms" },
		fast: { value: "80ms" },
		normal: { value: "160ms" },
		slow: { value: "320ms" },
	},
	easings: {
		// stepped animations look like sprite frames rather than smooth tweens
		pixel: { value: "steps(4, end)" },
		pixelCoarse: { value: "steps(2, end)" },
		linear: { value: "linear" },
	},
	zIndex: {
		hide: { value: -1 },
		base: { value: 0 },
		hud: { value: 10 },
		overlay: { value: 100 },
		modal: { value: 1000 },
		toast: { value: 1100 },
	},
	// intentionally empty: no shadows, no borders in this design system
	shadows: {},
	borders: {},
});
