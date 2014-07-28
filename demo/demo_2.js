/**
 * 异步操作之回调函数的恶魔
 */

function getData(callback){
    //从服务端获取数据
   $.getJSON('./files/data.json',function(data){

       if(data.code == 1){
           var result_1 = data.data;
           $.getJSON('./files/data_1.json',function(data){

               if(data.code == 1){
                   var result_2 = data.data;

                   $.getJSON('./files/data_2.json',function(data){
                       if(data.code == 1){

                           var result_3 = data.data;

                           callback(result_1,result_2,result_3);

                       }
                   });
               }

           });
       }

   });
}

function dealData(data1,data2,data3){
    console.log(data1);
    console.log(data2);
    console.log(data3);
}


function init(){
    getData(dealData);
}


//初始化入口
init();