import { useState, type FC } from "react";
import { css } from "../../styled-system/css";

export interface InputAttrs {
	id: string;
	type: string;
	label?: string;
	placeholder?: string;
	max?: number;
	onChange: (value: string) => void;
}

export const Input: FC<InputAttrs> = (props: InputAttrs) => {
	const [value, setValue] = useState("");
	const onChange = (value: string) => {
		setValue(value);
		props.onChange(value);
	};
	return (
		<label>
			{props.label ? (
				<span
					className={css({
						flex: 1,
						p: 4,
						borderWidth: "1px",
						rounded: "md",
						color: "white",
						lineHeight: 8,
					})}
				>
					{props.label}
				</span>
			) : null}
			<input
				id={props.id}
				className={css({
					flex: 1,
					p: 4,
					borderWidth: "1px",
					borderColor: "black",
					rounded: "md",
					color: "white",
					bgGradient: "to-b",
					gradientFrom: "gray.800",
					gradientTo: "gray.900",
					lineHeight: 8,
					shadow: "inner",
				})}
				value={value}
				placeholder={props.placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
		</label>
	);
};
