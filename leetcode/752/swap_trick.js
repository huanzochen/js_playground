const turnUp = (codes, index) => {
  const codesArray = codes.split('')
  const current = parseInt(codesArray[index])
  if (current === 9) codesArray[index] = '0'
  else {
    codesArray[index] = (current + 1).toString()
  }
  return codesArray.join("")
}

let count = 0
let q1 = new Set(["00"])

let q2 = new Set(["99"])

while (count < 5) {
  let temp = new Set()

  for (let cq1 of q1) {
    const up = turnUp(cq1, 0)
    temp.add(up)

    console.log('cq1:', cq1, 'q2:', q2)

  }

  console.log("Before: ", "q1:", q1, 'q2:', q2, "temp:", temp)

  q1 = q2
  q2 = temp

  console.log("After: ", "q1:", q1, 'q2:', q2, "temp:", temp)

  count++

}