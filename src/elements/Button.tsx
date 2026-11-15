import type { ButtonHTMLAttributes, FC } from "react";
import { cva, cx } from "../../styled-system/css";

const buttonStyle = cva({
	base: { px: 4, py: 2, rounded: "lg", fontWeight: "medium", transition: "colors" },
	variants: {
		variant: {
			primary: { bg: "blue.600", _hover: { bg: "blue.700" }, color: "white" },
			secondary: { bg: "gray.200", _hover: { bg: "gray.300" }, color: "gray.800" },
		},
	},
	defaultVariants: { variant: "primary" },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
	children,
	variant = "primary",
	className = "",
	...props
}) => {
	return (
		<button className={cx(buttonStyle({ variant }), className)} {...props}>
			{children}
		</button>
	);
};
