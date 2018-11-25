import express from "express";
import sockjs from "sockjs";
import path from "path";

import routes from "./routes";

// use a mock DOM so we can run mithril on the server
// browserMock(global);

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/assets", express.static("assets"));

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
