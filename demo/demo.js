/**
 * 异步编程
 */

var fs  = require("fs");
var encodeType = 'UTF-8';

exports.demo = function(res){

    res.writeHead(200, {'Content-Type': 'text/plain; charset='+encodeType});
    res.write('开始读取文件',encodeType);
    fs.readFile('./files/demo1.txt',function(err,data){
        if(err){throw err}
        res.write('读取文件成功：',encodeType);
        res.write(data);
        res.end();
    });
    res.write("已经发起读请求",encodeType);

};