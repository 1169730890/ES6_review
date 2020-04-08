/**
 * es6方法,Set本身是一个构造函数，它类似于数组，但是成员值都是唯一的。
 */
const set = new Set([1,2,3,4,4])
console.log([...set] )// [1,2,3,4]
console.log(Array.from(new Set([2,3,3,5,6]))); //[2,3,5,6]