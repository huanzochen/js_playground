let value = 1

const waitFunction = async () => {
  console.log({ value })
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
  await promise
  console.log({ value })
}

const setValueAddFunction = () => {
  value = 2
}

// 透過撰寫有 promise 的 setTimeout 便可實現 promise 的 timeout
waitFunction()

setValueAddFunction()
