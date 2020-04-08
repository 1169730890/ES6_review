const promise = new Promise((resove,reject)=>{
    console.log(1)
    resove()
    console.log(2)
})

promise.then(()=>{
    console.log(3)
})

console.log(4)
/**
 * 首先 Promise 新建后立即执行，所以会先输出 1，2，而 
 * Promise.then() 内部的代码在 当次 事件循环的 结尾 立刻执行 ，
 * 所以会继续输出4，最后输出3。
 */