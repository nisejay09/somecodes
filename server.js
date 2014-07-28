
var http = require("http");
var route = require("./route.js").route;

var server = http.createServer(function(req,res){
    route(req,res);
});

server.listen(1314,function(){
    console.log("Server is started ...");
});