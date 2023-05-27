var http = require('http');
var fs = require('fs');
var url= require('url');

http.createServer(function (req, res) {
var htmlpageRender="."+url.parse(req.url,true).pathname;

if(htmlpageRender=="./") htmlpageRender="./index.html";
if(!htmlpageRender.includes(".html"))
htmlpageRender+=".html";
    fs.readFile(htmlpageRender, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text\html' });
            return res.write("404 error page Not found");

        }
        res.writeHead(200, { 'Content-Type': 'text\html' });
        res.write(data);
        return res.end();
    })

}).listen(8080);