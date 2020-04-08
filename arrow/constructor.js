/**
 * 类的写法
 */
class Animal {
    constructor() {
      this.type = "animal";
    }
    say(val) {
      setTimeout(function () {
        // console.log(this); //window
        console.log(this.type + " says " + val);
      }, 1000)
    }
  }
  var animal = new Animal();
  animal.say("hi"); //undefined says hi

/**
 * 箭头函数的this作用域
 */
  class Animal2 {
    constructor() {
      this.type = "animal";
      this.name = 'dog'
    }
    say(val) {
      setTimeout(() => {  // 建投函数 承接上下文的this关键字 this 指向的是定义时所在的对象，而不是使用时所在的对象
        console.log(this); //Animal
        console.log(this.type + ' says ' + val);
      }, 1000)
    }
  }
  var animal2 = new Animal2();
  animal2.say("hi"); //animal says hi
  console.log(animal2.name)


  class Tree{
      constructor(){
          this.name = '苹果'
          this.type = 'fruit tree'
      }

      canEat(){
          setTimeout(()=>{
              console.log(this)
              console.log(this.type)
          },1000)
      }
  }

  tree1 = new Tree()
  tree1.canEat()