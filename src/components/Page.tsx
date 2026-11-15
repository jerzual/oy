import type { FC, PropsWithChildren } from "react";
import { css } from "../../styled-system/css";

export const Page: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main
			className={css({
				minH: "100dvh",
				bg: "bg.canvas",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				p: "4",
			})}
		>
			<div
				className={css({
					bg: "bg",
					color: "fg",
					pixelCorners: "lg",
					p: "8",
					w: "full",
					maxW: "sm",
				})}
			>
				{children}
			</div>
		</main>
	);
};
