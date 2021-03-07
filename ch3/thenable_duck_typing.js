var o = { then: function() {
  console.log('this is a duck typing then() function')
} }

// make `v` be `[[Prototype]]`-linked to `o`
var v = Object.create(o)

v.someStuff = 'cool'
v.otherStuff = 'not so cool'

console.log(v.hasOwnProperty('then'))	

// not in here
v.then(function () {
  console.log('in v.then() now')
})