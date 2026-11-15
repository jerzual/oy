import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app";
import "@fontsource/press-start-2p/400.css";
import "./style.css";

hydrateRoot(
	document.getElementById("app")!,
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
