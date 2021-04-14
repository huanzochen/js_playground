var aaa = (function() {
  console.log('IIFE!')
  return 'A IIFE aaa has done.'
})()


console.log(aaa)

// other type

var bbb = (function() {
  console.log('IIFE bbb!')
  return 'A IIFE bbb has done'
}())

var ccc = (() => {
  console.log('IIFE! arrow function ccc!')
  return 'A IIFE arrow function ccc has done!' 
})()

console.log(bbb)
console.log(ccc)