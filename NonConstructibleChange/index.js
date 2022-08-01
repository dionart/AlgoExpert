// Given an array of positive integers representing the values of coins in your possession,writeafunction that returns the minimum
// amount of change(the minimum sum of money)that you cannot create.The given coins can have any positive integer value and aren't
// necessarily unique(i.e.,you can have multiple coins of the same value).
// For example,if you're given coins=[1,2,5],the minimum amount of change that you can't create is 4. If you're given no coins,
// the minimum amount of change that you can't create is1.

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }

    currentChangeCreated += coins[i];
  }
  return currentChangeCreated + 1;
}
