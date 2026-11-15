import { defineSemanticTokens } from "@pandacss/dev";
import type { ColorName, FlavorName } from "@catppuccin/palette";

/** Flavor used when no `data-flavor` attribute is set. */
const DEFAULT_FLAVOR: FlavorName = "mocha";
const OTHER_FLAVORS = ["latte", "frappe", "macchiato"] as const satisfies FlavorName[];

type PerFlavor = ColorName | (Partial<Record<FlavorName, ColorName>> & { default: ColorName });

const pickFor = (color: PerFlavor, flavor: FlavorName) =>
	typeof color === "string" ? color : (color[flavor] ?? color.default);

/**
 * Builds a per-flavor token value, using the `_latte`, `_frappe`, `_macchiato`
 * conditions (mocha is the base). Every semantic color must be declared for each
 * flavor so that nested `data-flavor` subtrees resolve correctly.
 */
const perFlavor = (format: (flavor: FlavorName) => string) => ({
	value: {
		base: format(DEFAULT_FLAVOR),
		...Object.fromEntries(OTHER_FLAVORS.map((flavor) => [`_${flavor}`, format(flavor)])),
	},
});

/** Semantic color following the active flavor. */
const ctp = (color: PerFlavor) =>
	perFlavor((flavor) => `{colors.${flavor}.${pickFor(color, flavor)}}`);

/** Darker shade of a color, used for the 4px "lip" under buttons and inputs. */
const shade = (color: ColorName) =>
	perFlavor((flavor) => `color-mix(in srgb, {colors.${flavor}.${color}} 65%, black)`);

/** An interactive intent: face color, hover face, shaded lip, and readable text on top. */
const intent = (name: string, face: ColorName, hover: ColorName) => ({
	[name]: {
		DEFAULT: ctp(face),
		hover: ctp(hover),
		lip: shade(face),
		fg: ctp({ default: "crust", latte: "base" }),
	},
});

const intents = {
	...intent("primary", "mauve", "pink"),
	...intent("danger", "red", "maroon"),
	...intent("success", "green", "teal"),
	...intent("warning", "yellow", "peach"),
	...intent("info", "sapphire", "sky"),
};

export const semanticTokens = defineSemanticTokens({
	colors: {
		bg: {
			canvas: ctp("crust"),
			surface: ctp("mantle"),
			DEFAULT: ctp("base"),
			subtle: ctp("surface0"),
			muted: ctp("surface1"),
			emphasis: ctp("surface2"),
		},
		fg: {
			DEFAULT: ctp("text"),
			muted: ctp("subtext1"),
			subtle: ctp("subtext0"),
			placeholder: ctp("overlay0"),
			disabled: ctp("overlay1"),
			onAccent: ctp({ default: "crust", latte: "base" }),
		},
		focusRing: ctp("text"),
		...intents,
		secondary: {
			DEFAULT: ctp("surface1"),
			hover: ctp("surface2"),
			lip: shade("surface1"),
			fg: ctp("text"),
		},
	},
});
