import type { FC, PropsWithChildren } from "react";
import { css } from "../../styled-system/css";

export const Page: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main
			className={css({
				minH: "screen",
				bgGradient: "to-br",
				gradientFrom: "blue.900",
				gradientTo: "purple.900",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			})}
		>
			<div
				className={css({
					bg: "white/10",
					backdropBlur: "lg",
					p: 8,
					rounded: "2xl",
					shadow: "2xl",
					w: 96,
				})}
			>
				{children}
			</div>
		</main>
	);
};
