// For arrays:
let nums = [1, 2, 3]
let newNums = [...nums]
console.log(nums === newNums) // => false! it's a new array!

// For objects 
let person = {
    name: 'Liz',
    age: 32
}
let newPerson = { ...person }
console.log(person === newPerson) // => false! it's a new object!

// Internal properties are left alone:
let company = {
    name: 'Foo Corp',
    people: [
        { name: 'Joe' },
        { name: 'Alice' }
    ]
}
let newCompany = { ...company }
console.log(newCompany === company) // => false! it's a new object!
console.log(newCompany.people === company.people) // => true! it's a same object!