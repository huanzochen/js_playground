const person = {
    name: 'tommy',
    age: 24,
    location: 'Taipei'
}

// This is assignment, a const variable can not be reassigned.
// person = {
//     name: 'kevin',
//     age: '24',
//     location: 'PingTung'
// }
console.log(person)

// This is mutation, even a const variable is able to mutate.
person.name = 'kevin'
console.log(person)