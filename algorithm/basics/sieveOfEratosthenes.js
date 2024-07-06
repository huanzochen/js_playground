
// Give a number n, and return the the list of all primes less than or equal to n
const sieveOfEratosthenes = (n) => {
  // initialize a boolean array prime[0...n] and assume all the entries as true.
  let isPrime = new Array(n + 1).fill(true)
  // 0 and 1 are not prime numbers.
  isPrime[0] = isPrime[1] = false

  console.log(' Math.sqrt(n):', Math.sqrt(n))

  // Find prime numbers start from 2 and increment by 1.
  for (let p = 2; p * p <= Math.sqrt(n); p++) {
    if (isPrime[p]) {
      // update all p's multiples as non-prime.
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false
      }
    }
  }

  // console.log('isPrime:', isPrime)
  return isPrime
}

const convertIsPrimeToChar = (isPrime) => {
  const cur = new Map()
  for (let i = 0; i < isPrime.length; i++) {
    cur.set(i, isPrime[i])
  }
  return cur
}
// convertIsPrimeToChar(sieveOfEratosthenes(2500000))
console.log(convertIsPrimeToChar(sieveOfEratosthenes(2500000)))

