/**
 * 异步编程-事件驱动
 */

var fs  = require("fs");
var EventEmitter  = require("events").EventEmitter;
var event = new EventEmitter();
var result = {};

event.on('getData',function(callback){
    fs.readFile('files/data.json','utf-8',function(err,data){
        console.log(err);
        if(err) {throw err}
        result.data_0 = JSON.parse(data).data;
        event.emit('getDataOne',callback);
    });
});

event.on('getDataOne',function(callback){
    fs.readFile('files/data_1.json','utf-8',function(err,data){
        if(err){throw err}
        result.data_1 = JSON.parse(data).data;
        event.emit('getDataTwo',callback);
    });
});

event.on('getDataTwo',function(callback){
    fs.readFile('files/data_2.json','utf-8',function(err,data){
        result.data_2 = JSON.parse(data).data;
        callback();
    });
});

exports.demo = function(res){
    event.emit('getData',function(){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.write(JSON.stringify(result));
        res.end();
    });
};