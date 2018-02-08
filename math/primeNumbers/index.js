function primeSieve (n) {
  // Mark everything as a prime
  let primes = Array(n + 1).fill(1)

  // 0 and 1 are not prime
  primes[0] = 0
  primes[1] = 0

  // Marking multiples off as not prime
  let high = Math.floor(Math.sqrt(n)) + 1
  for (let i = 2; i < high; i++) {
    if (primes[i] === 1) {
      let j = 2
      while (i * j <= n) {
        primes[i * j] = 0
        j++
      }
    }
  }

  return primes.map((isPrime, i) => (isPrime ? i : null)).filter(n => n)
}

module.exports = primeSieve
