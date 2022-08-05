// Writeafunction that takes inanon-empty string and that returnsaboolean representing whether
// the string isapalindrome.
// Apalindrome is defined asastring that's written the same forward and backward.Note that single
// character strings are palindromes.

//Solution 1

function isPalindrome(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString == string ? true : false;
}

//Solution 2
function isPalindrome(string) {
  let start = 0;
  let end = string.length - 1;

  for (let i = 0; i < string.length; i++) {
    console.log(start, end);
    if (string[start] == string[end]) {
      start++;
      end--;
    } else return false;
  }
  return true;
}
