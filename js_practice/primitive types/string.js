
// String are indexed
let me = 'tommy'
console.log(me[2])
console.log(me[99])

let result = 'tommy'
console.log(typeof result) // string

// String methods
let msg = '   leave me alone right  me    now      .        '
console.log(msg.toUpperCase(), 'end')
console.log(msg.trim(), 'end')

// indexOf() method.
console.log(msg.indexOf('me'))

// chain them
console.log('  hello tommy'.trim().toUpperCase())

console.log('lol'.repeat(10))

// string template literals
let price = 10
let qty = 2
console.log(`I bought a cat ${price} with ${qty} .Total is $${price * qty}`)
