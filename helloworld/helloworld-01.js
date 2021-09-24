const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("homepage");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("about");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      break;
  }
});
server.listen(port, () =>
  console.log(
    `server started on port ${port}: ` + "press Ctrl-C to terminate..."
  )
);
