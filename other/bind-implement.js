let person = {
  'name': 'tommy',
  'age': 23,
  getName: function() {
    console.log(`go inside getName function! age 
    is = ${this.age}`)
    return this.name
  }
}

function callMeMaybe(city) {
  console.log(`Hi! name = ${this.name} 
  age = ${this.age} city = ${arguments[0]} 
  state is ${arguments[1]}`)
}
let callBinded = callMeMaybe.bind(person, 'Hsinbei')
callBinded('aaa')

const getCallBind = person.getName.bind(person)
// console.log(getCallBind())