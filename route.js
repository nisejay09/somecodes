var demo = require("./demo/demo.js").demo;

exports.route = function(req,res){
    var reqUrl = req.url;
    switch (reqUrl){
        case '/':
            console.log(22222222);
            demo(res);
            break;
        default :
//            demo();
            break;
    }
};