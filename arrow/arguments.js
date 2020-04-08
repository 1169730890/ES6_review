/**
 * 箭头函数不绑定arguments
 * 函数内部可用的 arguments 对象来访问函数的实参
 */
var arguments = 42;
var fn = () => arguments;
console.log(fn()); // 42

function foo() {
    console.log("arguments is",arguments)
    var f = (i) => arguments[0]+i;
    return f(2);
}
console.log(foo(2,3)); // 3