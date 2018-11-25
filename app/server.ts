import express from "express";
import sockjs from "sockjs";
import mithrilExpress from "mithril-express-middleware";
import * as browserMock from "mithril/test-utils/browserMock";

import routes from "./routes";

// use a mock DOM so we can run mithril on the server
// browserMock(global);

const app = express();
app.set("view engine", "pug");
app.use("/assets", express.static("assets"));

app.use(mithrilExpress(routes));

app.get("/", (req, res) =>
  res.render("index", { title: "Hey", message: "Hello there!" }),
);

const server = app.listen(8081, "0.0.0.0", () => {
  console.log(" [*] Listening on 0.0.0.0:8081");
});

const sockjsEndpoint = sockjs.createServer({
  prefix: "/api",
});

sockjsEndpoint.on("connection", conn => {
  conn.on("data", msg => conn.write(msg));
});

sockjsEndpoint.installHandlers(server, { prefix: "/api" });

export default server;
