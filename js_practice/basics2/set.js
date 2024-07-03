const a = new Set(['1111', '2222', '3333'])
console.log('a.length', a.length)
console.log('a[0]:', a[0])

for (let cur of a) {
  console.log('cur:', cur)
}

// Array can not be compared with Set
const b = new Set([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [1, 2, 3, 4, 5]])
for (let cur of a) {
  const newNum = [1, 2, 3, 4, 5]

  console.log('b.has(newNum):', b.has(newNum))
}

const c = new Set(['1111', '2222', '3333'])
for (let cur of c) {
  const newNum = '1111'
  console.log('c.has(newNum):', c.has(newNum))
}