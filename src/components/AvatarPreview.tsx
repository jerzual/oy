// AvatarPreview display heart containers and gold over the main game screen.

import { useEffect, useRef, type FC } from "react";
import { AvatarPainter } from "../generator/AvatarPainter";
import { css } from "../../styled-system/css";

export interface AvatarPreviewAttrs {
	seed: string;
}

export const AvatarPreview: FC<AvatarPreviewAttrs> = (props: AvatarPreviewAttrs) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const context = canvasRef.current?.getContext("2d");
		if (!context) return;
		const builder = new AvatarPainter(context);
		builder.withSeed(props.seed);
		builder.draw();
	}, [props.seed]);
	return (
		<div className={css({ display: "flex", alignItems: "center", justifyContent: "center" })}>
			<canvas
				className={css({ w: 64, h: 64 })}
				style={{ imageRendering: "pixelated" }}
				ref={canvasRef}
				width="16"
				height="16"
				data-seed={props.seed}
			/>
		</div>
	);
};
