import type { FC, FormEvent } from "react";

import { Button, FormField, Input } from "../elements";
import { css } from "../../styled-system/css";

export interface SeedInputAttributes {
	seed: string;
	onChange: (seed: string) => void;
	onSubmit: () => void;
}

export const SeedInput: FC<SeedInputAttributes> = (props: SeedInputAttributes) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onSubmit();
	};
	return (
		<form
			className={css({ display: "flex", alignItems: "flex-end", gap: "2" })}
			onSubmit={handleSubmit}
		>
			<FormField id="seed" label="Enter your name" className={css({ flex: 1 })}>
				<Input
					type="text"
					placeholder="QWERTY42"
					maxLength={8}
					autoComplete="off"
					value={props.seed}
					onChange={(event) => props.onChange(event.target.value)}
				/>
			</FormField>
			<Button type="submit">Play</Button>
		</form>
	);
};
