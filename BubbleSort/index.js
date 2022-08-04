// Write a function that takes in an array of integers and returnsasorted version of that array.Use the
// Bubble Sort algorithm to sort the array.
// If you're unfamiliar with Bubble Sort,we recommend watching the Conceptual Overview section of
// this question's video explanation before starting to code.

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let aux = false;
    if (array[i] > array[i + 1]) {
      aux = array[i + 1];
      array[i + 1] = array[i];
      array[i] = aux;
    }
    if (aux !== false) {
      i = -1;
    }
  }
  return array;
}
