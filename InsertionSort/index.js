// Writeafunction that takes in an array of integers and returnsasorted version of that array.Use the
// Insertion Sort algorithm to sort the array.
// If you're unfamiliar with Insertion Sort,we recommend watching the Conceptual Overview section
// of this question's video explanation before starting to code.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let aux = 0;
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      aux = array[j - 1];
      array[j - 1] = array[j];
      array[j] = aux;
      j--;
    }
  }
  return array;
}
