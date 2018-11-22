import express from 'express';
import pug from 'pug';
import mithrilExpress from "mithril-express-middleware";

import * as browserMock from "mithril/test-utils/browserMock";

// use a mock DOM so we can run mithril on the server
browserMock(global);

import app from "./app";
import routes from "./routes";

app.use(mithrilExpress(routes));

const server = express();
server.set('view engine', 'pug');
server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const appString = renderToString(<App />);

  res.send(pug({
    body: appString,
    title: 'OY'
  }));
});

server.listen(8080);