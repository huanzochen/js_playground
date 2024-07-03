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
  // The queue to accommodate the tree with codes.
  let q1 = new Set(["0000"])
  let q2 = new Set([target])

  while (q1.size > 0 && q2.size > 0) {
    const temp = new Set()

    // console.log('comes to while', 'q1.size:',q1.size, 'q2.size:',q2.size )

    for (let current of q1) {
      // if there is deadend, skip
      if (deadendsSet.has(current)) continue
      // if the end is reached
      if (q2.has(current)) return step
      visited.add(current)

      // current is like "0000", it has four codes, so I have to traverse through the codes and process the iteration
      for (let code = 0; code < 4; code++) {
        // console.log('code:', code)
        let up = turnUp(current, code)
        let down = turnDown(current, code)
        if (!visited.has(up)) {
          temp.add(up)
        }
        if (!visited.has(down)) {
          temp.add(down)
        }
      }
    }
    // go into the next step of the tree
    step++

    console.log('q1:', q1)
    console.log('temp:', temp)
    console.log('q2:', q2)

    q1 = q2
    q2 = temp

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