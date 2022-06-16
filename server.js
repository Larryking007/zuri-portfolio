var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();

      if (url === "/home") {
        filename = "home.html";
      } else if (url === "/about") {
        filename = "about.html";
      } else if (url === "/contact") {
        filename = "contact.html";
      } else {
        console.log("Hello world");
      }
    });
  })
  .listen(8080);
