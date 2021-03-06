const express = require("express");
const expressHandlebars = require("express-handlebars");
const handlers = require("./lib/handler");
const app = express();
const port = 3001;
import path from "path";
const __dirname = path.resolve();
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.get("/", handlers.home);
app.get("/about", handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `express started on http://localhost:${port}` +
        "; press Ctrl-C to terminate."
    );
  });
} else {
  module.exports = app;
}
