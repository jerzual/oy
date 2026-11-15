import type { ButtonHTMLAttributes, FC } from "react";
import { cx } from "../../styled-system/css";
import { button, type ButtonVariantProps } from "../../styled-system/recipes";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps;

export const Button: FC<ButtonProps> = ({
	variant,
	size,
	fullWidth,
	type = "button",
	className,
	...props
}) => (
	<button type={type} className={cx(button({ variant, size, fullWidth }), className)} {...props} />
);
