/**
 * promise pending fullfilled  rejected
 */
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

var light = function (timmer, cb) {
    return new Promise((resolve, reject) =>{
        setTimeout( ()=> {
            cb();
            resolve();
        }, timmer);
    });
};

var step = ()=> {
    Promise.resolve()
    .then( ()=> light(3000, red)
    ).then( ()=> light(2000, green)
    ).then( ()=> {light(1000, yellow)
    }).then( () =>{ step()});
}

step();



