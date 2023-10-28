/*Exerice 1
Name: Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.
Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

function isIsogram(str) {
  // Convert the input string to lowercase
  str = str.toLowerCase();

  // Loop through the characters in the string.
  for (let i = 0; i < str.length; i++) {
    // Use a nested loop to compare characters starting from a different index.
    for (let j = i + 1; j < str.length; j++) {
      // Check if the characters at positions i and j are the repeated characters
      if (str[i] === str[j]) {
        // If a repeated character is found, return false (not an isogram).
        return false;
      }
    }
  }

  // If no repeated characters were found, return true
  return true;
}

let word1 = "Dermatoglyphics";
let word2 = "mOose";
let word3 = "aba";
console.log(isIsogram(word1));
console.log(isIsogram(word2));
console.log(isIsogram(word3));
