// Write a function that takes inanon-empty array of integers that are sorted in ascending order and returnsanew array of the same
// length with the squares of the original integers also sorted in ascending order.

// Solution 1
function sortedSquaredArray(array) {
  for (i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
  }
  return array.sort((a, b) => a - b);
}

// Solution 2
function sortedSquaredArray(array) {
  const sortedSquaresArray = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquaresArray[i] = Math.pow(smallerValue, 2);
      smallerValueIdx++;
    } else {
      sortedSquaresArray[i] = Math.pow(largerValue, 2);
      largerValueIdx--;
    }
  }
  return sortedSquaresArray;
}
