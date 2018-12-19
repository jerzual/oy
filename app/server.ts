import express from "express";
import sockjs from "sockjs";
import path from "path";

import routes from "./routes";

// use a mock DOM so we can run mithril on the server
// browserMock(global);

export const app = express();

app.set("views", path.join(process.cwd(), "app/server/views"));
app.set("view engine", "pug");

// static files
app.use("/*.*", express.static(path.join(process.cwd(), "dist", "www")));

/*
routes.forEach(route => {
  app.get("/", (req, res) =>
    res.render("index", { 
      title: "Hey", 
      message: "Hello there!" 
    }),
  );
});
*/
const server = app.listen(8081, "0.0.0.0", () => {
  console.log(" [*] Listening on 0.0.0.0:8081");
});

const sockjsEndpoint = sockjs.createServer({
  prefix: "/api",
});

sockjsEndpoint.on("connection", conn => {
  console.log(`connection from ${conn.remoteAddress}`);
  conn.on("data", msg => {
    console.log(`data ${msg}`);
    conn.write(msg);
  });
  conn.on("disconnect", msg => {
    console.log(`disconnect ${msg}`);
  });
});

sockjsEndpoint.installHandlers(server, { prefix: "/api" });

export default server;
