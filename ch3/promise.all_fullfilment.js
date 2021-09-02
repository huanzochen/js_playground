function p1 (time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('i want to do somthing in p1')
            resolve('p1 resoved message')
        }, time)
    })
}

function p2 (time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('i want to do somthing in p2')
            resolve('p2 resoved message')
        }, time)
    })
}

Promise.all([p1(1000), p2(2000)])
    .then(function(values) {
    // fullfillment
        console.log('it has been fillfilled')
        console.log(values)
    }, function(err) {
    //rejection
        console.log('it has been rejected')
        console.log(err)
    })

