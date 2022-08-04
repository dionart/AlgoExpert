// The Fibonacci sequence is defined as follows:the first number of the sequence is0,the second
// number is1,and the nth number is the sum of the(n-1)th and(n-2)th numbers.Writea
// function that takes in an integernand returns the nth Fibonacci number.
// Important note:the Fibonacci sequence is often defined with its first two numbers as F0=0and
// F1=1. For the purpose of this question,the first Fibonacci number is F0;therefore,
// getNthFib(1)is equal to FO,getNthFib(2)is equal to F1,etc ..

//Solution 1

function getNthFib(n) {
  const lastTwo = [0, 1];
  let i = 3;

  for (i; i <= n; i++) {
    const nextNumber = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextNumber;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

//Solution 2

function getNthFib(n) {
  if (n == 2) {
    return 1;
  } else if (n == 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

//Solution 3

function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}
