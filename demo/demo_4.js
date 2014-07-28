/**
 * 异步操作之事件驱动
 */

function callback(deferred) {
    return function (data) {
        if (data.code == 1) {
            deferred.resolve(data.data);
        } else {
            deferred.reject("失败");
        }
    };
}


function getData() {
    var deferred = new Deferred();
    $.getJSON('./files/data.json', callback(deferred));
    return deferred.promise;
}

function getDataOne() {
    var deferred = new Deferred();
    $.getJSON('./files/data_1.json', callback(deferred));
    return deferred.promise;
}

function getDataTwo() {
    var deferred = new Deferred();
    $.getJSON('./files/data_2.json', callback(deferred));
    return deferred.promise;
}

function dealDataInTurn() {
    var st = new Date().getTime();
    getData()
        .then(function (data) {
            console.log(data);
            return getDataOne();
        })
        .then(function (data) {
            console.log(data);
            return getDataTwo();
        }).then(function (data) {
            console.log(data);
            var et = new Date().getTime();
            console.log("耗时："+ (et-st));
        });
}

function dealDataAll() {
    var deferred = new Deferred(),
        promises = [getData(), getDataOne(), getDataTwo()],
        st = new Date().getTime();

    deferred.all(promises)
        .then(function (data) {
            console.log(data);
            var et = new Date().getTime();
            console.log("耗时："+ (et-st));
        });
}


function init() {
//    dealDataInTurn();//串行异步

    dealDataAll();//并行异步
}


//初始化入口
init();