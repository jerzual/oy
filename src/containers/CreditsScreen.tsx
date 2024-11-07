import { FunctionalComponent } from "preact";

export interface CreditsScreenAttrs {
	type?: string;
}

export const CreditsScreen: FunctionalComponent<CreditsScreenAttrs> = () => {
	return (
		<div id="credits" class="creditsScreen">
			<h2>Credits</h2>
			<ul>
				<li>Code and design by jibhaine</li>
				<li>Tiles and character sprites by thisisellian</li>
				<li>
					Contain code from these open-source projects :
					<ul>
						<li />
					</ul>
				</li>
			</ul>
		</div>
	);
};
