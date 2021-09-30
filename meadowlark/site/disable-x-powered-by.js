const express = require("express");
const app = express();
const port = 3001;
app.disable("x-powered-by");
app.get("*", (req, res) => {
  res.send(
    `Open your dev tools and examine your headers;` +
      `you'll notice theere is bo x-powered-by header!`
  );
});

app.listen(port, () =>
  console.log(`\nnavigate to http://localhost:${port}/headers\n`)
);
