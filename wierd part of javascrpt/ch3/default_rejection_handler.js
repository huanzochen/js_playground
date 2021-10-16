var p = new Promise(function(resolve, reject) {
    reject('Oops')
})
var p2 = p
    .then(function fullfilled() {
        console.log('不會到這裡')
    }
    //   , function error(err) {
    // console.log(`會到這裡, 錯誤為 ${err}`)
    //   }
    )