export const sieve = function(limit) {
    const notPrime = new Uint8Array(limit);
    const primes = [];

    notPrime[0] = notPrime[1] = 1;
    for (let i = 2; i < limit; i++) {
        if (notPrime[i] === 0) {
          primes.push(i);
          for (let j = i * i; j < limit; j+= i) {
            notPrime[j] = 1;
          }
        }
    }
    return primes;
}


export const findPrime = function(limit) {
    const primes = sieve(limit)
    let maxPrime = 0;
    let maxRun = -1;
    
    for (let i = 0; i < primes.length; i++) {
        let sum = 0;
        
        for (let j = i; j < primes.length; j++) {
            sum+= primes[j];
            
            if (sum > limit) break;
            
            if (primes.includes(sum) && sum > maxPrime && j - i > maxRun) {
                maxRun = j - i;
                maxPrime = sum;
            }
        }
    }
    return maxPrime
}

window.findPrime = findPrime