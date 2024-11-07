import { FunctionComponent } from "preact";

export const Page: FunctionComponent = ({ children }) => {
	return (
		<main class="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
			<div class="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
				{children}
			</div>
		</main>
	);
};
