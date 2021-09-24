const http = require("http");
const fs = require("fs");
const port = 3001;

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Error");
    } else {
      res.writeHead(responseCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      serveStaticFile(res, "/public/home.html", "text/html");
      break;
    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");
      break;
    case "/img/facebook.png":
      serveStaticFile(res, "/public/img/facebook.png", "image/png");
      break;
    case "/img/insta.png":
      serveStaticFile(res, "/public/img/insta.png", "image/png");
      break;
    case "/img/youtube.png":
      serveStaticFile(res, "/public/img/youtube.png", "image/png");
      break;
    default:
      serveStaticFile(res, "/public/404.html", "text/html", 404);
      break;
  }
});
server.listen(port, () =>
  console.log(
    `server started on port ${port}: ` + "press Ctrl-C to terminate..."
  )
);
