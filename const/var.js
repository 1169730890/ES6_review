function f1() {

    var n = 999;

    function f2() {
        console.log(n); // 999
    }
    return f2

}
result = f1()
result()