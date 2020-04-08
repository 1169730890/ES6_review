/**
 * 闭包可以用在许多地方。它的最大用处有两个，
 * 一个是前面提到的可以读取函数内部的变量，
 * 另一个就是让这些变量的值始终保持在内存中。
 */
function f1() {

    var n = 999;
    /**
     * 这段代码中另一个值得注意的地方，就是"nAdd=function(){n+=1}"这一行，
     * 首先在nAdd前面没有使用var关键字，因此nAdd是一个全局变量，而不是局部变量。其次，
     * nAdd的值是一个匿名函数（anonymous function），
     * 而这个匿名函数本身也是一个闭包，所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。
     */
    nAdd = function () {
        n += 1
    }
    weina = function(){
        console.log('weina')
    }
    age = 12

    function f2() {
        console.log(n);
    }

    return f2;

}

var result = f1();

result(); // 999

nAdd();

result(); // 1000
nAdd()
result(); // 1001
weina()
console.log(age)