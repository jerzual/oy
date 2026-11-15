import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./app";
import "./style.css";

export default async function render(url: string, document: string) {
	const html = renderToString(
		<StrictMode>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</StrictMode>,
	);
	return document.replace("<!--ssr-outlet-->", html);
}
