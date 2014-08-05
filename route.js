var demo = require("./demo/node.js").demo;

exports.route = function(req,res){
    var reqUrl = req.url;
    switch (reqUrl){
        case '/':
            demo(res);
            break;
        default :
//            demo();
            break;
    }
};