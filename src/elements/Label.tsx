import type { FC, LabelHTMLAttributes } from "react";
import { cx } from "../../styled-system/css";
import { label, type LabelVariantProps } from "../../styled-system/recipes";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & LabelVariantProps;

export const Label: FC<LabelProps> = ({ required, className, htmlFor, children, ...props }) => (
	<label htmlFor={htmlFor} className={cx(label({ required }), className)} {...props}>
		{children}
	</label>
);
