function primeNumber(arr) {
  let prime = [];
  for (i = 0; i < arr.length; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

function isPrime(num) {
  if (num < 2) return console.log(`${num} is not a prime number`);
  else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        return console.log(`${num} is not prime number`);
      } else {
        return console.log(`${num} is a prime number`);
      }
    }
  }
}

primeNumber([1, 2, 3, 4, 5]);
