// Given two non-empty arrays of integers,writeafunction that determines whether the second array isasubsequence of the first one.
// A subsequence of an array isaset of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear
// in the array.For instance,the numbers[1,3,4]formasubsequence of the array[1,2,3,4],and so do the numbers
// [2,4].Note thatasingle number in an array and the array itself are both valid subsequences of the array.

function isValidSubsequence(array, sequence) {
  let indexToFind = 0;
  for (let i = 0; i < array.length; i++) {
    if (indexToFind == sequence.length) {
      break;
    }
    if (array[i] == sequence[indexToFind]) {
      indexToFind++;
    }
  }
  return indexToFind == sequence.length;
}
