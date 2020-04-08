/**
 * class语法相对原型、构造函数、继承更接近传统语法，它的写法能够让对象原型的写法更加清晰、面向对象编程的语法更加通俗
这是class的具体用法。
 */
class Animal {
    constructor() {
      this.type = 'animal'
    }
    says(say) {
      console.log(this.type + 'says' + say)
    }
  }
  let animal = new Animal()
  animal.says('hello') // animal says hello
  
  class Cat extends Animal {
    constructor() {
      super()
      this.type = 'cat'
    }
  }
  let cat = new Cat()
  cat.says('hello') // cat says hell