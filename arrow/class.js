/**
 * 箭头函数不能用于构造函数
 */
var Box = function(age){
    this.name = 'weina'
    this.age = age
}

// var Box3 =age=>{
//     this.age = age
// }
// var obj = new Box3(3)  //这里报错
// console.log(obj.age)


class Box2{
    constructor(){
        this.age = 3
        this.name = '123'
    }
}

var box = new Box(23)
console.log(box.name)