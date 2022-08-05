// You're givenastring of available characters andastring representingadocument that you need to
// generate.Writeafunction that determines if you can generate the document using the available
// characters.If you can generate the document,your function should return true;otherwise,it
// should return false.
// You're only able to generate the document if the frequency of unique characters in the characters
// string is greater than or equal to the frequency of unique characters in the document string.For
// example,if you're given characters="abcabc"and document="aabbccc"you cannot
// generate the document because you're missing onec.
// The document that you need to create may contain any characters,including special characters,
// capital letters,numbers,and spaces.
// Note:you can always generate the empty string("").

function generateDocument(characters, document) {
  let lettersChar = {};
  let lettersDoc = {};

  for (let i = 0; i < characters.length; i++) {
    if (!lettersChar[characters[i]]) {
      lettersChar[characters[i]] = 0;
    }
    lettersChar[characters[i]]++;
  }

  for (let i = 0; i < document.length; i++) {
    if (!(document[i] in lettersChar) || lettersChar[document[i]] === 0) {
      return false;
    }

    lettersChar[document[i]]--;
  }
  return true;
}
