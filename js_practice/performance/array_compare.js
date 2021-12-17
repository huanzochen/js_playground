const shopCarts = ['j1', 'ff2', '3hj', '4sss', '5gh', '6ss', '7aqw']
const prevCart = ['klp3', 'jks32', '44sss', '3hj', '5gh', '6ss', '7aqw']

// let arr1Map = new Map([...array1.map((v, i) => [v, i])])

// array2.forEach((val) => arr1Map.has(val) && console.log(val))


const shopCartsMap = new Map(shopCarts.map((value) => [value, value]))

console.log(shopCartsMap)

shopCarts[0] = 'j99999'

console.log('after array mutation', shopCartsMap)

console.log('shopCarts has been mutate', shopCarts)