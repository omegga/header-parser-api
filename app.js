var http = require("http");
var server = http.createServer(function(req, res) {
    var h = req.headers;
    var userAgent = h["user-agent"].split("(")[1].split(")")[0];
    var result = {
        ipaddress: h["x-forwarded-for"],
        language: h["accept-language"].slice(0,5),
        software: userAgent
    }
    
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify(result));

}).listen(process.env.PORT || 1337);