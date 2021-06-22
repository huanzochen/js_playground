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
    person.specialpower = 'invisibility'
    return person
}

// 來看看原本的 person
console.log(person)

// 宣告一個 "好像" 是新的 person let 變數?
let samePerson = giveAwesomePowers(person)

// 看看原本的 person
console.log(person)

// 再看看理當是新的 person
console.log(samePerson)

// 他們相同嗎? 結果是一樣的 object
console.log('Are they the same?', person === samePerson)