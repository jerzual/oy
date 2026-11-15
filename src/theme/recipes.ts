import { defineRecipe, defineSlotRecipe } from "@pandacss/dev";

/**
 * Design language: flat color blocks, hard edges, stair-stepped pixel corners.
 * No borders, no shadows. Depth and state are shown with a 4px "lip"
 * (a solid band painted at the bottom of the element with a background gradient).
 */
const lip = (color: string, size = "4px") =>
	`linear-gradient(to top, {colors.${color}} ${size}, transparent ${size})`;

const intents = ["primary", "secondary", "danger", "success", "warning", "info"] as const;
type Intent = (typeof intents)[number];

/** One variant per intent, keeping the keys typed (Object.fromEntries widens them to string). */
const byIntent = <T>(styles: (intent: Intent) => T) =>
	Object.fromEntries(intents.map((intent) => [intent, styles(intent)])) as Record<Intent, T>;

const solidIntent = (intent: string) => ({
	bg: intent,
	color: `${intent}.fg`,
	backgroundImage: lip(`${intent}.lip`),
	_hover: { bg: `${intent}.hover` },
	_focusVisible: { bg: `${intent}.hover`, backgroundImage: lip("focusRing") },
});

export const button = defineRecipe({
	className: "button",
	description: "Chunky pixel button with a pressable lip",
	jsx: ["Button"],
	base: {
		position: "relative",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "2",
		flexShrink: 0,
		fontFamily: "pixel",
		lineHeight: "none",
		textTransform: "uppercase",
		letterSpacing: "wide",
		whiteSpace: "nowrap",
		cursor: "pointer",
		userSelect: "none",
		outline: "none",
		pixelCorners: "sm",
		// the lip is inside the box, keep text centered on the face above it
		pb: "calc(var(--button-py) + 4px)",
		pt: "var(--button-py)",
		px: "var(--button-px)",
		transitionProperty: "background-color, transform",
		transitionDuration: "fast",
		transitionTimingFunction: "pixel",
		_active: {
			// "press" the button: lip disappears, face moves down by the lip size
			transform: "translateY(4px)",
			backgroundImage: "none",
			pb: "var(--button-py)",
		},
		_disabled: {
			bg: "bg.subtle",
			color: "fg.disabled",
			backgroundImage: "none",
			cursor: "not-allowed",
			transform: "translateY(4px)",
			pb: "var(--button-py)",
			_hover: { bg: "bg.subtle" },
		},
	},
	variants: {
		variant: {
			...byIntent(solidIntent),
			ghost: {
				bg: "transparent",
				color: "primary",
				_hover: { bg: "bg.subtle" },
				_focusVisible: { bg: "bg.subtle", backgroundImage: lip("focusRing") },
			},
		},
		size: {
			sm: { "--button-px": "spacing.3", "--button-py": "spacing.2", fontSize: "xs" },
			md: { "--button-px": "spacing.4", "--button-py": "spacing.3", fontSize: "sm" },
			lg: { "--button-px": "spacing.6", "--button-py": "spacing.4", fontSize: "md" },
		},
		fullWidth: {
			true: { w: "full" },
		},
	},
	defaultVariants: { variant: "primary", size: "md" },
});

export const input = defineRecipe({
	className: "input",
	description: "Flat text field, the lip lights up on focus",
	jsx: ["Input"],
	base: {
		display: "block",
		w: "full",
		minW: 0,
		appearance: "none",
		fontFamily: "pixel",
		lineHeight: "normal",
		bg: "bg.subtle",
		color: "fg",
		outline: "none",
		pixelCorners: "sm",
		backgroundImage: lip("bg.emphasis"),
		transitionProperty: "background-color",
		transitionDuration: "fast",
		transitionTimingFunction: "pixel",
		_placeholder: { color: "fg.placeholder", opacity: 1 },
		_hover: { bg: "bg.muted" },
		_focus: { bg: "bg.muted", backgroundImage: lip("primary") },
		_invalid: {
			backgroundImage: lip("danger"),
			_focus: { backgroundImage: lip("danger") },
		},
		_disabled: {
			color: "fg.disabled",
			cursor: "not-allowed",
			backgroundImage: "none",
			_hover: { bg: "bg.subtle" },
		},
		_readOnly: { backgroundImage: "none" },
	},
	variants: {
		size: {
			sm: { px: "2", pt: "2", pb: "3", fontSize: "xs" },
			md: { px: "3", pt: "3", pb: "4", fontSize: "sm" },
			lg: { px: "4", pt: "4", pb: "5", fontSize: "md" },
		},
	},
	defaultVariants: { size: "md" },
});

export const label = defineRecipe({
	className: "label",
	description: "Small uppercase field label",
	jsx: ["Label"],
	base: {
		display: "inline-flex",
		gap: "1",
		fontFamily: "pixel",
		fontSize: "xs",
		lineHeight: "tight",
		textTransform: "uppercase",
		letterSpacing: "wide",
		color: "fg.muted",
		cursor: "default",
		_disabled: { color: "fg.disabled" },
	},
	variants: {
		required: {
			true: { _after: { content: '"*"', color: "danger" } },
		},
	},
});

export const formField = defineSlotRecipe({
	className: "form-field",
	description: "Label + control + hint/error, stacked",
	jsx: ["FormField"],
	slots: ["root", "hint", "error"],
	base: {
		root: { display: "flex", flexDirection: "column", gap: "2", minW: 0 },
		hint: { fontSize: "xs", lineHeight: "normal", color: "fg.subtle" },
		error: {
			display: "flex",
			gap: "2",
			fontSize: "xs",
			lineHeight: "normal",
			color: "danger",
			_before: { content: '"!"', bg: "danger", color: "danger.fg", px: "1" },
		},
	},
});

export const card = defineSlotRecipe({
	className: "card",
	description: "Flat surface block with an optional solid header band",
	jsx: ["Card", "CardHeader", "CardTitle", "CardBody", "CardFooter"],
	slots: ["root", "header", "title", "body", "footer"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			bg: "bg",
			color: "fg",
			pixelCorners: "md",
			overflow: "hidden",
		},
		header: { display: "flex", alignItems: "center", gap: "3", px: "4", py: "3" },
		title: {
			fontFamily: "pixel",
			fontSize: "sm",
			lineHeight: "tight",
			textTransform: "uppercase",
			letterSpacing: "wide",
		},
		body: { display: "flex", flexDirection: "column", gap: "4", p: "4", flex: 1 },
		footer: {
			display: "flex",
			justifyContent: "flex-end",
			gap: "2",
			px: "4",
			py: "3",
			bg: "bg.surface",
		},
	},
	variants: {
		variant: {
			...byIntent((intent) => ({ header: { bg: intent, color: `${intent}.fg` } })),
			plain: { header: { bg: "bg.subtle", color: "fg" } },
		},
	},
	defaultVariants: { variant: "plain" },
});

export const modal = defineSlotRecipe({
	className: "modal",
	description: "Native <dialog> over a dithered backdrop",
	jsx: ["Modal"],
	slots: ["root", "content", "header", "title", "close", "body", "footer"],
	base: {
		root: {
			m: "auto",
			p: 0,
			w: "calc(100% - token(spacing.8))",
			maxH: "calc(100% - token(spacing.8))",
			bg: "transparent",
			color: "fg",
			overflow: "visible",
			_open: { animation: "pixel-pop {durations.normal} {easings.pixel}" },
			_backdrop: {
				// 50% checkerboard dither instead of a blurred/translucent overlay
				background:
					"repeating-conic-gradient({colors.bg.canvas} 0 25%, transparent 0 50%) 0 0 / 4px 4px",
			},
		},
		content: {
			display: "flex",
			flexDirection: "column",
			maxH: "inherit",
			bg: "bg",
			pixelCorners: "lg",
		},
		header: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			gap: "4",
			pl: "4",
			pr: "2",
			py: "2",
			bg: "primary",
			color: "primary.fg",
		},
		title: {
			fontFamily: "pixel",
			fontSize: "sm",
			lineHeight: "tight",
			textTransform: "uppercase",
			letterSpacing: "wide",
		},
		close: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			w: "8",
			h: "8",
			fontFamily: "pixel",
			fontSize: "sm",
			lineHeight: "none",
			cursor: "pointer",
			outline: "none",
			pixelCorners: "sm",
			_hover: { bg: "primary.hover" },
			_focusVisible: { bg: "primary.fg", color: "primary" },
		},
		body: { display: "flex", flexDirection: "column", gap: "4", p: "4", overflowY: "auto" },
		footer: {
			display: "flex",
			justifyContent: "flex-end",
			gap: "2",
			px: "4",
			py: "3",
			bg: "bg.surface",
		},
	},
	variants: {
		size: {
			sm: { root: { maxW: "xs" } },
			md: { root: { maxW: "md" } },
			lg: { root: { maxW: "lg" } },
		},
	},
	defaultVariants: { size: "md" },
});
