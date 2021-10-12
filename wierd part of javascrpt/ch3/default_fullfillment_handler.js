var p = Promise.resolve(43)
var p2 = p
    .then(
    //       function fullfilled() {
    //     console.log('不會到這裡')
    //   }
        null
        , function error(err) {
            console.log(`會到這裡, 錯誤為 ${err}`)
        }
    )