// AvatarPreview display heart containers and gold over the main game screen.

import { FunctionComponent } from "preact";

import { useRef } from "preact/hooks";
import { AvatarPainter } from "../generator/AvatarPainter";

export interface AvatarPreviewAttrs {
	seed: string;
}

export const AvatarPreview: FunctionComponent<AvatarPreviewAttrs> = (
	props: AvatarPreviewAttrs,
) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	if (canvasRef.current) {
		const builder = new AvatarPainter(canvasRef.current.getContext("2d")!);
		builder.withSeed(props.seed);
		builder.draw();
	}
	return (
		<div class="flex items-center justify-center">
			<canvas
			  class="w-64 h-64"
				style={{imageRendering: "pixelated"}}
			  ref={canvasRef} width="16" height="16"
			 data-seed={props.seed} />
		</div>
	);
};
