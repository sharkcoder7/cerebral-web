var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {

    var url = req.url
    if (url == '/') url = '/homepage.html'
  fs.readFile(__dirname + url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(80);
