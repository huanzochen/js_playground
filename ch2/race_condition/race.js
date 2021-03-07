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

const setFunction = () => {
  value = 2
}

waitFunction()
setFunction()
