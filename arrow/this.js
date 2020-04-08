/**
 * 箭头函数中的this指向的是定义时的this，而不是执行时的this。
 * 也就是说箭头函数没有自己的this，其内部的this绑定到它的外围作用域。对象内部的箭头函数若有this，则指向对象的外围作用域。
 */

this.color = "red";
//let 声明的全局变量不具有全局属性，即不能用window.访问
let color = "green";
let obj = {
    color: "blue",
    getColor: () => {
        return this.color;//this指向window
    }
};
let sayColor = () => {
    return this.color;//this指向window
};
console.log(obj.getColor()) //red
console.log(sayColor())