// AvatarPreview display heart containers and gold over the main game screen.

import { Component, h } from "preact";
import * as React from "preact";

import "./AvatarPreview.scss";

export interface AvatarPreviewAttrs {
	seed: string;
}

export class AvatarPreview extends Component<AvatarPreviewAttrs, any> {
	public render(props: any) {
		return <div class="avatarPreview" />;
	}
}
