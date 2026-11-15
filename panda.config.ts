import { defineConfig, defineGlobalStyles, defineKeyframes, defineTextStyles } from "@pandacss/dev";

import { tokens } from "./src/theme/tokens";
import { semanticTokens } from "./src/theme/semantic-tokens";
import { pixelCorners } from "./src/theme/utilities";
import { button, card, formField, input, label, modal } from "./src/theme/recipes";

const keyframes = defineKeyframes({
	"pixel-pop": {
		from: { transform: "scale(0.9)", opacity: 0 },
		to: { transform: "scale(1)", opacity: 1 },
	},
	"pixel-blink": {
		"0%, 49%": { opacity: 1 },
		"50%, 100%": { opacity: 0 },
	},
	"pixel-shake": {
		"0%, 100%": { transform: "translateX(0)" },
		"25%": { transform: "translateX(-4px)" },
		"75%": { transform: "translateX(4px)" },
	},
});

const textStyles = defineTextStyles({
	display: {
		value: {
			fontFamily: "pixel",
			fontSize: "2xl",
			lineHeight: "none",
			textTransform: "uppercase",
		},
	},
	heading: {
		value: {
			fontFamily: "pixel",
			fontSize: "lg",
			lineHeight: "tight",
			textTransform: "uppercase",
		},
	},
	title: {
		value: {
			fontFamily: "pixel",
			fontSize: "md",
			lineHeight: "tight",
			textTransform: "uppercase",
			letterSpacing: "wide",
		},
	},
	body: { value: { fontFamily: "body", fontSize: "sm", lineHeight: "loose" } },
	caption: { value: { fontFamily: "body", fontSize: "xs", lineHeight: "normal" } },
});

const globalCss = defineGlobalStyles({
	"html, body": {
		bg: "bg.canvas",
		color: "fg",
		fontFamily: "body",
		fontSize: "sm",
		lineHeight: "loose",
		// keep pixel fonts crisp where the platform allows it
		WebkitFontSmoothing: "none",
		MozOsxFontSmoothing: "unset",
		textRendering: "optimizeSpeed",
	},
	"canvas, img": { imageRendering: "pixelated" },
	"::selection": { bg: "primary", color: "primary.fg" },
	"@media (prefers-reduced-motion: reduce)": {
		"*, *::before, *::after, *::backdrop": {
			animationDuration: "0ms !important",
			transitionDuration: "0ms !important",
		},
	},
});

export default defineConfig({
	// preset-panda is not used on purpose: its shadows, radii and tailwind colors
	// don't belong in this design system. Every token is defined in src/theme.
	presets: ["@pandacss/preset-base"],
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	conditions: {
		extend: {
			// catppuccin flavors, set with `data-flavor` on any ancestor (mocha is the default)
			latte: "[data-flavor=latte] &",
			frappe: "[data-flavor=frappe] &",
			macchiato: "[data-flavor=macchiato] &",
			mocha: "[data-flavor=mocha] &",
		},
	},

	theme: {
		breakpoints: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		tokens,
		semanticTokens,
		keyframes,
		textStyles,
		recipes: { button, input, label },
		slotRecipes: { formField, card, modal },
	},

	utilities: {
		extend: { pixelCorners },
	},

	globalCss,

	// The output directory for your css system
	outdir: "styled-system",
});
