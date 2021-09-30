const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const port = 3002;

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) =>
  res.render('Check out our "<a href="/about">About</a>" page!')
);
app.listen(port, () =>
  console.log(`\nnavigate to http://localhost:${port}/about\n`)
);
