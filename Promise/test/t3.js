// 不明白

Promise.resolve(1)
.then(3)
.then(Promise.resolve(3))
.then(console.log)