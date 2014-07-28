/**
 * 异步操作之回调函数
 */

function getData(callback){
    //从服务端获取数据
   $.getJSON('./files/data.json',callback);
}

function dealData(data){
    if(data.code == 1){
        var result = orderByAge(data.data);

        //展示数据
        console.log(result);
    }else{
        //处理失败
        console.log("failed");
    }
}

function orderByAge(data){
    console.log(data);
    return data.sort(function(a,b){
        return a.age - b.age;
    });
}

function init(){
    getData(dealData);
}


//初始化入口
init();