import { createContext, useContext, useId, type FC, type ReactNode } from "react";
import { cx } from "../../styled-system/css";
import { formField } from "../../styled-system/recipes";
import { Label } from "./Label";

interface FormFieldContextValue {
	id: string;
	describedBy?: string;
	invalid: boolean;
	required: boolean;
	disabled: boolean;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

/** Wiring (id, aria-describedby, aria-invalid…) for a control rendered inside a `FormField`. */
export const useFormField = () => useContext(FormFieldContext);

export interface FormFieldProps {
	label: ReactNode;
	/** id of the control, generated when omitted */
	id?: string;
	hint?: ReactNode;
	/** error message, also marks the control as invalid */
	error?: ReactNode;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	children: ReactNode;
}

export const FormField: FC<FormFieldProps> = ({
	label,
	id,
	hint,
	error,
	required = false,
	disabled = false,
	className,
	children,
}) => {
	const generatedId = useId();
	const controlId = id ?? generatedId;
	const hintId = hint ? `${controlId}-hint` : undefined;
	const errorId = error ? `${controlId}-error` : undefined;
	const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
	const classes = formField();

	return (
		<FormFieldContext.Provider
			value={{ id: controlId, describedBy, invalid: Boolean(error), required, disabled }}
		>
			<div className={cx(classes.root, className)} data-disabled={disabled || undefined}>
				<Label htmlFor={controlId} required={required} data-disabled={disabled || undefined}>
					{label}
				</Label>
				{children}
				{hint ? (
					<p id={hintId} className={classes.hint}>
						{hint}
					</p>
				) : null}
				{error ? (
					<p id={errorId} className={classes.error} role="alert">
						{error}
					</p>
				) : null}
			</div>
		</FormFieldContext.Provider>
	);
};
