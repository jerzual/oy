import PouchDB from "pouchdb";
import Store from "reactive-state";
import App from "./app";
import SockJS from "sockjs-client";

const db = new PouchDB("oy");
const sockets = new SockJS(`ws:localhost:8080`);
const app = new App();

app.initialize(document);

// hot reload webpack
if (module["hot"]) {
  console.log("HMR enabled");
  /*
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
  })
  */
}
