function delay(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`after delayed ${time / 1000} second`)
      resolve(time)
    }, time)
  })
}

delay(5000) // delay x second
  .then(function step2(time) {
    console.log(`it is done for delaying ${time / 1000} seconds in step2`)
    return delay(3000)
  })
  .then(function step3(time) {
    console.log(`it is done for delaying ${time / 1000} seconds in step3!`)
  })
console.log('something will happendfirst here before settimeout')