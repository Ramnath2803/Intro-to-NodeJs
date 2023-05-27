var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text\html' });
    var queryParams = url.parse(req.url, true).query;
    var fullName = queryParams.fName+" "+queryParams.lName;
   // res.write(fName);
    res.end(fullName);
}).listen(8080);