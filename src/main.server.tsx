import { App } from "./app";
import "./style.css";
import renderToString from "preact-render-to-string";

export default async function render(_url: string, document: string) {
	const html = renderToString(<App />);
	return document.replace("<!--ssr-outlet-->", html);
}
