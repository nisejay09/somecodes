/**
 * 异步操作之事件驱动
 */

var $event_0 = $("<p></p>");//创建一个jQuery对象，利用其绑定事件(这个语法有些蛋疼)
var $event_1 = $("<p></p>");
var $event_2 = $("<p></p>");
var result = {};

$event_0.on('done',function(){
    $.getJSON('./files/data_1.json',function(data){
        if(data.code == 1){
            result.data_1 = data.data;
            $event_1.trigger("done");
        }
    });
});

$event_1.on('done',function(){
    $.getJSON('./files/data_2.json',function(data){
        if(data.code == 1){
            result.data_2 = data.data;
            $event_2.trigger("done");
        }
    });
});

$event_2.on('done',function(){
    dealData(result);
});

function getData(){
   $.getJSON('./files/data.json',function(data){
       if(data.code == 1){
           result.data_0 = data.data;
           $event_0.trigger("done");
       }

   });
}

function dealData(result){
    console.log(result);
}


function init(){
    getData();
}


//初始化入口
init();