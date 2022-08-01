// Write a function that takes inanon-empty array of distinct integers and an integer representingatarget sum.If any two numbers in the
// input array sum up to the target sum,the function should return them in an array,in any order.If no two numbers sum up to the target
// sum,the function should return an empty array.
// Note that the target sum has to be obtained by summing two different integers in the array;you can't addasingle integer to itself in
// order to obtain the target sum.
// You can assume that there will be at most one pair of numbers summing up to the target sum.

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; j > 0; j--) {
      if (array[j] + array[i] == targetSum && array[j] != array[i]) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}
