function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}
/**
 * 这个test()函数有两个参数，这两个参数都是函数，如果执行成功，我们将调用resolve('200 OK')，
 * 如果执行失败，我们将调用reject('timeout in ' + timeOut + ' seconds.')。
 * 可以看出，test()函数只关心自身的逻辑，并不关心具体的resolve和reject将如何处理结果。
 */