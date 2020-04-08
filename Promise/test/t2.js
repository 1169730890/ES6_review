// resolve  pending -> resolved
// reject   pending -> rejected

// status 只改变一次 就结束了循环
// promise  只会resolve一次 


const promise = new Promise((resove,reject)=>{
    resove('运行成功的结果作为参数传递出去')
    reject('运行失败的结构作为参数传递出去')
    resove('33')
})

promise.then((res)=>{
    console.log(res)

}).catch((err)=>{
    console.log(err)
})