let person = {
    firstName: 'Bob',
    lastName: 'Loblaw',
    address: {
        street: '123 Fake St',
        city: 'Emberton',
        state: 'NJ'
    }
}

function giveAwesomePowers(person) {
    // 可以使用 Object assign
    // let newPerson = Object.assign({}, person, {
    //     specialPower: 'invisibility'
    // })
    // 也可以用 spread operator
    let newPerson = {
        ...person,
        specialPower: 'invisibility'
    }
    return newPerson
}

let newPerson = giveAwesomePowers(person)

// Now Bob's clone has powers!
console.log(person)
console.log(newPerson)

// the
console.log('Are they the same?', person === newPerson) // false 