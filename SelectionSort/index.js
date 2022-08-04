// Writeafunction that takes in an array of integers and returnsasorted version of that array.Use the
// Selection Sort algorithm to sort the array.
// If you're unfamiliar with Selection Sort,we recommend watching the Conceptual Overview section
// of this question's video explanation before starting to code.

function selectionSort(array) {
  let currentIndex = 0;
  let aux = 0;

  while (currentIndex < array.length - 1) {
    let smallestNumberIndex = currentIndex;
    for (let i = currentIndex + 1; i < array.length; i++) {
      if (array[i] < array[smallestNumberIndex]) {
        smallestNumberIndex = i;
      }
    }
    aux = array[currentIndex];
    array[currentIndex] = array[smallestNumberIndex];
    array[smallestNumberIndex] = aux;
    currentIndex++;
  }
  return array;
}
