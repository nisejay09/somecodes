/**
 * 异步操作之订阅/发布
 */

var result = {};

$.subscribe('done',function(){
    $.getJSON('./files/data_1.json',function(data){
        if(data.code == 1){
            result.data_1 = data.data;
            $.publish("done_1");
        }
    });
});

$.subscribe('done_1',function(){
    $.getJSON('./files/data_2.json',function(data){
        if(data.code == 1){
            result.data_2 = data.data;
            $.publish("done_2");
        }
    });
});

$.subscribe('done_2',function(){
    dealData(result);
});

function getData(){
   $.getJSON('./files/data.json',function(data){
       if(data.code == 1){
           result.data_0 = data.data;
           $.publish("done");
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