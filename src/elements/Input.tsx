import type { FC, InputHTMLAttributes, Ref } from "react";
import { cx } from "../../styled-system/css";
import { input, type InputVariantProps } from "../../styled-system/recipes";
import { useFormField } from "./FormField";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
	InputVariantProps & {
		invalid?: boolean;
		ref?: Ref<HTMLInputElement>;
	};

/** Styled `<input>`. Inside a `FormField`, its id and aria attributes are wired automatically. */
export const Input: FC<InputProps> = ({ size, invalid, className, ...props }) => {
	const field = useFormField();
	const isInvalid = invalid ?? field?.invalid ?? false;
	return (
		<input
			id={field?.id}
			aria-describedby={field?.describedBy}
			aria-invalid={isInvalid || undefined}
			required={field?.required || undefined}
			disabled={field?.disabled || undefined}
			className={cx(input({ size }), className)}
			{...props}
		/>
	);
};
