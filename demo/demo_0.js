/**
 * 同步操作
 */

function getData(){
    //硬编码数据
    var data = [
        {id:1,name:'李四',age:24,job:"programmer"},
        {id:2,name:'王五',age:26,job:"manager"},
        {id:3,name:'张三',age:19,job:"boss"},
        {id:4,name:'王麻子',age:30,job:"dba"},
        {id:5,name:'宝器',age:25,job:"engineer"}
    ];

    return data;
}


function dealData(data){
    var result = orderByAge(data);

    return result;
}

function orderByAge(data){
    return data.sort(function(a,b){
        return a.age - b.age;
    });
}

function init(){
    var result = getData();

    result = dealData(result);

    //展示数据
    console.log(result);
}


//初始化入口
init();