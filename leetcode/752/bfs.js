/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

const turnUp = (codes, index) => {
  const codesArray = codes.split('')
  const current = parseInt(codesArray[index])
  if (current === 9) codesArray[index] = '0'
  else {
    codesArray[index] = (current + 1).toString()
  }
  return codesArray.join("")
}


const turnDown = (codes, index) => {
  const codesArray = codes.split('')
  const current = parseInt(codesArray[index])
  if (current === 0) codesArray[index] = '9'
  else {
    codesArray[index] = (current - 1).toString()
  }
  return codesArray.join("")
}


var openLock = function (deadends, target) {
  let step = 0
  // Dead ends Set
  let deadendsSet = new Set(deadends)

  // The code has been traversed will be keep here
  let visited = new Set()
  const initalValue = "0000"
  // The queue to accommodate the tree with codes.
  let q = []
  q.push("0000")

  while (q.length > 0) {
    let size = q.length

    for (let i = 0; i < size; i++) {
      const current = q.shift()

      // if there is deadend, skip
      if (deadendsSet.has(current)) continue
      // if the end is reached
      if (target === current) return step

      // current is like "0000", it has four codes, so I have to traverse through the codes and process the iteration
      for (let code = 0; code < 4; code++) {
        // console.log('code:', code)
        let up = turnUp(current, code)
        let down = turnDown(current, code)
        if (!visited.has(up)) {
          q.push(up)
          visited.add(up)
        }
        if (!visited.has(down)) {
          q.push(down)
          visited.add(down)
        }
      }
    }
    // go into the next step of the tree
    step++

    // console.log('step:', step)
  }
  return -1
};

const testCase = (source, result) => {
  console.log(result === openLock(source.deadends, source.target))
}

testCase({ deadends: ["0201", "0101", "0102", "1212", "2002"], target: "0202" }, 6)
testCase({ deadends: ["0000"], target: "8888" }, -1)
testCase({ deadends: ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], target: "8888" }, -1)

// ["0201","0101","0102","1212","2002"]
// "0202"
// 6
// ["0000"]
// "8888"
// -1
// ["8887","8889","8878","8898","8788","8988","7888","9888"]
// "8888"
// -1